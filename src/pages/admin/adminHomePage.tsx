import { Button } from "@/components/ui/button"
// import { Card, CardContent } from "@/components/ui/card"
import { useNavigate } from "react-router-dom"
import { signOut, getAuth, } from "firebase/auth"
import { firebaseConfig } from "@/firebase/firebase-config"
import { initializeApp } from "firebase/app"

export default function AdminHome() {
  const navigate = useNavigate()

  
  const app = initializeApp(firebaseConfig)
  const auth = getAuth(app)


    const logout = async () => {
      await signOut(auth)
      navigate("/AdminLogin")
    }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Simple Header */}
      <header className="bg-white border-b shadow-sm sticky top-0 z-50 w-full">
        <div className="max-w-6xl mx-auto px-4 py-4">
          <h1 className="text-xl font-semibold text-gray-800">Aesop Rock Page Admin</h1>
                <Button variant="outline" onClick={logout}>
            Se déconnecter
          </Button>
        </div>
      </header>

      {/* Page Content */}
      <main className="p-4 md:p-8">
        <h2 className="text-2xl md:text-4xl font-bold mb-6 text-center">
          Bienvenue, Administrateur
        </h2>
                

        <Button onClick={() => navigate("/AdminPanel")}>Créer une date</Button>
      </main>
    </div>
  )
}
