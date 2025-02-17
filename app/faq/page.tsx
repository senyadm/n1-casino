export default function FaqPage() {
    return (
      <main className="min-h-screen bg-gray-900 p-6 text-white">
        {/* Основной заголовок */}
        <h1 className="text-3xl font-bold mb-2 text-center">
          Εκτεταμένες Συχνές Ερωτήσεις (FAQ από τον πίνακα)
        </h1>
  
        {/* Небольшое вступление/описание */}
        <p className="text-center text-sm text-gray-300 mb-8 max-w-3xl mx-auto">
          Εδώ θα βρείτε απαντήσεις στις πιο συχνές ερωτήσεις σχετικά με το N1 Casino. 
          Αν δεν βρείτε αυτό που ψάχνετε, επικοινωνήστε με την υποστήριξή μας!
        </p>
  
        {/* Контейнер для карточек FAQ */}
        <div className="max-w-5xl mx-auto space-y-6">
          {/* Вопрос 1 */}
          <div className="bg-[#1f1f1f] p-5 rounded-lg shadow-lg">
            <h2 className="text-xl font-semibold mb-2">
              Ποια είναι η ελάχιστη κατάθεση στο N1 Casino;
            </h2>
            <p className="text-sm text-gray-200 leading-relaxed">
              Η ελάχιστη κατάθεση είναι 10 ευρώ, όταν χρησιμοποιείτε Viva Wallet ή άλλες δημοφιλείς
              μεθόδους πληρωμής.
            </p>
          </div>
  
          {/* Вопрос 2 */}
          <div className="bg-[#1f1f1f] p-5 rounded-lg shadow-lg">
            <h2 className="text-xl font-semibold mb-2">
              Πώς μπορώ να επαληθεύσω τον λογαριασμό μου;
            </h2>
            <p className="text-sm text-gray-200 leading-relaxed">
              Στέλνετε φωτοτυπία της ταυτότητας/διαβατηρίου και αποδεικτικό κατοικίας (π.χ. λογαριασμό
              ΔΕΚΟ) στην υποστήριξη του N1 Casino.
            </p>
          </div>
  
          {/* Вопрос 3 */}
          <div className="bg-[#1f1f1f] p-5 rounded-lg shadow-lg">
            <h2 className="text-xl font-semibold mb-2">
              Μπορώ να κάνω ανάληψη χωρίς χρέωση;
            </h2>
            <p className="text-sm text-gray-200 leading-relaxed">
              Οι περισσότερες μέθοδοι είναι δωρεάν, αλλά ενδέχεται να υπάρξουν χρεώσεις ανάλογα με τη
              μέθοδο ανάληψης και την τράπεζα.
            </p>
          </div>
  
          {/* Вопрос 4 */}
          <div className="bg-[#1f1f1f] p-5 rounded-lg shadow-lg">
            <h2 className="text-xl font-semibold mb-2">
              Υπάρχει mobile app για το N1 Casino;
            </h2>
            <p className="text-sm text-gray-200 leading-relaxed">
              Ναι. Μπορείτε να κατεβάσετε την εφαρμογή απευθείας από την ιστοσελίδα του καζίνο ή να
              παίξετε μέσω browser, σε συσκευές Android και iOS.
            </p>
          </div>
  
          {/* Вопрос 5 */}
          <div className="bg-[#1f1f1f] p-5 rounded-lg shadow-lg">
            <h2 className="text-xl font-semibold mb-2">
              Πώς λειτουργούν οι προσφορές welcome bonus;
            </h2>
            <p className="text-sm text-gray-200 leading-relaxed">
              Με την ολοκλήρωση της εγγραφής και της πρώτης κατάθεσης, ενεργοποιείται το bonus
              αυτόματα. Βεβαιωθείτε ότι πληροίτε τις απαιτήσεις τζίρου.
            </p>
          </div>
  
          {/* Вопрос 6 */}
          <div className="bg-[#1f1f1f] p-5 rounded-lg shadow-lg">
            <h2 className="text-xl font-semibold mb-2">
              Τι γίνεται αν ξεχάσω τον κωδικό πρόσβασής μου;
            </h2>
            <p className="text-sm text-gray-200 leading-relaxed">
              Χρησιμοποιήστε τη λειτουργία “Forgot Password” στην αρχική σελίδα. Θα λάβετε email
              επαναφοράς για να δημιουργήσετε νέο κωδικό.
            </p>
          </div>
  
          {/* Вопрос 7 */}
          <div className="bg-[#1f1f1f] p-5 rounded-lg shadow-lg">
            <h2 className="text-xl font-semibold mb-2">
              Πώς μπορώ να επικοινωνήσω με την υποστήριξη πελατών;
            </h2>
            <p className="text-sm text-gray-200 leading-relaxed">
              Υπάρχει live chat 24/7, φόρμα επικοινωνίας στο site και email στη διεύθυνση
              support@n1casino.gr.
            </p>
          </div>
  
          {/* Вопрос 8 */}
          <div className="bg-[#1f1f1f] p-5 rounded-lg shadow-lg">
            <h2 className="text-xl font-semibold mb-2">
              Ποια παιχνίδια προσφέρουν μεγαλύτερη επιστροφή (RTP);
            </h2>
            <p className="text-sm text-gray-200 leading-relaxed">
              Συνήθως, τα επιτραπέζια παιχνίδια όπως το μπλάκτζακ ή ορισμένα slots με υψηλό RTP.
              Ελέγξτε την περιγραφή κάθε παιχνιδιού για λεπτομέρειες.
            </p>
          </div>
  
          {/* Вопрос 9 */}
          <div className="bg-[#1f1f1f] p-5 rounded-lg shadow-lg">
            <h2 className="text-xl font-semibold mb-2">Είναι ασφαλές το N1 Casino για συναλλαγές;</h2>
            <p className="text-sm text-gray-200 leading-relaxed">
              Ναι. Όλες οι συναλλαγές γίνονται με κρυπτογράφηση SSL και ενισχυμένα μέτρα ασφάλειας,
              σύμφωνα με τους κανονισμούς της Ελληνικής Επιτροπής Παιγνίων (HGC).
            </p>
          </div>
  
          {/* Вопрос 10 */}
          <div className="bg-[#1f1f1f] p-5 rounded-lg shadow-lg">
            <h2 className="text-xl font-semibold mb-2">
              Υπάρχει πρόγραμμα VIP ή loyalty club;
            </h2>
            <p className="text-sm text-gray-200 leading-relaxed">
              Ναι. Με τη συχνή συμμετοχή, οι παίκτες μπορούν να ανέβουν επίπεδα και να κερδίσουν
              επιπλέον προνόμια, μπόνους και προσφορές.
            </p>
          </div>
        </div>
      </main>
    );
  }
  