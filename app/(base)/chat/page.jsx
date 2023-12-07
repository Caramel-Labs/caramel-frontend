'use client'
import { useState, useRef, useEffect } from 'react';
import Message from '@/app/components/message';
import ChatHeader from '@/app/components/chatHeader';
import { useSession } from 'next-auth/react';

export default function Chat() {
  const dummy = useRef();
  const [messages, setMessages] = useState([]);
  const [formValue, setFormValue] = useState('');

  const { data: session } = useSession();
  const currentUser = session?.user
  const username = currentUser?.username


  console.log(username, "chat ekt awa")

  const sendIcon =  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="#475569" className="h-6 w-6 ml-2 transform rotate-90">
  <path d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z"></path>
    </svg>

  useEffect(() => {
  
    const fetchMessages = async () => {
      try {
        const response = await fetch('http://localhost:3001/chat/', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json', // Set the appropriate content type if sending JSON data
            // Add other headers if required
          },
          body: JSON.stringify({ username: username}),
        });
  
        if (!response.ok) {
          throw new Error('Network response was not ok');
        } 
        const data = await response.json();
        console.log(data, "msgs awa ")
        setMessages(data.messeges); // Update messages state with fetched data
        dummy.current.scrollIntoView({ behavior: 'smooth' });
      } catch (error) {
        console.error('Error fetching messages:', error);
      }
  }

  fetchMessages()
}, [username]);

  const sendMessage = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ text: formValue }),
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      setFormValue('');
      dummy.current.scrollIntoView({ behavior: 'smooth' });
    } catch (error) {
      console.error('Error sending message:', error);
    }
  };

  return (

    <div className='flex-1 p-2 sm:p-6 justify-between flex flex-col h-screen relative bg-zinc-950'>

  {/* Header */}
  <ChatHeader />

  {/* Messages */}
  <div id="messages" className="flex flex-col space-y-1 p-3 pt-0 overflow-y-auto pb-96 bg-zinc-950">
    {/* Chat messages */}
    {messages && messages.map((message, index) => (
      <Message key={index} message={message} />
    ))}
    <span ref={dummy}></span>
  </div>

  {/* Input */}
  <div className=" border-gray-200 px-4 pt-4 mb-2 sm:mb-0 fixed left-0 right-0 mt-96 pt-72">
    <form onSubmit={sendMessage} className="relative">
      <div className="flex items-center">
        <input
          value={formValue}
          onChange={(e) => setFormValue(e.target.value)}
          placeholder="Say something nice"
          type="text"
          className="w-full focus:outline-none focus:placeholder-gray-400 text-gray-600 placeholder-gray-600 pl-12 bg-gray-200 rounded-md py-3"
        />
        <button
          type="submit"
          disabled={!formValue}
          className="inline-flex items-center justify-center rounded-lg px-4 py-3 transition duration-500 ease-in-out text-white  hover:bg-blue-400 focus:outline-none absolute right-2 sm:relative sm:right-auto"
        >
          {sendIcon}
        </button>
      </div>
    </form>
  </div>
</div>
  
  
  );
}

