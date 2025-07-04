// components/tournee/TourneeList.tsx

import { useEffect, useState } from "react"
import { getFirestore, collection, getDocs } from "firebase/firestore"
import { initializeApp } from "firebase/app"
import { firebaseConfig } from "@/firebase/firebase-config"
import { Timestamp } from "firebase/firestore"

const app = initializeApp(firebaseConfig)
const db = getFirestore(app)

type DateTournee = {
  id: string
  date: Timestamp
  ville: string
  pays: string
  lieu: string
  soldout: boolean
}


export default function TourneeList() {
      const [dates, setDates] = useState<DateTournee[]>([])

  useEffect(() => {
    const fetchDates = async () => {
      const snapshot = await getDocs(collection(db, "dates_tournee"))
      const loadedDates: DateTournee[] = []
      snapshot.forEach((docSnap) => {
        const data = docSnap.data()
        loadedDates.push({
          ...(data as DateTournee),
        })
      })
      setDates(loadedDates)
    }

    fetchDates()
  }, [])
    
    return(
        <>
            <div className="grid gap-4">
      {dates.map((date) => (
        <div
          key={date.id}
          className="border rounded-xl p-4 shadow bg-white flex flex-col md:flex-row md:justify-between"
        >
          <div>
            <p className="font-bold text-lg">{date.ville}, {date.pays}</p>
            <p className="text-sm">{date.lieu}</p>
          </div>
          <div>
            <p className="text-sm text-muted-foreground">
              {date.date.toDate().toLocaleDateString()}
            </p>
            <p className={`text-sm font-semibold ${date.soldout ? "text-red-500" : "text-green-600"}`}>
              {date.soldout ? "Sold Out" : "Disponible"}
            </p>
          </div>
        </div>
      ))}
    </div>
        </>
    )
}