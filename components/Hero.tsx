"use client";

export default function Hero() {
  return (
    <section
      className="relative w-full h-[600px] bg-cover bg-center"
      style={{ backgroundImage: "url('/images/hero-bg.jpg')" }}
    >
      {/* Gradient overlay: dark on left, fading to transparent on the right */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/40 to-transparent"></div>

      {/* Content container */}
      <div className="relative z-10 max-w-6xl mx-auto px-4 h-full flex items-center">
        <div className="w-full md:w-3/4">
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
