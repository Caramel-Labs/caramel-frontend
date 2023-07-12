//import getData from './utility/getData.js'
import Image from "next/image.js"

export default async function Profile(){

    const profileEndpoint = ''
    //const data = getData(profileEndpoint)

    return(
       <div className= "grid h-screen place-items-center">
         <div className="p-5  text-center text-white max-w-sm">
           <Image className="w-32 h-32 rounded-full mx-auto" src="https://loremflickr.com/320/320/girl" alt="profile-picture" width="128" height="128"/>
       
            <div className="text- mt-5">
             <h2 className="font-medium leading-none text-white hover:text-indigo-600 transition duration-500 ease-in-out">Jane
                Doe </h2>
            
             <p> @janedoe</p>
         </div>
    
            <p className="mt-2 text-sm text-white">Lorem ipsum dolor sit amet, consecte adipisicing elit. Voluptatibus quia
            Maiores et perferendis eaque.</p>

            <p className="mt-2 text-sm text-white">
                Faculty of Computing <br/>
                Intake 39
            </p>
    
         </div>
        <div className="">
         <ul class="max-w-md divide-y divide-gray-200 dark:divide-gray-700">
            <li class="pb-3 sm:pb-4">
                <div class="flex items-center space-x-4">
                    <div class="flex-shrink-0">
                        <Image className="rounded-full" src= "" alt= "event-image" width="32" height="32"/> 
                    </div>
                    <div class="flex-1 min-w-0">
                        <p class="text-sm font-medium text-gray-900 truncate dark:text-white">
                        Rota Fiesta 2023
                        </p>
                        <p class="text-sm text-gray-500 truncate dark:text-gray-400">
                        Rotaract Club
                        </p>
                    </div>
                    <div class="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
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