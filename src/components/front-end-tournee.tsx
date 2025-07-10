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
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6 md:gap-8 lg:gap-10 xl:gap-12 p-4 sm:p-6 md:p-8 lg:p-10 xl:p-12 ">
      {dates.map((d) => (
        <Card key={d.id} className="bg-transparent shadow-none border-none text-center transition-all duration-300 hover:scale-105">
          <CardContent className="flex flex-col items-center space-y-2 sm:space-y-3 md:space-y-4 p-3 sm:p-4 md:p-5 lg:p-6">
            {/* Date */}
            <span
              className="text-5xl sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl uppercase tracking-wide sm:tracking-wider md:tracking-widest text-black font-poppinsl px-2 sm:px-3 md:px-4 lg:px-5 py-1 sm:py-2 md:py-3 lg:py-4 xl:py-5"
              style={{ WebkitTextStroke: '1px white', color: 'black' }}
            >
              {d.date.toDate().toLocaleDateString("fr-FR", { day: "2-digit", month: "long" })}
            </span>

            {/* Ville */}
            <span
              className="text-6xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl font-extrabold uppercase leading-tight text-black px-2 sm:px-3 md:px-4 lg:px-5 py-1 sm:py-2 md:py-3 lg:py-4 xl:py-5"
              style={{ WebkitTextStroke: '1px white', color: 'black' }}
            >
              {d.ville}
            </span>

            {/* Lieu */}
            <span
              className="text-4xl sm:text-base md:text-lg lg:text-xl xl:text-2xl 2xl:text-5xl font-medium font-poppinsl text-black px-2 sm:px-3 md:px-4 lg:px-5 py-1 sm:py-2 md:py-3 lg:py-4 xl:py-5"
              style={{ WebkitTextStroke: '1px white', color: 'black' }}
            >
              {d.lieu}
            </span>

            {/* Sold Out Badge */}
            {d.soldout && (
              <div className="mt-2 sm:mt-3 md:mt-4">
                <img 
                  src="img/téléchargement_-_2025-07-10T113513.389-removebg-preview.png" 
                  alt="Sold Out" 
                  className="w-52 h-25 sm:w-16 sm:h-16 md:w-20 md:h-20 lg:w-24 lg:h-24 xl:w-28 xl:h-28 2xl:w-45 2xl:h-45 object-contain mx-auto p-1 sm:p-2 md:p-3 lg:p-4 xl:p-5"
                />
              </div>
            )}
          </CardContent>
        </Card>
      ))}
    </div>
  )
}