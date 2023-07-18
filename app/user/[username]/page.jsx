import Image from 'next/image'
import getData from '@/app/utility/getData.js'
import EventList from '@/app/components/eventList'



export default async function Profile({params}){

    const user = await getData(`http://localhost:3001/profiles/${params.username}`)
    const currentUser = user[0]
    const joinedEvents = user[1]
    //console.log(user[1])

    return(
      
    /* Profile card */
       <div className= "grid h-screen place-items-center">
         <div className="p-5  text-center text-black max-w-sm">
           <Image className="w-32 h-32 rounded-full mx-auto border-black border-2" src="/../public/pp.jpg" alt="profile-picture" width="128" height="128"/>
       
            <div className="text- mt-5">
             <h2 className="font-medium leading-none text-black hover:text-indigo-600 transition duration-500 ease-in-out">{currentUser.firstName} {user.lastName}</h2>
            
             <p>@{currentUser.username}</p>
         </div>
    
            <p className="mt-2 text-sm text-black">Lorem ipsum dolor sit amet, consecte adipisicing elit. Voluptatibus quia
            Maiores et perferendis eaque.</p>

            <p className="mt-2 text-sm text-black">
                Faculty of {currentUser.faculty}<br/>
                Intake {currentUser.intake}
            </p>
    
         </div>
    
     {/* Event List */}
         <div className="">
          <h2 >Events </h2> <br/>
          <ul className="max-w-md divide-y divide-gray-200 dark:divide-gray-700">
           <EventList joinedEvents={joinedEvents}/>
          </ul> 
        </div>


       </div> 
    )
}