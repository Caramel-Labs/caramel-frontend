import EventCard from '@/app/components/eventCard.jsx'
import getToday from '@/app/utility/formatDate.js'
import Link from 'next/link'
import WelcomeHeader from '@/app/components/welcomeHeader'

export default async function Home() {
  

  const events = await fetch('http://localhost:3001/events/all', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({faculty: 'computing'})
  });

  const response = await events.json()
  // const today = getToday()
 // console.log(today)

  return (
  <div className='p-5'>
    
    <WelcomeHeader />
    
    <h1 className="text-2xl font-bold text-gray-900"> Happening Soon</h1>
        {response.map((event, i)=>(
          <Link key={i} href={`event/${event._id}`}>
          <EventCard key={i} event ={event} />
          </Link>
          
         ))}
          

  </div>
  )
}
