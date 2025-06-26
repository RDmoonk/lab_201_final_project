import { useEffect, useState } from 'react';
import {
  getAuth,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
  User
} from 'firebase/auth';
import {
  getFirestore,
  collection,
  addDoc,
  getDocs,
  deleteDoc,
  doc,
  Timestamp
} from 'firebase/firestore';
import { initializeApp } from 'firebase/app';
import { firebaseConfig } from '../firebase/firebase-config';

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
  const [user, setUser] = useState<User | null>(null);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [dates, setDates] = useState<DateTournee[]>([]);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (u) => {
      setUser(u);
      if (u) {
        await loadDates();
      }
    });

    // Sign out on page unload
    return () => {
      auth.signOut();
      unsubscribe();
    };
  }, []);

  const login = async () => {
    try {
      await signInWithEmailAndPassword(auth, email, password);
      alert('Connecté avec succès');
    } catch (e: any) {
      alert('Erreur : ' + e.message);
    }
  };

  const logout = async () => {
    await signOut(auth);
    setUser(null);
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
    <div>
      <h1>Connexion Admin</h1>
      {!user ? (
        <div>
          <input
            type="email"
            placeholder="Email admin"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="Mot de passe"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button onClick={login}>Se connecter</button>
        </div>
      ) : (
        <div>
          <h2>Ajouter une date de tournée</h2>
          <form onSubmit={handleSubmit}>
            <input type="date" name="date" required />
            <input type="text" name="ville" placeholder="Ville" required />
            <input type="text" name="pays" placeholder="Pays" required />
            <input type="text" name="lieu" placeholder="Lieu / Festival" required />
            <label>
              <input type="checkbox" name="soldout" /> Sold Out ?
            </label>
            <button type="submit">Ajouter</button>
          </form>

          <h2>Dates existantes</h2>
          <ul>
            {dates.map((d) => (
              <li key={d.id}>
                {d.date.toDate().toLocaleDateString()} - {d.ville}, {d.pays} (
                {d.lieu}) {d.soldout ? '[Sold Out]' : ''}
                <button onClick={() => d.id && handleDelete(d.id)}>Supprimer</button>
              </li>
            ))}
          </ul>

          <div>
            <button onClick={logout}>Se déconnecter</button>
          </div>
        </div>
      )}
    </div>
  );
}
