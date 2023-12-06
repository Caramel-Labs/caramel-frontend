import Image from 'next/image'

export default function SocietyCard(props){

    const {i, _id, societyName, description,volunteers} = props.society

    const imgPath = ""
    return(
    <div key={i}>    
        <div className="relative flex w-full max-w-[48rem] flex-row rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
            <div className="relative m-0 w-2/5 shrink-0 overflow-hidden rounded-xl rounded-r-none bg-white bg-clip-border text-gray-700">
                <img
                    src={imgPath}
                    alt="image"
                    className="h-full w-full object-cover"
                />
            </div>
            <div className="p-6">
                <h4 className="mb-2 block font-sans text-2xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
                   {societyName}
                </h4>
                <p className="mb-8 block font-sans text-base font-normal leading-relaxed text-gray-700 antialiased">
                  {description}
                </p>
                {/* user avatars */}
                <div class="flex -space-x-4">
                <img className="w-10 h-10 border-2 border-white rounded-full dark:border-gray-800" src=".../public/kalana2001.jpg" alt=""/>
                <img className="w-10 h-10 border-2 border-white rounded-full dark:border-gray-800" src="@/public/ravindu2001.jpg" alt=""/>
                <img className="w-10 h-10 border-2 border-white rounded-full dark:border-gray-800" src="@/public/senindu2005.jpg" alt=""/>
                
                <p> {volunteers.length}members</p>
                </div>
            </div>
            

        </div>      
    </div> 
    )
}