import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
// import { useNavigate } from "react-router-dom"
// import { signOut, getAuth } from "firebase/auth"
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


  const app = initializeApp(firebaseConfig)
  const db = getFirestore(app)

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


export default function FrontEndTournee() {
    return(
        <>
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
        </>
    )
}