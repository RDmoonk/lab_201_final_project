import { Card, CardContent } from "@/components/ui/card"
import { firebaseConfig } from "@/firebase/firebase-config"
import { initializeApp } from "firebase/app"
import { useState, useEffect } from "react"
import { getFirestore, collection, getDocs, Timestamp } from "firebase/firestore"

type DateTournee = {
  id?: string
  date: Timestamp
  ville: string
  pays: string
  lieu: string
  soldout: boolean
}

export default function FrontEndTournee() {
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

  return (
    <div className="flex flex-wrap justify-center gap-12 p-12">
      {dates.map((d) => (
        <Card key={d.id} className="bg-transparent shadow-none border-none text-center">
          <CardContent className="flex flex-col items-center space-y-1 p-2">
            <span
              className="text-2xl uppercase tracking-widest text-black font-poppinsl"
              style={{ WebkitTextStroke: '1px white', color: 'black' }}
            >
              {d.date.toDate().toLocaleDateString("fr-FR", { day: "2-digit", month: "long" })}
            </span>

            <span
              className="text-3xl md:text-5xl font-extrabold uppercase leading-tight text-black"
              style={{ WebkitTextStroke: '1px white', color: 'black' }}
            >
              {d.ville}
            </span>

            <span
              className="text-lg md:text-xl font-medium text-black"
              style={{ WebkitTextStroke: '1px white', color: 'black' }}
            >
              {d.lieu}
            </span>

            {d.soldout && (
              <span className="text-red-600 text-md font-semibold mt-1">
                [Sold Out]
              </span>
            )}
          </CardContent>
        </Card>
      ))}
    </div>
  )
}
