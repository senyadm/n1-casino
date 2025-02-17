"use client";

import Link from "next/link";
import { FaFireAlt, FaGift, FaBolt, FaTv, FaPlay, FaStar } from "react-icons/fa";

export default function CategorySection() {
  return (
    <div className="w-full bg-gray-900 py-6">
      <div className="max-w-7xl mx-auto px-4 flex flex-wrap items-center justify-center gap-10">
        
        {/* 1. Παιχνίδια */}
        <Link href="/games" className="flex items-center space-x-2 group">
          <FaStar className="w-6 h-6 text-red-500 transition-colors group-hover:text-red-300" />
          <span className="text-white text-lg font-semibold transition-colors group-hover:text-red-300">
            Παιχνίδια
          </span>
        </Link>

        {/* 2. Κορυφαία Παιχνίδια */}
        <Link href="/top-games" className="flex items-center space-x-2 group">
          <FaFireAlt className="w-6 h-6 text-red-500 transition-colors group-hover:text-red-300" />
          <span className="text-white text-lg font-semibold transition-colors group-hover:text-red-300">
            Κορυφαία Παιχνίδια
          </span>
        </Link>

        {/* 3. Live Casino */}
        <Link href="/live-casino" className="flex items-center space-x-2 group">
          <FaTv className="w-6 h-6 text-red-500 transition-colors group-hover:text-red-300" />
          <span className="text-white text-lg font-semibold transition-colors group-hover:text-red-300">
            Live Casino
          </span>
        </Link>

        {/* 4. Playson */}
        <Link href="/playson" className="flex items-center space-x-2 group">
          <FaPlay className="w-6 h-6 text-red-500 transition-colors group-hover:text-red-300" />
          <span className="text-white text-lg font-semibold transition-colors group-hover:text-red-300">
            Playson
          </span>
        </Link>

        {/* 5. Νεα Παιχνίδια */}
        <Link href="/new-games" className="flex items-center space-x-2 group">
          <FaBolt className="w-6 h-6 text-red-500 transition-colors group-hover:text-red-300" />
          <span className="text-white text-lg font-semibold transition-colors group-hover:text-red-300">
            Νεα Παιχνίδια
          </span>
        </Link>

        {/* 6. Bonus Buy Παιχνίδια */}
        <Link href="/bonus-buy" className="flex items-center space-x-2 group">
          <FaGift className="w-6 h-6 text-red-500 transition-colors group-hover:text-red-300" />
          <span className="text-white text-lg font-semibold transition-colors group-hover:text-red-300">
            Bonus Buy Παιχνίδια
          </span>
        </Link>
      </div>
    </div>
  );
}
