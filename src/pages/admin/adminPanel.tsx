import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import {
  getFirestore,
  collection,
  addDoc,
  getDoc,
  doc,
  setDoc,
  Timestamp,
} from "firebase/firestore"
import { initializeApp } from "firebase/app"
import { firebaseConfig } from "@/firebase/firebase-config"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Checkbox } from "@/components/ui/checkbox"
import { signOut, getAuth } from "firebase/auth"

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
  const navigate = useNavigate()
  const { id } = useParams()

  const [formValues, setFormValues] = useState({
    date: "",
    ville: "",
    pays: "",
    lieu: "",
    soldout: false,
  })

  useEffect(() => {
    if (id) loadDateForEdit(id)
  }, [id])

  const loadDateForEdit = async (id: string) => {
    const docRef = doc(db, "dates_tournee", id)
    const docSnap = await getDoc(docRef)
    if (docSnap.exists()) {
      const data = docSnap.data() as DateTournee
      setFormValues({
        date: data.date.toDate().toISOString().split("T")[0],
        ville: data.ville,
        pays: data.pays,
        lieu: data.lieu,
        soldout: data.soldout,
      })
    }
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    const payload: DateTournee = {
      date: Timestamp.fromDate(new Date(formValues.date)),
      ville: formValues.ville,
      pays: formValues.pays,
      lieu: formValues.lieu,
      soldout: formValues.soldout,
    }

    if (id) {
      await setDoc(doc(db, "dates_tournee", id), payload)
    } else {
      await addDoc(collection(db, "dates_tournee"), payload)
    }

    setFormValues({
      date: "",
      ville: "",
      pays: "",
      lieu: "",
      soldout: false,
    })

    navigate("/adminHome")
  }

  const logout = async () => {
    await signOut(auth)
    navigate("/AdminLogin")
  }

  return (
    <div className="min-h-screen bg-muted">
      <header className="sticky top-0 bg-white shadow-md z-10 border-b">
        <div className="flex items-center justify-between max-w-6xl mx-auto p-4">
          <Button variant="ghost" onClick={() => navigate("/AdminHome")}>
            ← Retour
          </Button>
          <h1 className="text-xl font-semibold">
            {id ? "Modifier une date" : "Ajouter une date"}
          </h1>
          <div />
          <Button variant="outline" onClick={logout}>
            Se déconnecter
          </Button>
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-4 py-8 space-y-10">
        <section>
          <form onSubmit={handleSubmit} className="grid gap-4">
            <div className="grid gap-2">
              <Label htmlFor="date">Date</Label>
              <Input
                type="date"
                name="date"
                required
                value={formValues.date}
                onChange={(e) =>
                  setFormValues({ ...formValues, date: e.target.value })
                }
              />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="ville">Ville</Label>
              <Input
                type="text"
                name="ville"
                required
                value={formValues.ville}
                onChange={(e) =>
                  setFormValues({ ...formValues, ville: e.target.value })
                }
              />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="pays">Pays</Label>
              <Input
                type="text"
                name="pays"
                required
                value={formValues.pays}
                onChange={(e) =>
                  setFormValues({ ...formValues, pays: e.target.value })
                }
              />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="lieu">Lieu / Festival</Label>
              <Input
                type="text"
                name="lieu"
                required
                value={formValues.lieu}
                onChange={(e) =>
                  setFormValues({ ...formValues, lieu: e.target.value })
                }
              />
            </div>
            <div className="flex items-center space-x-2">
              <Checkbox
                name="soldout"
                checked={formValues.soldout}
                onCheckedChange={(checked) =>
                  setFormValues({ ...formValues, soldout: checked as boolean })
                }
              />
              <Label htmlFor="soldout">Sold Out ?</Label>
            </div>
            <Button type="submit">
              {id ? "Mettre à jour la date" : "Ajouter la date"}
            </Button>
          </form>
        </section>
      </main>
    </div>
  )
}
