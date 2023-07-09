'use client'
import Link from "next/link";
import { useState } from "react";

const Navbar = () => {

   const Menus = [
      {name:"Home", route:"/"},
      {name:"Explore", route:"/explore"},
      {name:"Profile", route:"/profile"}
   ]
   
   const [active, setActive] = useState(0);

   return (
      <div className="fixed bottom-0 left-0 z-50 w-full h-16 bg-white border-t border-gray-200 dark:bg-gray-700 dark:border-gray-600">
      <div className="grid h-full max-w-lg grid-cols-3 mx-auto">

      {Menus.map((menu, i)=>(

         <Link key= {i} href={menu.route} className= {`inline-flex flex-col items-center justify-center font-medium px-5 hover:bg-gray-50 dark:hover:bg-gray-800 group ${i== active && " bg-blue-600"}`}  onClick={() => setActive(i)}>
            <button  type="button">
               <span className="text-sm text-gray-500 dark:text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-500">{menu.name}</span>
            </button>
         </Link>
      
      ))}

      </div>
  </div>
   )
}

export default Navbar;