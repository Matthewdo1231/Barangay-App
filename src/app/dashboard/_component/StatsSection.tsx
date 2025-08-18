import React from 'react';

export default function StatsSection() {
  return (
        <section className="bg-gray-100 py-12">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 text-center gap-6">
          <div>
            <p className="text-3xl font-bold text-green-600">2,500+</p>
            <p className="text-gray-600">Residents Served</p>
          </div>
          <div>
            <p className="text-3xl font-bold text-green-600">24/7</p>
            <p className="text-gray-600">Serviced</p>
          </div>
        </div>
      </section>

  );
}