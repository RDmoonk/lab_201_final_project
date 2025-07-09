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
        src="/src/img/aesop-rock-removebg-preview.png"
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
    className="text-2xl uppercase tracking-widest text-black font-poppinsl"
    style={{ WebkitTextStroke: '1px white', color: 'black' }}
  >
    {date.date.toDate().toLocaleDateString("fr-FR", {
      day: "2-digit",
      month: "long",
    })}
  </p>

  <h3
    className="text-3xl md:text-5xl font-extrabold uppercase leading-tight text-black"
    style={{ WebkitTextStroke: '1px white', color: 'black' }}
  >
    {date.ville}
  </h3>

  <p
    className="text-lg md:text-xl font-medium text-black"
    style={{ WebkitTextStroke: '1px white', color: 'black' }}
  >
    {date.lieu}
  </p>

  {date.soldout && (
    <span className="relative inline-block bg-red-600 text-black text-lg md:text-2xl font-bold px-6 py-2 border-4 border-red-800 rounded-lg font-spooky before:content-[''] after:content-[''] before:absolute after:absolute before:top-1/2 after:top-1/2 before:-translate-y-1/2 after:-translate-y-1/2 before:w-5 before:h-5 after:w-5 after:h-5 before:-left-3 after:-right-3 shadow-lg mt-2">
      [Sold Out]
    </span>
  )}
</div>

        ))}
      </div>
    </div>
  )
}
