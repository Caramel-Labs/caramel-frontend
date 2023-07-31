import Image from 'next/image'
import Link from 'next/link'
import getData from '@/app/utility/getData.js'
import EventList from '@/app/components/eventList'

export default async function Profile({ params }) {

    const user = await getData(`http://localhost:3001/profiles/${params.username}`)
    const currentUser = user[0]
    const joinedEvents = user[1]
    const imgPath = `/../public/${params.username}.jpg`
    // console.log(user[1])

    return (
        <>
            {/* Header for logout button */}
            <div className='flex justify-end'>
                <Link href='http://localhost:3000/api/auth/signout'>
                    <button className=' mr-4 mt-4 '> <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15M12 9l-3 3m0 0l3 3m-3-3h12.75" />
                    </svg></button>
                </Link>
            </div>

            <div className="grid h-screen place-items-center">



                <div className="p-5 text-center text-black max-w-sm">
                    <Image className="w-32 h-32 rounded-full mx-auto border-black border-1 object-cover" src={imgPath} alt="profile-picture" width="128" height="128" />

                    <div className="text- mt-5">
                        <h2 className="font-medium leading-none text-black hover:text-indigo-600 transition duration-500 ease-in-out">{currentUser.firstName} {user.lastName}</h2>

                        <p>@{currentUser.username}</p>
                    </div>

                    <p className="mt-2 text-sm text-black">Lorem ipsum dolor sit amet, consecte adipisicing elit. Voluptatibus quia. Maiores et perferendis eaque.</p>

                    <p className="mt-2 text-sm text-black">
                        Faculty of {currentUser.faculty}<br />
                        Intake {currentUser.intake}
                    </p>

                </div>

                {/* Event List */}
                <div className="">
                    <h2>Events</h2><br />
                    <ul className="max-w-md divide-y divide-gray-200 dark:divide-gray-700">
                        <EventList joinedEvents={joinedEvents} />
                    </ul>
                </div>

            </div>
        </>
    )
}