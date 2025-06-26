import {useState } from 'react';
import {getAuth,signInWithEmailAndPassword} from 'firebase/auth';
import { initializeApp } from 'firebase/app';
import { firebaseConfig } from '../../firebase/firebase-config';
import { useNavigate } from 'react-router-dom';

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);


export default function AdminLogin() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();



  const login = async () => {
    try {
      await signInWithEmailAndPassword(auth, email, password);
    navigate('/AdminPanel')
    } catch (e: any) {
      alert('Erreur : ' + e.message);
    }
  };




  return (
    <div>
      <h1>Connexion Admin</h1>
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
    </div>
  );
}
