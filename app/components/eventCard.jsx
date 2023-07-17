'use client'
import Image from 'next/image'
import { useState } from 'react'

export default function EventCard(props) {

    const {title, eventName, society, i} = props
    const [join, setJoin] = useState(false)
     
    return (
        <div key={i}className="bg-white relative shadow-lg hover:shadow-xl transition duration-500 rounded-lg border-black border-2 m-5">
            <Image className = "rounded-t-lg " src="/../public/step.jpg" alt="" width= "390" height="200"/>
            <div className="py-6 px-8 rounded-lg bg-white flex justify-between">
              <div>
                <h1 className="text-gray-700 font-bold text-xl mb-3 hover:text-gray-900 hover:cursor-pointer mr-50 ml-50 mt-3">{title || eventName}</h1>
                <p className="text-gray-700 tracking-wide">{society}</p>
              </div>
              <button className="mt-6 py-2 px-4 bg-orange-400 text-gray-800 font-bold rounded-lg shadow-md hover:shadow-lg transition duration-300 ml-3 mb-6 mr-0" onClick={()=>{setJoin(true)}}> {join ? "Joined" : "Join"} </button>
            </div>
            <div className="absolute top-2 right-2 py-1.5 px-3 bg-black rounded-lg">
              <span className="text-md text-white text-xs">2 days more</span>
            </div>
          </div>

    )
}
