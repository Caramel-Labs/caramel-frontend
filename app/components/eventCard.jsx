'use client'
import Image from 'next/image'
import { useState } from 'react'
import { parseStringToDate, getTimeDifference } from '@/app/utility/getDaysLeft'


export default function EventCard(props) {

    const {i, _id, name, society, date, time} = props.event
    const [join, setJoin] = useState(false)

    const parsedDate = parseStringToDate(date, time)
    const timeLeft = getTimeDifference(parsedDate)

    // posting data of joined events to the API
    async function handleClick() {
      setJoin(true)
      
      const data = {
        username: "lasindu2001",
        _id: _id
      }

      const response = await fetch('http://localhost:3001/profiles/join', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
      })

      if (response.ok) {
        console.log("Event joined successfully")
      } else {
        console.log("Event join failed")
        setJoin(false)
      }

    }
     
    return (
        <div key={i}className="bg-white relative drop-shadow-xl hover:shadow-xl transition duration-500 rounded-lg border-slate-300 border-1 my-5">
            <Image className = "rounded-t-lg " src="/../public/event-bg.jpg" alt="header img" width= "390" height="200" priority ={true}  />
            <div className="py-1 px-4 rounded-lg bg-white flex justify-between">
              <div className='flex flex-col justify-center'>
                <h1 className="text-gray-700 font-bold text-xl hover:text-gray-900 hover:cursor-pointer mr-50 ml-50 my-1 line-clamp-1">{name}</h1>
                <p className="text-gray-700 tracking-wide text-sm">{society}</p>
              </div>
              <button className="py-2 px-4 bg-orange-400 text-gray-800 font-bold rounded-lg shadow-md hover:shadow-lg transition duration-300 ml-3 my-6 mr-0 flex-shrink-0" onClick={()=>{handleClick()}}> {join ? "Joined" : "Join"} </button>
            </div>
            <div className="absolute top-4 right-4 py-1.5 px-3 bg-black rounded-lg">
              <span className="text-md text-white text-xs">{timeLeft}</span>
            </div>
          </div>

    )
}
