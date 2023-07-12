import getData from '../utility/getData.js'
import Image from "next/image.js"

export default async function Profile(){

    const data = await getData('http://localhost:3001/profiles')
   // console.log(data)

    return(
       <div className= "grid h-screen place-items-center">
         <div className="p-5  text-center text-black max-w-sm">
           <Image className="w-32 h-32 rounded-full mx-auto border-black border-2" src="/../public/pp.jpg" alt="profile-picture" width="128" height="128"/>
       
            <div className="text- mt-5">
             <h2 className="font-medium leading-none text-black hover:text-indigo-600 transition duration-500 ease-in-out">{data[0].firstName} {data[0].lastName}</h2>
            
             <p>@{data[0].username}</p>
         </div>
    
            <p className="mt-2 text-sm text-black">Lorem ipsum dolor sit amet, consecte adipisicing elit. Voluptatibus quia
            Maiores et perferendis eaque.</p>

            <p className="mt-2 text-sm text-black">
                Faculty of {data[0].faculty}<br/>
                Intake {data[0].intake}
            </p>
    
         </div>
         
        <div className="">
        <h2 >Events </h2> <br/>
         <ul class="max-w-md divide-y divide-gray-200 dark:divide-gray-700">
            <li class="pb-3 sm:pb-4">
                <div class="flex items-center space-x-4">
                    <div class="flex-shrink-0">
                        <Image className="rounded-full" src= "/../public/rota.jpeg" alt= "event-image" width="32" height="32"/> 
                    </div>
                    <div class="flex-1 min-w-0">
                        <p class="text-sm font-medium text-black truncate">
                        Rota Fiesta 2023
                        </p>
                        <p class="text-sm text-black truncate">
                        Rotaract Club
                        </p>
                    </div>
                    <div class="inline-flex items-center text-base font-semibold text-black">
                        2 days <br/>
                        more
                    </div>
                </div>
            </li>
            <li class="pb-3 sm:pb-4">
                <div class="flex items-center space-x-4">
                    <div class="flex-shrink-0">
                        <Image className="rounded-full" src= "/../public/ieee.jpg" alt= "event-image" width="32" height="32"/> 
                    </div>
                    <div class="flex-1 min-w-0">
                        <p class="text-sm font-medium text-black truncate">
                        Step into Industry
                        </p>
                        <p class="text-sm text-black truncate">
                        IEEE Student Branch
                        </p>
                    </div>
                    <div class="inline-flex items-center text-base font-semibold text-black">
                        5 days <br/>
                        more
                    </div>
                </div>
            </li>
            <li class="pb-3 sm:pb-4">
                <div class="flex items-center space-x-4">
                    <div class="flex-shrink-0">
                        <Image className="rounded-full" src= "/../public/foss.jpg" alt= "event-image" width="32" height="32"/> 
                    </div>
                    <div class="flex-1 min-w-0">
                        <p class="text-sm font-medium text-black truncate">
                        Computer Exhibition
                        </p>
                        <p class="text-sm text-black truncate">
                        FOSS KDU
                        </p>
                    </div>
                    <div class="inline-flex items-center text-base font-semibold text-black">
                        6 days <br/>
                        more
                    </div>
                </div>
            </li>
         </ul>
         </div>
       </div> 
    )
}