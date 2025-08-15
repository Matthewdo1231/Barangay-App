"use client";

import { useState, useEffect } from "react";
import { createClient } from "@supabase/supabase-js";
import ClickableImage from "../../_component/Clickable";
import { Props } from "../action";

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
);

export default function PendingRequestsClient({ initialData }: Props) {
  const [pendingRequests, setPendingRequests] = useState(initialData);

  useEffect(() => {
    // Fetch updated data from the database
    async function fetchData() {
      const { data, error } = await supabase
        .from("Request") 
        .select("*")
        .eq("status", "PENDING")
        .order("createdAt", { ascending: false });

      if (error) {
        console.error("Error fetching data:", error.message);
        return;
      }

      setPendingRequests(data || []);
    }

    // Subscribe to realtime changes
    const channel = supabase
      .channel("pending-requests-channel")
      .on(
        "postgres_changes",
        { event: "*", schema: "public", table: "Request" },
        (payload) => {
          fetchData();
        }
      )
      .subscribe((status) => {
      });

    fetchData();

    return () => {
      supabase.removeChannel(channel);
    };
  }, []);

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Pending Requests</h1>
      {pendingRequests.length === 0 ? (
        <p>No pending requests found.</p>
      ) : (
        <ul className="space-y-4">
          {pendingRequests.map((req) => (
            <li key={req.id} className="border p-4 rounded">
              <p><strong>{req.fullName}</strong></p>
              <p>{req.emailAddress}</p>
              <p>Status: {req.status}</p>
              <p>Address: {req.currentAddress}</p>
              <ClickableImage src={req.validIdUrl} />
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
