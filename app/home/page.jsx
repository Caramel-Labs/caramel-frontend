import getData from '@/app/utility/getData.js'
import EventCard from '@/app/components/eventCard.jsx'
import getToday from '@/app/utility/getToday.js'

export default async function Home() {
  
 const events  = await getData('http://localhost:3001/events/all')
 const today = getToday()
 // console.log(today)

  return (
  <div className='p-5'>
    
    <h3 className='font-bold'> {today} </h3>
    <h1 className="font-bold text-3xl pb-3">EVENTS</h1> 
    
        {events.map((event, i)=>(
          <EventCard key={i} eventName={event.eventName} society={event.society} eventId = {event.eventId} />
         ))}
          

  </div>
  )
}
