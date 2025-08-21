"use client";

import Image from "next/image";
import { useState } from "react";
import { AnimatePresence, motion, PanInfo } from "framer-motion";

type Candidate = {
  id: number;
  name: string;
  title: string;
  description: string;
  imageUrl: string;
  websiteUrl: string;
};

export default function CandidatesCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const candidates: Candidate[] = [
    {
      id: 1,
      name: "Juan Dela Cruz",
      title: "Governor",
      description:
        "Juan Dela Cruz is a dedicated public servant with a focus on good governance, healthcare, and sustainable programs for the province.",
      imageUrl: "https://i.pravatar.cc/300?img=12",
      websiteUrl: "https://example.com/juan-delacruz",
    },
    {
      id: 2,
      name: "Maria Santos",
      title: "Vice Governor",
      description:
        "Maria Santos advocates for education reform, youth empowerment, and livelihood opportunities for local communities.",
      imageUrl: "https://i.pravatar.cc/300?img=45",
      websiteUrl: "https://example.com/maria-santos",
    },
    {
      id: 3,
      name: "Jose Ramirez",
      title: "Provincial Board Member",
      description:
        "Jose Ramirez has years of experience in community leadership, focusing on infrastructure development and disaster preparedness.",
      imageUrl: "https://i.pravatar.cc/300?img=32",
      websiteUrl: "https://example.com/jose-ramirez",
    },
    {
      id: 4,
      name: "Angela Cruz",
      title: "Mayor",
      description:
        "Angela Cruz is committed to transparency, efficient public service delivery, and inclusive growth for her municipality.",
      imageUrl: "https://i.pravatar.cc/300?img=55",
      websiteUrl: "https://example.com/angela-cruz",
    },
    {
      id: 5,
      name: "Ramon Villanueva",
      title: "Barangay Captain",
      description:
        "Ramon Villanueva works closely with his constituents to strengthen barangay programs on peace, order, and community development.",
      imageUrl: "https://i.pravatar.cc/300?img=68",
      websiteUrl: "https://example.com/ramon-villanueva",
    },
  ];

  const activeCandidate = candidates[currentIndex];

  const handleDragEnd = (_: any, info: PanInfo) => {
    const offset = info.offset.x;
    const velocity = info.velocity.x;

    if (offset < -100 || velocity < -500) {
      setCurrentIndex((prev) => (prev === candidates.length - 1 ? 0 : prev + 1));
    } else if (offset > 100 || velocity > 500) {
      setCurrentIndex((prev) => (prev === 0 ? candidates.length - 1 : prev - 1));
    }
  };

  return (
    <section className="bg-[#233353] text-white px-6 py-12 overflow-hidden">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-8 relative min-h-[400px]">
        <AnimatePresence mode="wait" initial={false}>
          <motion.div
            key={activeCandidate.id}
            className="flex flex-col md:flex-row gap-8 w-full cursor-grab active:cursor-grabbing"
            drag="x"
            dragConstraints={{ left: 0, right: 0 }}
            onDragEnd={handleDragEnd}
          >
            {/* Image */}
            <motion.div
              key={`img-${activeCandidate.id}`}
              className="w-full md:w-1/3"
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -40 }}
              transition={{ duration: 0.45, ease: "easeOut" }}
              layout
            >
              <Image
                src={activeCandidate.imageUrl}
                alt={activeCandidate.name}
                width={400}
                height={500}
                className="rounded-md shadow-md object-cover"
              />
            </motion.div>

            {/* Content */}
            <motion.div
              key={`content-${activeCandidate.id}`}
              className="w-full md:w-2/3 flex flex-col justify-center"
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -40 }}
              transition={{ duration: 0.45, ease: "easeOut" }}
              layout
            >
              <h4 className="text-sm font-semibold tracking-widest text-yellow-400 uppercase">
                {activeCandidate.title}
              </h4>
              <h2 className="text-3xl font-bold mb-4">{activeCandidate.name}</h2>
              <p className="text-gray-200 mb-6 leading-relaxed">
                {activeCandidate.description}
              </p>
            </motion.div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Dots */}
      <div className="flex justify-center mt-8 space-x-3">
        {candidates.map((c, idx) => (
          <motion.button
            key={c.id}
            className={`h-4 w-4 rounded-full transition-colors ${
              idx === currentIndex ? "bg-white" : "bg-gray-500/50"
            }`}
            animate={{ scale: idx === currentIndex ? 1.3 : 1 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
            onClick={() => setCurrentIndex(idx)}
          />
        ))}
      </div>

      {/* Bottom section */}
      <div className="border-t border-yellow-500 mt-12 pt-6 flex flex-col md:flex-row items-center justify-between">
        <p className="text-gray-200 mb-4 md:mb-0">
          Learn more about your state elected officials ➝
        </p>
      </div>
    </section>
  );
}
