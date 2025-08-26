"use client";
import { useSearchParams, useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react';
import { Suspense } from 'react';

export default function SuccessMessage() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const success = searchParams.get("success");
  const [show, setShow] = useState(false);
  useEffect(() => {
    if (success) {
      setShow(true);
      const timer = setTimeout(() => {
        setShow(false);
        router.replace(window.location.pathname);
      }, 3000);

      return () => clearTimeout(timer);
    }
  }, [success, router]);

  if (!show) return null;

  return (
     <Suspense fallback={<div>Loading...</div>}>
    <div className="fixed inset-0 flex items-start justify-center mt-20 z-50">
      <div className="bg-green-200 text-green-800 px-4 py-2 rounded shadow-lg">
        ✅ News created successfully!
      </div>
    </div>
    </Suspense>
  );
}
