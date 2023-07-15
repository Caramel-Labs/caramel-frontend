import getData from '@/app/utility/getData.js'
import EventCard from '@/app/components/eventCard.jsx'

export default async function Home() {
  
 const events  = await getData('http://localhost:3001/events/all')
 //console.log(events)
  return (
  <div>
    
    <h1 className="text-gray-700 font-bold text-2xl">Events</h1> 
    
        {events.map((event, i)=>(
          <EventCard key={i} title={event.title || event.eventName} society={event.society} />
         ))}
          

  </div>
  )
}
