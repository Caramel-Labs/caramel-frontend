import Image from "next/image"


export default function ExploreCard(props){

    const imgPath = "https://res.cloudinary.com/dekv3xmjm/image/upload/caramel/events/64c79c0b7bd1e0f15ef11476.jpg"
    return(
        <div className=" reletive bg-white relative drop-shadow-xl hover:shadow-xl transition duration-500 rounded-lg border-1 my-5 mt-9">
            <Image className = "rounded-lg " src={imgPath} alt="header img" width= "500" height="200" priority ={true} />
              <div className='flex flex-col justify-center absolute -mt-14  roundeg-lg  '>
                <h1 className="text-gray-700 font-bold text-xl hover:text-red-900 hover:cursor-pointer mr-50 ml-50  line-clamp-1 relative  bg-black/50 text-white  w-screen h-14   ">{props.name}</h1>
              </div>
         </div>   

    )
}