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

  return (
    <div className="flex flex-col lg:flex-row items-center justify-center gap-10 mt-10">

      {/* IMAGE À GAUCHE */}
      <img
        src="/img/aesop-rock-removebg-preview.png"
        alt="Aesop Rock"
        className="w-80 md:min-w-96 lg:w-[750px] object-contain"
      />

      {/* LISTE DES DATES À DROITE */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 text-center">
        {dates.map((date) => (
<div
  key={date.id}
  className="bg-transparent shadow-none border-none text-center"
>
  <p
    className="text-4xl uppercase tracking-widest text-black font-poppinsl p-5"
    style={{ WebkitTextStroke: '1px white', color: 'black' }}
  >
    {date.date.toDate().toLocaleDateString("fr-FR", {
      day: "2-digit",
      month: "long",
    })}
  </p>

  <h3
    className="text-9xl md:text-7xl font-extrabold uppercase leading-tight text-black p-5"
    style={{ WebkitTextStroke: '1px white', color: 'black' }}
  >
    {date.ville}
  </h3>

  <p
    className="text-5xl uppercase tracking-widest text-black font-poppinsl p-5"
    style={{ WebkitTextStroke: '1px white', color: 'black' }}
  >
    {date.lieu}
  </p>

  {date.soldout && (
 
     <img src="img/téléchargement_-_2025-07-10T113513.389-removebg-preview.png" alt="" className="size-50 p-5"/>
  )}
</div>

        ))}
      </div>
    </div>
  )
}
