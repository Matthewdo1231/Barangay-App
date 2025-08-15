"use client";
import { useState } from "react";

export default function ClickableImage({ src }: { src: string }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <img
        className="w-20 cursor-pointer hover:opacity-80 transition"
        src={src}
        alt="Valid ID"
        onClick={() => setIsOpen(true)}
      />

      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50"
          onClick={() => setIsOpen(false)}
        >
      
          <div
            className="relative max-w-full max-h-full"
            onClick={(e) => e.stopPropagation()} 
          >
 
            <button
              className="absolute top-2 right-2 text-white text-3xl font-bold bg-black bg-opacity-50 rounded-full px-3 py-1 hover:bg-opacity-70 transition"
              onClick={() => setIsOpen(false)}
            >
              ×
            </button>

    
            <img
              src={src}
              alt="Valid ID Preview"
              className="max-w-full max-h-screen rounded shadow-lg"
            />
          </div>
        </div>
      )}
    </>
  );
}
