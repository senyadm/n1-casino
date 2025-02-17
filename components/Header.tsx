"use client";

import Link from "next/link";
import Image from "next/image";

export default function Header() {
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

        {/* Navigation (links to sections) */}
        <nav className="hidden md:flex space-x-6">
          <Link href="#about" scroll={false} className="hover:text-n1red transition">
            Σχετικά
          </Link>
          <Link href="#games" scroll={false} className="hover:text-n1red transition">
            Φρουτάκια
          </Link>
          <Link href="#live-casino" scroll={false} className="hover:text-n1red transition">
            Live Casino
          </Link>
          <Link href="#promotions" scroll={false} className="hover:text-n1red transition">
            Προσφορές
          </Link>
          <Link href="/faq" className="hover:text-n1red transition">
            FAQ
          </Link>
        </nav>

        {/* Buttons */}
        <div className="flex space-x-3">
          <button className="border border-n1red px-4 py-2 text-sm rounded hover:bg-n1red transition">
            Είσοδος
          </button>
          <button className="bg-n1red px-4 py-2 text-sm rounded hover:bg-red-600 transition">
            Εγγραφή
          </button>
        </div>
      </div>
    </header>
  );
}
