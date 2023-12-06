import Image from "next/image";
import Link from "next/link";
import getData from "@/app/utility/getData.js";
import EventList from "@/app/components/eventList";
import ProfileCard from "@/app/components/profileCard";

export default async function Profile({ params }) {
	const user = await fetch(`http://localhost:3001/profiles/${params.username}`, {
    method: 'GET',
    headers: {
	  'Authorization': `Bearer ${accessToken}`,
      'Content-Type': 'application/json'
    },
  });
	const { username, faculty, intake, firstName, lastName } = user;
	const joinedEvents = user.eventId;

	console.log(user);

	const imgPath = `https://res.cloudinary.com/dekv3xmjm/image/upload/caramel/ProfilePics/${username}.jpg`;
	console.log(imgPath);

	return (
		<div className="p-4 bg-zinc-900">
			{/* Header for logout button */}
			<div className="flex justify-end">
				<Link href="http://localhost:3000/api/auth/signout">
					<button className=" mr-4 mt-4 ">
						{" "}
						<svg
							xmlns="http://www.w3.org/2000/svg"
							fill="none"
							viewBox="0 0 24 24"
							strokeWidth="1.5"
							stroke="currentColor"
							className="w-6 h-6"
						>
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15M12 9l-3 3m0 0l3 3m-3-3h12.75"
							/>
						</svg>
					</button>
				</Link>
			</div>

			<div className="grid h-screen">
				<ProfileCard props= {user} />

				{/* Event List */}
				<div className="">
					<h2 className="text-white"> Registered Events</h2>
					<br />
					<ul className="max-w-md divide-y divide-gray-200 dark:divide-gray-700">
						<EventList joinedEvents={joinedEvents} />
					</ul>
				</div>
			</div>
		</div>
	);
}
