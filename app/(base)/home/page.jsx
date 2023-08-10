import getData from '@/app/utility/getData.js'
import EventCard from '@/app/components/eventCard.jsx'
import getToday from '@/app/utility/getToday.js'

export default async function Home() {
  
  const events = await fetch('http://localhost:3001/events/all', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({faculty: 'computing'})
  });

  const response = await events.json()
  const today = getToday()
 // console.log(today)

  return (
  <div className='p-5'>
    
    <h3 className='font-bold'>{ today }</h3>
    <h1 className="font-bold text-3xl pb-3">EVENTS</h1>
    
        {response.map((event, i)=>(
          <EventCard key={i} event ={event} />
         ))}
          

  </div>
  )
}
