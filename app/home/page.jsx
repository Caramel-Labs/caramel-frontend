import getData from '@/app/utility/getData.js'
import EventCard from '@/app/components/eventCard.jsx'


export default async function Home() {
  
 const events  = await getData('http://localhost:3001/events/all')
 //console.log(events)
  return (
  <div className='p-5'>
    
    <h3 className='font-bold'>Monday, June 12</h3>
    <h1 className="font-bold text-2xl pb-3">Events</h1> 
    
        {events.map((event, i)=>(
          <EventCard key={i} eventName={event.eventName} society={event.society} />
         ))}
          

  </div>
  )
}
