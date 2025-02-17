// app/(components)/Hero.tsx
'use client';

import Image from 'next/image';

export default function Hero() {
  return (
    <section
      className="relative w-full h-[600px] bg-cover bg-center"
      style={{
        backgroundImage: "url('/images/hero-bg.jpg')",
      }}
    >
      {/* Тёмная полупрозрачная подложка */}
      <div className="absolute inset-0 bg-black bg-opacity-40"></div>

      {/* Контейнер для контента */}
      <div className="relative z-10 max-w-6xl mx-auto px-4 flex items-center h-full">
        {/* Блок с текстом и кнопкой */}
        <div className="md:w-3/4">
          <h1 className="text-4xl md:text-6xl font-bold mb-4 text-left leading-tight">
          N1 Casino Online: Η κορυφαία επιλογή στην Ελλάδα
          </h1>
          <p className="text-2xl mb-6 text-left">
            Έως 1.000€ + 150 Free Spins!
          </p>
          <button className="bg-n1red px-6 py-3 text-lg font-semibold rounded hover:bg-red-600 transition">
            Μάθε Περισσότερα
          </button>
        </div>
      </div>
    </section>
  );
}
