import {useState, ChangeEvent } from 'react';
import {getAuth,signInWithEmailAndPassword} from 'firebase/auth';
import { initializeApp } from 'firebase/app';
import { firebaseConfig } from '../../firebase/firebase-config';
import { useNavigate } from 'react-router-dom';

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);


export default function AdminLogin() {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const navigate = useNavigate();



  const login = async () => {
    try {
      await signInWithEmailAndPassword(auth, email, password);
    navigate('/AdminPanel')
    } catch (e: any) {
      alert('Erreur : ' + e.message);
    }
  };

  
  const handleEmailChange = (e: ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e: ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  // const login = async () => {
  //   try{
  //     const userCredential = await signInWithEmailAndPassword(auth, email, password);
  //     const user = userCredential.user;
  //     console.log(user)

  //     // verifie que l'admin est connecté
  //     if(!user) throw new Error("User not found");

  //     const idTokenResult = await user.getIdTokenResult();

  //     if (idTokenResult.claims.admin === true){
  //       setTimeout(() =>{
  //           navigate('/AdminPanel');
  //       }, 500)
  //     } else {
  //       alert("Vous n'êtes pas un administrateur.");
  //     }
  //   } catch (e: unknown){
  //     if(e instanceof Error){
  //       alert('Erreur:' + e.message);
  //     } else {
  //       alert('An error has occurer');
  //     }
  //   }
  // }




  return (
    <div>
      <h1>Connexion Admin</h1>
        <div>
          <input
            type="email"
            placeholder="Email admin"
            value={email}
               onChange={handleEmailChange}
          />
          <input
            type="password"
            placeholder="Mot de passe"
            value={password}
             onChange={handlePasswordChange}
          />
          <button onClick={login}>Se connecter</button>
        </div>
    </div>
  );
}
