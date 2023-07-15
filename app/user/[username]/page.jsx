import getData from '@/app/utility/getData.js'
import Image from 'next/image'


export default async function Profile({params}){

    const user = await getData(`http://localhost:3001/profiles/${params.username}`)
    //const currentUser = user[0]
    console.log(user)

    return(
       <div className= "grid h-screen place-items-center">
         <div className="p-5  text-center text-black max-w-sm">
           <Image className="w-32 h-32 rounded-full mx-auto border-black border-2" src="/../public/pp.jpg" alt="profile-picture" width="128" height="128"/>
       
            <div className="text- mt-5">
             <h2 className="font-medium leading-none text-black hover:text-indigo-600 transition duration-500 ease-in-out">{user[0].firstName} {user.lastName}</h2>
            
             <p>@{user.username}</p>
         </div>
    
            <p className="mt-2 text-sm text-black">Lorem ipsum dolor sit amet, consecte adipisicing elit. Voluptatibus quia
            Maiores et perferendis eaque.</p>

            <p className="mt-2 text-sm text-black">
                Faculty of {user.faculty}<br/>
                Intake {user.intake}
            </p>
    
         </div>
         
        <div className="">
        <h2 >Events </h2> <br/>
         <ul className="max-w-md divide-y divide-gray-200 dark:divide-gray-700">
            <li className="pb-3 sm:pb-4">
                <div class="flex items-center space-x-4">
                    <div className="flex-shrink-0">
                        <Image className="rounded-full" src= "/../public/rota.jpeg" alt= "event-image" width="32" height="32"/> 
                    </div>
                    <div className="flex-1 min-w-0">
                        <p className="text-sm font-medium text-black truncate">
                        Rota Fiesta 2023
                        </p>
                        <p className="text-sm text-black truncate">
                        Rotaract Club
                        </p>
                    </div>
                    <div className="inline-flex items-center text-base font-semibold text-black">
                        2 days <br/>
                        more
                    </div>
                </div>
            </li>
         </ul>
         </div>
       </div> 
    )
}