import Image from "next/image"

export default function Home() {
  return (
  <div>
    
    <h1 className="text-gray-700 font-bold text-2xl"> Events </h1> 
        
        {/* The single events card component */}
          <div className="bg-white relative shadow-lg hover:shadow-xl transition duration-500 rounded-lg border-black border-2">
            <Image className = "rounded-t-lg " src="/../public/step.jpg" alt="" width= "390" height="200"/>
            <div className="py-6 px-8 rounded-lg bg-white">
              <h1 className="text-gray-700 font-bold text-xl mb-3 hover:text-gray-900 hover:cursor-pointer"> Step into industry</h1>
              <p className="text-gray-700 tracking-wide"> IEEE Student branch</p>
              <button className="mt-6 py-2 px-4 bg-orange-400 text-gray-800 font-bold rounded-lg shadow-md hover:shadow-lg transition duration-300"> Join Now </button>
            </div>
            <div className="absolute top-2 right-2 py-2 px-4 bg-black rounded-lg">
              <span className="text-md text-white"> 2 days more </span>
            </div>
          </div>
     

  </div>
  )
}
