import { useState, ChangeEvent } from "react"
import { getAuth, signInWithEmailAndPassword } from "firebase/auth"
import { initializeApp } from "firebase/app"
import { firebaseConfig } from "../../firebase/firebase-config"
import { useNavigate } from "react-router-dom"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent } from "@/components/ui/card"
import { Label } from "@/components/ui/label"

const app = initializeApp(firebaseConfig)
const auth = getAuth(app)

export default function AdminLogin() {
  const [email, setEmail] = useState<string>("")
  const [password, setPassword] = useState<string>("")
  const navigate = useNavigate()

  const login = async () => {
    try {
      await signInWithEmailAndPassword(auth, email, password)
      navigate("/adminHome")
    } catch (e: any) {
      alert("Erreur : " + e.message)
    }
  }

  const handleEmailChange = (e: ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value)
  }

  const handlePasswordChange = (e: ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value)
  }

  return (
    <div className="min-h-screen bg-muted flex flex-col">
      {/* Header */}
      <header className="sticky top-0 bg-white shadow-md z-10 border-b">
        <div className="flex items-center justify-between max-w-6xl mx-auto px-4 py-3 sm:py-4">
          <Button variant="ghost" onClick={() => navigate("/")}>
            ← Retour
          </Button>
          <h1 className="text-lg sm:text-xl font-semibold text-center w-full">
            Admin Login
          </h1>
          <div className="w-16 sm:w-24" /> {/* espace pour équilibrer le header */}
        </div>
      </header>

      {/* Main Content */}
      <main className="flex flex-1 items-center justify-center px-4 py-10">
        <Card className="w-full max-w-sm sm:max-w-md md:max-w-lg">
          <CardContent className="space-y-6 p-4 sm:p-6">
            <div className="space-y-2">
              <Label htmlFor="email">Email admin</Label>
              <Input
                type="email"
                placeholder="Email"
                value={email}
                onChange={handleEmailChange}
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="password">Mot de passe</Label>
              <Input
                type="password"
                placeholder="Mot de passe"
                value={password}
                onChange={handlePasswordChange}
              />
            </div>

            <Button className="w-full" onClick={login}>
              Se connecter
            </Button>
          </CardContent>
        </Card>
      </main>
    </div>
  )
}
