'use client'
import { useSession } from 'next-auth/react'
import { useState } from 'react'


export default function EventActionButton(props) {

    const [join, setJoin] = useState(false)
    const { data: session } = useSession()
    const currentUser = session?.user
    // console.log(currentUser,"current user")

     // handle event registration
     async function handleClick() {
      
      setJoin(true)
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
          className='bg-blue-600  rounded-lg h-12 w-80 mt-3 text-center text-xs text-white '
        >
          {`${join? "Registered":"Register Now"}`}
        </button>
    );
}


