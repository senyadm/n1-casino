"use client";

import Link from "next/link";
import { FaFireAlt, FaGift, FaBolt, FaTv, FaPlay, FaStar } from "react-icons/fa";

export default function CategorySection() {
  const externalHref = "https://www.n1casino.gr/el";
  
  return (
    <div className="w-full bg-gray-900 py-6">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4">
        
        {/* 1. Παιχνίδια */}
        <Link
          href={externalHref}
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center justify-center space-y-1 group"
        >
          <FaStar className="w-8 h-8 text-red-500 transition-colors group-hover:text-red-300" />
          <span className="text-white text-sm font-semibold transition-colors group-hover:text-red-300">
            Παιχνίδια
          </span>
        </Link>

        {/* 2. Κορυφαία Παιχνίδια */}
        <Link
          href={externalHref}
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center justify-center space-y-1 group"
        >
          <FaFireAlt className="w-8 h-8 text-red-500 transition-colors group-hover:text-red-300" />
          <span className="text-white text-sm font-semibold transition-colors group-hover:text-red-300">
            Κορυφαία Παιχνίδια
          </span>
        </Link>

        {/* 3. Live Casino */}
        <Link
          href={externalHref}
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center justify-center space-y-1 group"
        >
          <FaTv className="w-8 h-8 text-red-500 transition-colors group-hover:text-red-300" />
          <span className="text-white text-sm font-semibold transition-colors group-hover:text-red-300">
            Live Casino
          </span>
        </Link>

        {/* 4. Playson */}
        <Link
          href={externalHref}
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center justify-center space-y-1 group"
        >
          <FaPlay className="w-8 h-8 text-red-500 transition-colors group-hover:text-red-300" />
          <span className="text-white text-sm font-semibold transition-colors group-hover:text-red-300">
            Playson
          </span>
        </Link>

        {/* 5. Νεα Παιχνίδια */}
        <Link
          href={externalHref}
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center justify-center space-y-1 group"
        >
          <FaBolt className="w-8 h-8 text-red-500 transition-colors group-hover:text-red-300" />
          <span className="text-white text-sm font-semibold transition-colors group-hover:text-red-300">
            Νεα Παιχνίδια
          </span>
        </Link>

        {/* 6. Bonus Buy Παιχνίδια */}
        <Link
          href={externalHref}
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center justify-center space-y-1 group"
        >
          <FaGift className="w-8 h-8 text-red-500 transition-colors group-hover:text-red-300" />
          <span className="text-white text-sm font-semibold transition-colors group-hover:text-red-300">
            Bonus Buy Παιχνίδια
          </span>
        </Link>
      </div>
    </div>
  );
}
