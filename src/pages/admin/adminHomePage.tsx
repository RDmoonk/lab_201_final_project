import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
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
          <h1 className="text-xl font-semibold text-gray-800">Admin Home</h1>
        </div>
      </header>

      {/* Page Content */}
      <main className="p-4 md:p-8">
        <h2 className="text-2xl md:text-4xl font-bold mb-6 text-center">
          Bienvenue, Administrateur
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          <Card className="shadow-md hover:shadow-lg transition">
            <CardContent className="p-6 flex flex-col items-start justify-between h-full">
              <div>
                <h3 className="text-xl font-semibold mb-2">Créer une nouvelle visite</h3>
                <p className="text-gray-600 mb-4">
                  Accédez au formulaire pour ajouter une nouvelle visite guidée.
                </p>
              </div>
              <Button onClick={() => navigate("/AdminPanel")}>Créer une visite</Button>
            </CardContent>
          </Card>

         <div className="text-center pt-6">
          <Button variant="outline" onClick={logout}>
            Se déconnecter
          </Button>
        </div>
        </div>
      </main>
    </div>
  )
}
