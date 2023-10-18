
import Image from 'next/image'
import getData from '@/app/utility/getData.js'
import { eventPageFormat } from '@/app/utility/formatDate'

export default async function Event({ params }) {

    const imgPath = `https://res.cloudinary.com/dekv3xmjm/image/upload/caramel/events/${params.id}.jpg`
    const locationPath = <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-map-pin"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg> 
    const calendarPath = <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"  fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-calendar"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect><line x1="16" y1="2" x2="16" y2="6"></line><line x1="8" y1="2" x2="8" y2="6"></line><line x1="3" y1="10" x2="21" y2="10"></line></svg>
   
    const event = await getData(`http://localhost:3001/events/${params.id}`)
    console.log(event)
    const {name, society, date, time, description, venue, tickets, participants} = event

    const formattedDate = eventPageFormat(date)
    return (
        <div>
            <Image height="400" width= "800" src={imgPath} alt='hero-image' ></Image>
            <h1>{name}</h1>
            {/* already registered user avatars */}
           
            <div class="flex -space-x-4">
                <img className="w-10 h-10 border-2 border-white rounded-full dark:border-gray-800" src="@/app/public/kalana2001.jpg" alt=""/>
                <img className="w-10 h-10 border-2 border-white rounded-full dark:border-gray-800" src="@/app/public/ravindu2001.jpg" alt=""/>
                <img className="w-10 h-10 border-2 border-white rounded-full dark:border-gray-800" src="@/app/public/senindu2005.jpg" alt=""/>
                
                <p> {participants.length} already registered</p>
            </div>

            {/* event description */}
            <p>{description}</p>

        {/* event details */}
            <div>
               <div>
                {calendarPath}
                <p>{formattedDate}</p>
                <p>{time}</p>
               </div> 
               
               <div>
                {locationPath}
                <p>{venue}</p>
               </div>
               
               <div>
               <Image height="100" width="100" src={""} alt='society-image' ></Image>
                <p>organized by </p>
                <p> {society}</p>
               </div>
                
            </div>

        <button> {`${tickets === true? "Buy Tickets":"Register Now"}`} </button>
        </div>
    );
}


