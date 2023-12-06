'use client'
import { eventCardFormat } from '@/app/utility/formatDate'
import Image from 'next/image'

export default function CarouselCard(props) {

    const {_id, name, society, date} = props.event
    console.log(props.event)
    const imgPath = `https://res.cloudinary.com/dekv3xmjm/image/upload/caramel/events/${_id}.jpg`
    const formattedDate = eventCardFormat(date)
    return (
        <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
         <Image className = "rounded-t-lg " src={imgPath} alt="header img" width= "390" height="200" priority ={true} />
        <div className="p-5">
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{name}</h5>
        <p className="text-sm text-gray-700 dark:text-gray-400">{society}</p>   
        <p> {formattedDate}</p>       
        </div>
    </div>
    

    )
}

