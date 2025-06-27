import { useState } from 'react';
import { getAuth, signOut } from 'firebase/auth';
import { getFirestore, collection, addDoc, getDocs, deleteDoc, doc, Timestamp } from 'firebase/firestore';
import { initializeApp } from 'firebase/app';
import { firebaseConfig } from '../../firebase/firebase-config';

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

type DateTournee = {
  id?: string;
  date: Timestamp;
  ville: string;
  pays: string;
  lieu: string;
  soldout: boolean;
};

export default function AdminPanel() {
  const [dates, setDates] = useState<DateTournee[]>([]);

  const logout = async () => {
    await signOut(auth);
    setDates([]);
  };

  const loadDates = async () => {
    const snapshot = await getDocs(collection(db, 'dates_tournee'));
    const loadedDates: DateTournee[] = [];
    snapshot.forEach((docSnap) => {
      const data = docSnap.data();
      loadedDates.push({ id: docSnap.id, ...data } as DateTournee);
    });
    setDates(loadedDates);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const formData = new FormData(form);
    await addDoc(collection(db, 'dates_tournee'), {
      date: Timestamp.fromDate(new Date(formData.get('date') as string)),
      ville: formData.get('ville'),
      pays: formData.get('pays'),
      lieu: formData.get('lieu'),
      soldout: formData.get('soldout') === 'on'
    });
    form.reset();
    await loadDates();
  };

  const handleDelete = async (id: string) => {
    await deleteDoc(doc(db, 'dates_tournee', id));
    await loadDates();
  };

  return (
    <div className="max-w-3xl mx-auto p-6">
      <h2 className="text-2xl font-bold mb-4">Ajouter une date de tournée</h2>
      <form onSubmit={handleSubmit} className="grid grid-cols-1 gap-4 mb-8">
        <input type="date" name="date" required className="border border-gray-300 rounded p-2" />
        <input type="text" name="ville" placeholder="Ville" required className="border border-gray-300 rounded p-2" />
        <input type="text" name="pays" placeholder="Pays" required className="border border-gray-300 rounded p-2" />
        <input type="text" name="lieu" placeholder="Lieu / Festival" required className="border border-gray-300 rounded p-2" />
        <label className="flex items-center gap-2">
          <input type="checkbox" name="soldout" className="accent-red-500" /> Sold Out ?
        </label>
        <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
          Ajouter
        </button>
      </form>

      <h2 className="text-xl font-semibold mb-2">Dates existantes</h2>
      <ul className="space-y-2 mb-6">
        {dates.map((d) => (
          <li key={d.id} className="flex justify-between items-center bg-gray-100 p-3 rounded shadow-sm">
            <span>
              {d.date.toDate().toLocaleDateString()} - {d.ville}, {d.pays} ({d.lieu}){' '}
              {d.soldout && <span className="text-red-600 font-semibold">[Sold Out]</span>}
            </span>
            <button
              onClick={() => d.id && handleDelete(d.id)}
              className="text-sm bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
            >
              Supprimer
            </button>
          </li>
        ))}
      </ul>

      <div className="text-center">
        <button
          onClick={logout}
          className="bg-gray-800 text-white px-6 py-2 rounded hover:bg-gray-700"
        >
          Se déconnecter
        </button>
      </div>
    </div>
  );
}
