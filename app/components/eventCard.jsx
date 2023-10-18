'use client'
import Image from 'next/image'
import { useState } from 'react'
import { parseStringToDate, getTimeDifference } from '@/app/utility/getDaysLeft'
import { useSession } from 'next-auth/react'


export default function EventCard(props) {

    const {i, _id, name, society, date, time} = props.event
    // const [join, setJoin] = useState(false)

    const { data: session } = useSession()
    const currentUser = session?.user
    

    const imgPath = `https://res.cloudinary.com/dekv3xmjm/image/upload/caramel/events/${_id}.jpg`
    const fallBackPath = '/../public/event-bg.jpg'
    const parsedDate = parseStringToDate(date, time)
    const timeLeft = getTimeDifference(parsedDate)

    // posting data of joined events to the API
    // async function handleClick() {
    //   setJoin(true)
      
    //   const data = {
    //     user_id: currentUser._id,
    //     event_id: _id
    //   }

    //   const response = await fetch('http://localhost:3001/profiles/join', {
    //     method: 'POST',
    //     headers: {
    //       'Content-Type': 'application/json'
    //     },
    //     body: JSON.stringify(data)
    //   })

    //   if (response.ok) {
    //     console.log("Event joined successfully")
    //   } else {
    //     console.log("Event join failed")
    //     setJoin(false)
    //   }

    // }
     
    return (
        <div key={i}className="bg-white relative drop-shadow-xl hover:shadow-xl transition duration-500 rounded-lg border-slate-300 border-1 my-5">
            <Image className = "rounded-t-lg " src={imgPath} alt="header img" width= "390" height="200" priority ={true} />
            <div className="py-1 px-4 rounded-lg bg-white flex justify-between">
              <div className='flex flex-col justify-center'>
                <h1 className="text-gray-700 font-bold text-xl hover:text-gray-900 hover:cursor-pointer mr-50 ml-50 my-1 line-clamp-1">{name}</h1>
                <p className="text-gray-700 tracking-wide text-sm">{society}</p>
              </div>
            </div>
            <div className="absolute top-4 right-4 py-1.5 px-3 bg-black rounded-lg">
              <span className="text-md text-white text-xs">{timeLeft} more</span>
            </div>
          </div>

    )
}
