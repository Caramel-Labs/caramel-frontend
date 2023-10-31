import Image from "next/image"
import Link from "next/link"

export default function FacultyCard(props){

  const {_id, facultyName , description} = props.faculty

    const imgPath = ""
    return(
        <div className="bg-white relative drop-shadow-xl hover:shadow-xl transition duration-500 rounded-lg border-slate-300 border-1 my-5">
            <Image className = "rounded-t-lg " src={imgPath} alt="header img" width= "390" height="200" priority ={true} />
            <div className="py-1 px-4 rounded-lg bg-white flex justify-between">
              <div className='flex flex-col justify-center'>
                <h1 className="text-gray-700 font-bold text-xl hover:text-gray-900 hover:cursor-pointer mr-50 ml-50 my-1 line-clamp-1">{facultyName}</h1>
              </div>
              <p>
                {description}
              </p>
            </div>
            <Link href={`faculty/${_id}`}>
              <button>See Faculty </button>
            </Link>
         </div>   

    )

}