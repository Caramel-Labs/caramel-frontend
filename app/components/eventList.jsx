'use client'
import Image from 'next/image'
import { parseStringToDate, getTimeDifference } from '@/app/utility/getDaysLeft'
import Link from 'next/link'

export default function EventList(props) {
    
    const joinedEvents = props.joinedEvents

    function handleDaysLeft(date, time) {
        const parsedDate = parseStringToDate(date, time)
        const timeLeft = getTimeDifference(parsedDate)
        return timeLeft
    }
   
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
                    {handleDaysLeft(event.date, event.time)} <br/>
                    more
                </div>
            </div>
        </li>
  

    ))
        
    )
}