import Image from "next/image"
import Link from "next/link"

export default function FacultyCard(props){
""
  const { _id, facultyName , description} = props.faculty
  console.log(props.faculty)

    const imgPath = "https://res.cloudinary.com/dekv3xmjm/image/upload/caramel/events/64c79c0b7bd1e0f15ef11476.jpg"
    return(
        // <div className="bg-white relative drop-shadow-xl hover:shadow-xl transition duration-500 rounded-lg border-slate-300 border-1 my-5 mt-9 relative">
        //     <Image className = "rounded-t-lg " src={imgPath} alt="header img" width= "500" height="200" priority ={true} />
        //     <div className="py-1 px-4 rounded-lg bg-white flex justify-between absolute  w-full bg-black/50 h-full ">
        //       <div className='flex flex-col justify-center'>
        //         <h1 className="text-gray-700 font-bold text-xl hover:text-gray-900 hover:cursor-pointer mr-50 ml-50 my-1 line-clamp-1">{facultyName}</h1>
        //       </div>
        //       <p>
        //         {description}
        //       </p>
        //     </div>
        //     <Link href={`faculty/${_id}`}>
        //       <button>See Faculty </button>
        //     </Link>
        //  </div>   
        <div className="relative mt-9">
  {/* Image Section */}
  <Image className="rounded-t-lg" src={imgPath} alt="header img" width="500" height="200" priority={true} />

  {/* Overlay Section */}
  <div className="absolute top-0 left-0 w-full h-full flex flex-col justify-end">
    {/* Content Section */}
    <div className="py-1 px-4 rounded-lg bg-black/50 text-white w-full h-full">
      {/* Faculty Name Section */}
      <h1 className="text-white font-bold text-sm hover:text-gray-900 hover:cursor-pointer mb-1  mt-6">{facultyName}</h1>

      {/* Description Section */}
      <p className="mb-4 text-[10px] mt-3 line-clamp-1">
        {description}
      </p>

      {/* Link Section */}
      <Link href={`faculty/${_id}`}>
        <button className="bg-black text-white px-4 py-2 rounded-md mt-3 text-[10px]">See Faculty</button>
      </Link>
    </div>
  </div>
</div>

    )

}