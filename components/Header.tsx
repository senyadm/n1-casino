"use client";

import Link from "next/link";
import Image from "next/image";

export default function Header() {
  const scrollByPixels = (e: React.MouseEvent, pixels: number) => {
    e.preventDefault();
    window.scrollBy({ top: pixels, behavior: "smooth" });
  };

  return (
    <header className="bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
        {/* Logo as a button linking to home */}
        <Link href="/" className="flex items-center space-x-2">
          <Image
            src="/images/logo-n1.png"
            alt="N1 Casino Logo"
            width={120}
            height={40}
            priority
          />
        </Link>

        {/* Navigation (links scroll down a fixed number of pixels) */}
        <nav className="hidden md:flex space-x-6">
          <a
            href="#"
            onClick={(e) => scrollByPixels(e, 750)}
            className="hover:text-n1red transition"
          >
            Σχετικά
          </a>
          <a
            href="#"
            onClick={(e) => scrollByPixels(e, 3500)}
            className="hover:text-n1red transition"
          >
            Προσφορές
          </a>
          <a
            href="#"
            onClick={(e) => scrollByPixels(e, 4940)}
            className="hover:text-n1red transition"
          >
            Μέθοδοι Πληρωμής
          </a>
          <a
            href="#"
            onClick={(e) => scrollByPixels(e, 6350)}
            className="hover:text-n1red transition"
          >
            Παιχνίδια
          </a>
          <Link href="/faq" className="hover:text-n1red transition">
            FAQ
          </Link>
        </nav>

        {/* Buttons */}
        <div className="flex space-x-3">
          <Link
            href="https://www.n1casino.gr/el?sign-in=modal"
            target="_blank"
            rel="noopener noreferrer"
            className="border border-n1red px-4 py-2 text-sm rounded hover:bg-n1red transition"
          >
            Είσοδος
          </Link>
          <Link
            href="https://www.n1casino.gr/el?sign-up=modal"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-n1red px-4 py-2 text-sm rounded hover:bg-red-600 transition"
          >
            Εγγραφή
          </Link>
        </div>
      </div>
    </header>
  );
}
