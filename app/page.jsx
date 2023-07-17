'use-client'
import Link from "next/link"

export default function rickRoll() {
  return(
   <div className="grid h-screen place-items-center">
    <Link href="https://www.youtube.com/watch?v=dQw4w9WgXcQ" target="_blank"> 
      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">මෙතන ඔබන්න</button>
    </Link>
  </div>  
  )
}