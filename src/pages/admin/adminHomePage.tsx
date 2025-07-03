import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { useNavigate } from "react-router-dom"
import { signOut, getAuth } from "firebase/auth"
import { firebaseConfig } from "@/firebase/firebase-config"
import { initializeApp } from "firebase/app"
import { useState, useEffect } from "react"
import { getFirestore, collection, getDocs, deleteDoc, doc, Timestamp } from "firebase/firestore"

type DateTournee = {
  id?: string
  date: Timestamp
  ville: string
  pays: string
  lieu: string
  soldout: boolean
}

export default function AdminHome() {
  const navigate = useNavigate()

  const app = initializeApp(firebaseConfig)
  const auth = getAuth(app)
  const db = getFirestore(app)

  const logout = async () => {
    await signOut(auth)
    navigate("/AdminLogin")
  }

  const [dates, setDates] = useState<DateTournee[]>([])

  useEffect(() => {
    loadDates()
  }, [])

  const loadDates = async () => {
    const snapshot = await getDocs(collection(db, "dates_tournee"))
    const loadedDates: DateTournee[] = []
    snapshot.forEach((docSnap) => {
      const data = docSnap.data()
      loadedDates.push({ id: docSnap.id, ...data } as DateTournee)
    })
    setDates(loadedDates)
  }

  const handleDelete = async (id: string) => {
    await deleteDoc(doc(db, "dates_tournee", id))
    await loadDates()
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white border-b shadow-sm sticky top-0 z-50 w-full">
        <div className="max-w-6xl mx-auto px-4 py-4">
          <h1 className="text-xl font-semibold text-gray-800">Aesop Rock Page Admin</h1>
          <Button variant="outline" onClick={logout}>
            Se déconnecter
          </Button>
        </div>
      </header>

      <main className="p-4 md:p-8">
        <h2 className="text-2xl md:text-4xl font-bold mb-6 text-center">
          Bienvenue, Administrateur
        </h2>
        <Button onClick={() => navigate("/AdminPanel")}>Créer une date</Button>

        <section>
          <h2 className="text-xl font-semibold mb-4">Dates existantes</h2>
          <div className="space-y-4">
            {dates.map((d) => (
              <Card key={d.id}>
                <CardContent className="flex flex-col md:flex-row md:items-center justify-between gap-2 p-4">
                  <p className="text-sm">
                    {d.date.toDate().toLocaleDateString()} — {d.ville}, {d.pays} ({d.lieu}){" "}
                    {d.soldout && <span className="text-red-600 font-semibold">[Sold Out]</span>}
                  </p>
                  <Button
                    variant="destructive"
                    size="sm"
                    onClick={() => d.id && handleDelete(d.id)}
                  >
                    Supprimer
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>
      </main>
    </div>
  )
}
