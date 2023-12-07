export default function ChatHeader(){

    return(
        <div className="flex sm:items-center justify-between py-3 border-b-2 border-gray-200">
        <div className="relative flex items-center space-x-4">
            <div className="relative">
                <span className="absolute text-green-500 right-0 bottom-0">
                    <svg width="20" height="20">
                    <circle cx="8" cy="8" r="8" fill="currentColor"></circle>
                    </svg>
                </span>
                <img
                    src="https://images.unsplash.com/photo-1549078642-b2ba4bda0cdb?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=facearea&amp;facepad=3&amp;w=144&amp;h=144"
                    alt=""
                    className="w-10 sm:w-16 h-10 sm:h-16 rounded-full"
                />
                </div>
                <div className="flex flex-col leading-tight">
                <div className="text-2xl mt-1 flex items-center">
                    <span className="text-gray-700 mr-3">Anderson Vanhron</span>
                </div>
                <span className="text-lg text-gray-600">Junior Developer</span>
                </div>
         </div>
        <div className="flex items-center space-x-2">
              {/* ... Buttons */}
        </div>
    </div>
    )
}