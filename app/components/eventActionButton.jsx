'use client'
import { useSession } from 'next-auth/react'


export default function EventActionButton(props) {

    const { data: session } = useSession()
    const currentUser = session?.user
    // console.log(currentUser,"current user")

     // handle event registration
     async function handleClick() {
        
      const data = {
        user_id: currentUser._id,
        event_id: props.id
      }

      const response = await fetch('http://localhost:3001/profiles/join', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
      })

      if (response.ok) {
        console.log("Event joined successfully")
      } else {
        console.log("Event join failed")
        setJoin(false)
      }

    }

    return (
        <button
          onClick={handleClick}
          className='bg-red-500 p-4 rounded-lg h-12 w-80 mt-3 '
        >
          {`${props.tickets === true? "Buy Tickets":"Register Now"}`}
        </button>
    );
}


