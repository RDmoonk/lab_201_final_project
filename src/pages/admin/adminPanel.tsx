import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import {
  getFirestore,
  collection,
  addDoc,
  getDocs,
  deleteDoc,
  doc,
  Timestamp,
} from "firebase/firestore"
import { initializeApp } from "firebase/app"
import { firebaseConfig } from "@/firebase/firebase-config"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent } from "@/components/ui/card"
import { Checkbox } from "@/components/ui/checkbox"
import { signOut, getAuth, } from "firebase/auth"

const app = initializeApp(firebaseConfig)
const auth = getAuth(app)
const db = getFirestore(app)


type DateTournee = {
  id?: string
  date: Timestamp
  ville: string
  pays: string
  lieu: string
  soldout: boolean
}

export default function AdminPanel() {
  const [dates, setDates] = useState<DateTournee[]>([])
  const navigate = useNavigate()

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

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const form = e.currentTarget
    const formData = new FormData(form)

    await addDoc(collection(db, "dates_tournee"), {
      date: Timestamp.fromDate(new Date(formData.get("date") as string)),
      ville: formData.get("ville"),
      pays: formData.get("pays"),
      lieu: formData.get("lieu"),
      soldout: formData.get("soldout") === "on",
    })

    form.reset()
    await loadDates()
  }

  const handleDelete = async (id: string) => {
    await deleteDoc(doc(db, "dates_tournee", id))
    await loadDates()
  }

      const logout = async () => {
        await signOut(auth)
        navigate("/AdminLogin")
      }

  return (
    <div className="min-h-screen bg-muted">
      {/* Header */}
      <header className="sticky top-0 bg-white shadow-md z-10 border-b">
        <div className="flex items-center justify-between max-w-6xl mx-auto p-4">
          <Button variant="ghost" onClick={() => navigate("/AdminHome")}>
            ← Retour
          </Button>
          <h1 className="text-xl font-semibold">Admin Panel / Form</h1>
          <div />
            <Button variant="outline" onClick={logout}>
            Se déconnecter
          </Button>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-4xl mx-auto px-4 py-8 space-y-10">
        <section>
          <h2 className="text-2xl font-bold mb-4">Ajouter une date de tournée</h2>
          <form onSubmit={handleSubmit} className="grid gap-4">
            <div className="grid gap-2">
              <Label htmlFor="date">Date</Label>
              <Input type="date" name="date" required />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="ville">Ville</Label>
              <Input type="text" name="ville" required />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="pays">Pays</Label>
              <Input type="text" name="pays" required />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="lieu">Lieu / Festival</Label>
              <Input type="text" name="lieu" required />
            </div>
            <div className="flex items-center space-x-2">
              <Checkbox name="soldout" />
              <Label htmlFor="soldout">Sold Out ?</Label>
            </div>
            <Button type="submit">Ajouter la date</Button>
          </form>
        </section>

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
