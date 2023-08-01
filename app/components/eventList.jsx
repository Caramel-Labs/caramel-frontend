'use client'
import Image from 'next/image'
import Link from 'next/link'

export default function EventList(props) {
    
    const joinedEvents = props.joinedEvents
   
    return(
    joinedEvents.map((event, i)=>(
       
        <li key={i} className="pb-3 sm:pb-4">
            <div className="flex items-center space-x-4">
                <div className="flex-shrink-0">
                    <Image className="rounded-full" src= "/../public/rota.jpeg" alt= "event-image" width="32" height="32"/> 
                </div>
                <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium text-black truncate">
                    {event.name}
                    </p>
                    <p className="text-sm text-black truncate">
                    {event.society}
                    </p>
                </div>
                <div className="inline-flex items-center text-base font-semibold text-black">
                    2 days <br/>
                    more
                </div>
            </div>
        </li>
  

    ))
        
    )
}