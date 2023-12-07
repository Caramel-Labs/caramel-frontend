'use client'
import React from "react";
import Image from "next/image";
import { Session } from "next-auth";

export default function Message(props) {
  const { text, isBot } = props.message;
  const messageClass = isBot ? true : false;

  const { data: session } = useSession();
  const currentUser = session?.user;
  const username = currentUser?.username;

  botAvatar= ""
  userAvatar= `https://res.cloudinary.com/dekv3xmjm/image/upload/caramel/ProfilePics/${username}.jpg`

  return (
    
    <div className={`flex items-end ${messageClass ? 'justify-end' : ''}`}>
      <div className={`flex flex-col space-y-2 text-xs max-w-xs mx-2 ${messageClass ? 'order-2 items-start' : 'order-1 items-end'}`}>
        <div>
          <span className={`px-4 py-2 rounded-lg inline-block ${messageClass ? 'rounded-bl-none bg-gray-300 text-gray-600' : 'rounded-br-none bg-blue-600 text-white'}`}>
            {text}
          </span>
        </div>
      </div>
      <img
        src={messageClass ? botAvatar : userAvatar}
        alt="My profile"
        className={`w-6 h-6 rounded-full ${messageClass ? 'order-1' : 'order-2'}`}
      />  
    </div>


 )
};

