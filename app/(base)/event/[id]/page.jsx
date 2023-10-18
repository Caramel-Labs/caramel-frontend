
import Image from 'next/image'
import getData from '@/app/utility/getData.js'

export default async function Event({ params }) {

    const event = await getData(`http://localhost:3001/events/${params.id}`)
    console.log(event)
    const {name, society, date, time, description, venue, tickets} = event
    return (
        <div>
            <Image height={"100px"} width={"100px"} src={""} alt='hero-image' ></Image>
            <h1>{name}</h1>
            <p>{description}</p>

        {/* event details */}
            <div>
               <div>
               <p>{date}</p>
               <p>{time}</p>
            </div> 
               
               <div>
                <p>{venue}</p>
               </div>
               
               <div>
                <image src={""} alt="society logo"></image>
                <p>organized by </p><br/>
                <p> {society}</p>
               </div>
                
            </div>

        <button> {`${tickets === true? "Buy Tickets":"Register Now"}`} </button>
        </div>
    );
}


