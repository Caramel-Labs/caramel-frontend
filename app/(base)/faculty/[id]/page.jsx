'use client';
import { useEffect, useState } from "react";
import Image from "next/image";
import SocietyCard from "@/app/components/societyCard";
import EventCard from "@/app/components/eventCard";

export default function Faculty({params}){

    const [facultyData, setFacultyData] = useState(null);
    const [active, setActive] = useState('Faculty'); // Set the initial active tab
  
    const menus = ["Faculty", "Societies", "Events"];
  
    const fetchFacultyData = async () => {
      try {
        const response = await fetch(`http://localhost:3001/faculty/${params.id}`, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json'
          },
        });
  
        if (!response.ok) {
          throw new Error('Failed to fetch data');
        }
  
        const data = await response.json();
        setFacultyData(data);
      } catch (error) {
        console.error(error);
        // Handle errors (e.g., set an error state, show error message)
      }
    };
  
    useEffect(() => {
      fetchFacultyData();
    }, [params.id]);
  
    const handleClick = (item) => {
      setActive(item); // Update active state based on clicked tab
      // Perform actions based on the clicked tab (e.g., change content)
    };

    // facultyData && console.log(facultyData.faculty.facultyName)
    const imgPath = ""
  
    return (
      <div>
        {/*tabs*/}
        <ul className="flex flex-wrap text-sm font-medium text-center text-gray-500 dark:text-gray-400">
          {menus.map((item) => (
            <li key={item} className="me-2">
              <a
                href="#"
                className={`inline-block px-4 py-3 rounded-lg ${
                  active === item
                    ? 'text-white bg-blue-600 active'
                    : 'hover:text-gray-900 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-white'
                }`}
                onClick={() => handleClick(item)}
                aria-current={active === item ? 'page' : undefined}
              >
                {item}
              </a>
            </li>
          ))}
        </ul>

            {/* Display Faculty section */}
        {active === 'Faculty' && facultyData &&(
            <div>
            <Image height="400" width= "800" src={imgPath} alt='hero-image' ></Image>
            <h1>{facultyData.faculty.facultyName}</h1>
            <p>{facultyData.faculty.description}</p>
            <button> See Events</button>
            <button> See Societies</button>
            </div>
        )}

        {/* Display Societies section */}
        {active === 'Societies' && facultyData &&(
            <div>
            <p> The {facultyData.faculty.facultyName} has {facultyData.faculty.societies.length} societies for its undergraduate students to engage with.</p>
            {/* Add content for Societies section */}

            {facultyData.faculty.societies.map((society, i)=>(
                    <SocietyCard key={i} society ={society} /> 
             ))}
            </div>
        )}

        {/* Display Events section */}
        <div className=""> {active === 'Events' && facultyData &&(
            <div>
            <h2>Whats happening at {facultyData.faculty.facultyName}? </h2>
            {/* Add content for Events section */}
            {facultyData.filteredEvents.map((event, i)=>(
                    <EventCard key={i} event ={event} /> 
             ))}
            </div>
        )}</div>
        {active === 'Events' && facultyData &&(
            <div>
            <h2>Whats happening at {facultyData.faculty.facultyName}? </h2>
            {/* Add content for Events section */}
            {facultyData.filteredEvents.map((event, i)=>(
                    <EventCard key={i} event ={event} /> 
             ))}
            </div>
        )}
      </div>
    );
  };
