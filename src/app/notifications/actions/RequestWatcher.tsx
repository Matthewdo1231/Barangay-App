// app/notifications/RequestWatcher.tsx
"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function RequestWatcher() {
  const router = useRouter();

  useEffect(() => {
    const interval = setInterval(() => {
      router.refresh(); // Force re-fetch server component data in 10 minutes interval
    }, 600000); 

    return () => clearInterval(interval); 
  }, [router]);

  return null; 
}
