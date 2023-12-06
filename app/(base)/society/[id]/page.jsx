
import Link from 'next/link'
import Image from 'next/image'
import EventCard from '@/app/components/eventCard'

export default async function Society({params}){


    const getSociety = await fetch(`http://localhost:3001/society/${params.id}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json'
        },
      })
    
      const response = await getSociety.json()
      console.log(response)
      const imgPath = ""
      const {societyName, description,volunteers, events} = response

      return (
        <div>
            <Image height="400" width= "800" src={imgPath} alt='hero-image' ></Image>
            <h1>{societyName}</h1>
            {/* already joined user avatars */}
           
            <div class="flex -space-x-4">
                <img className="w-10 h-10 border-2 border-white rounded-full dark:border-gray-800" src=".../public/kalana2001.jpg" alt=""/>
                <img className="w-10 h-10 border-2 border-white rounded-full dark:border-gray-800" src="@/public/ravindu2001.jpg" alt=""/>
                <img className="w-10 h-10 border-2 border-white rounded-full dark:border-gray-800" src="@/public/senindu2005.jpg" alt=""/>
                
                <p> {volunteers.length} followers</p>
            </div>

            <button>Follow</button>

            {/* event description */}
            <p>{description}</p>
        
        <h2> Events </h2>
        {/*event list*/}
        {events.map((event, i)=>(
          <Link key={i} href={`event/${event._id}`}>
          <EventCard key={i} event ={event} />
          </Link>
          
         ))}
        {/* Manage society */}
        <div>
          <h2> Manage this society</h2>
           <p> If you are a public team member apply as admin</p>
            <Link href={`/society/${params.id}/manage`}>
                <button>Apply as admin</button>
            </Link>
        </div>
            
        </div>
    );
}