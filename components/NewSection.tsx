"use client";
import Link from "next/link";

export default function NewSection() {
  return (
    <section
      className="relative w-full overflow-hidden bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: "url('/images/new.jpg')" }} // Replace with your image path
    >
      {/* Gradient overlay: dark on left fading to transparent on the right */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-transparent" />

      {/* Main content container */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 py-16 flex flex-col items-start text-white">
        <div className="max-w-3xl">
          <h1 className="text-5xl font-bold mb-6 leading-tight">
            Το N1 Casino είναι μια σύγχρονη πλατφόρμα online gaming
          </h1>
          <p className="text-lg leading-relaxed text-gray-200 mb-8">
            Το N1 Casino είναι μια σύγχρονη πλατφόρμα online gaming, σχεδιασμένη
            ώστε να προσφέρει μεγάλη γκάμα ψυχαγωγικών επιλογών, όπως φρουτάκια,
            επιτραπέζια παιχνίδια και casino live με αληθινούς ντίλερ σε live
            περιβάλλον. Το ν1 casino διαθέτει μια εκτενή συλλογή παιχνιδιών,
            όμως για λόγους απλότητας θα αναφερθούμε σε όσα ξεχωρίζουν. Με
            έμφαση στη διαφάνεια και την αξιοπιστία, εφαρμόζει αυστηρές
            διαδικασίες για δίκαιο παιχνίδι, ενώ παράλληλα τηρεί τους όρους που
            θέτει η εεεπ (χρησιμοποιεί προηγμένη κρυπτογράφηση για τα στοιχεία
            κάθε χρήστη).
          </p>
          <Link
            href="https://www.n1casino.gr/el"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-red-600 hover:bg-red-500 transition-colors px-6 py-3 rounded-md text-sm font-semibold shadow-md"
          >
            Μάθε Περισσότερα
          </Link>
        </div>
      </div>
    </section>
  );
}
