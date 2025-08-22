"use client";

import { useTransition } from "react";
import { RefreshCw } from "lucide-react";

export default function RefreshButton({ onRefresh, loading }: { onRefresh: () => Promise<void>; loading: boolean; }) {
  const [isPending, startTransition] = useTransition();

  return (
    <button
      onClick={onRefresh}
      disabled={loading}
      className="p-2 rounded-lg border border-gray-300 hover:bg-gray-100 disabled:opacity-50"
      aria-label="Refresh"
    >
      <RefreshCw className={`h-5 w-5 ${loading ? "animate-spin" : ""}`} />
    </button>
  );
}
