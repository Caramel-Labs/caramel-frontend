"use client"

import { useState } from 'react';

export default function CreateEvent() {
  // State variables to manage form data
  const [eventName, setEventName] = useState('');
  const [eventDescription, setEventDescription] = useState('');
  const [eventAvailability, setEventAvailability] = useState('all'); // Default value is 'all'
  const [selectedFaculties, setSelectedFaculties] = useState([]);

  // List of all faculties (fetch from API later)
  const facultiesList = [
    'Faculty of Engineering',
    'Faculty of Defence and Strategic Studies',
    'Faculty of Law',
    'Faculty of Management, Social Sciences and Humanities',
    'Faculty of Computing',
    'Faculty of Medicine',
    'Faculty of Allied Health Sciences',
    'Faculty of Built Environment and Spatial Sciences',
    'Faculty of Technology',
    'Faculty of Criminal Justice'
  ];

  // State variables to manage date and time
  const [eventDate, setEventDate] = useState({ day: '', month: '', year: '' });
  const [eventTime, setEventTime] = useState({ hour: '', minute: '', ampm: 'AM' });

  // State variable to manage the event banner (file input)
  const [eventBanner, setEventBanner] = useState(null);

  // Helper function to handle date changes
  const handleDateChange = (e) => {
    const { name, value } = e.target;
    setEventDate((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  // Helper function to handle time changes
  const handleTimeChange = (e) => {
    const { name, value } = e.target;
    setEventTime((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  // Helper function to handle AM/PM dropdown change
  const handleAMPMChange = (e) => {
    setEventTime((prevState) => ({
      ...prevState,
      ampm: e.target.value,
    }));
  };

  // Helper function to handle file input change (event banner)
  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setEventBanner(file);
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // Do something with the form data, e.g., send it to the server
    const eventData = {
      name: eventName,
      description: eventDescription,
      availability: eventAvailability,
      selectedFaculties: selectedFaculties,
      date: eventDate,
      time: eventTime,
      banner: eventBanner,
    };

    // Reset the form after submission
    setEventName('');
    setEventDescription('');
    setEventAvailability('all');
    setSelectedFaculties([]);
    setEventDate({ day: '', month: '', year: '' });
    setEventTime({ hour: '', minute: '', ampm: 'AM' });
    setEventBanner(null);
  };

  return (
    <div className='p-5'>
        <h2 className='text-2xl font-bold pb-3'>CREATE EVENT</h2>

        <form onSubmit={handleSubmit}>

            {/* Event Name ===================================================================================================== */}
            <div>
                <label>Event Name:</label>
                <br />
                <input
                    type="text"
                    value={eventName}
                    onChange={(e) => setEventName(e.target.value)}
                    className='mt-2 border-2 p-2 w-full'
                    placeholder='Keep your event name as short as possible'
                    required
                />
                <br /><br />
            </div>

            {/* Event Description ============================================================================================== */}
            <div>
                <label>Event Description:</label>
                <br />
                <textarea
                    value={eventDescription}
                    onChange={(e) => setEventDescription(e.target.value)}
                    className='mt-2 border-2 p-2 w-full'
                    placeholder='What is your event all about?'
                    required
                />
                <br /><br />
            </div>

            {/* Event Availability ============================================================================================= */}
            <div>
                <label>Event Availability:</label>
                <br />
                <select
                    value={eventAvailability}
                    onChange={(e) => setEventAvailability(e.target.value)}
                    className='mt-2 p-2 w-full'
                >
                    <option value="all">All Faculties</option>
                    <option value="facultyOnly">My Faculty Only</option>
                    <option value="faculty">Selected Faculties</option>
                </select>
                <br /><br />
            </div>

            {/* {eventAvailability === 'faculty' && (
                <div>
                    <label>Select Faculties:</label>
                    <br />
                    <select
                        multiple
                        value={selectedFaculties}
                        onChange={(e) => setSelectedFaculties(Array.from(e.target.selectedOptions, (option) => option.value))}
                    >
                    {facultiesList.map((faculty) => (
                        <option key={faculty} value={faculty}>
                        {faculty}
                        </option>
                    ))}
                    </select>
                    <br /><br />
                </div>
            )} */}

            {/* Select Availability ============================================================================================ */}
            {eventAvailability === 'faculty' && (
            <div>
                <label>Select Faculties:</label>
                <br />
                {facultiesList.map((faculty) => (
                <div key={faculty}>
                    <input
                    type="checkbox"
                    value={faculty}
                    checked={selectedFaculties.includes(faculty)}
                    onChange={(e) => {
                        const { value, checked } = e.target;
                        setSelectedFaculties((prevState) => {
                        if (checked) {
                            return [...prevState, value];
                        } else {
                            return prevState.filter((selectedFaculty) => selectedFaculty !== value);
                        }
                        });
                    }}
                    />
                    <label> {faculty}</label>
                    <br />
                </div>
                ))}
                <br />
            </div>
            )}

            {/* Event Date ===================================================================================================== */}
            <div>
                <label>Event Date:</label>
                <br />
                <div className='mt-2 flex gap-x-4'>
                    <select name="day" value={eventDate.day} onChange={handleDateChange} className='p-2' required>
                        <option value="">Day</option>
                        {/* Add options for days here */}
                    </select>
                    <select name="month" value={eventDate.month} onChange={handleDateChange} className='p-2' required>
                        <option value="">Month</option>
                        {/* Add options for months here */}
                    </select>
                    <input
                        type="number"
                        name="year"
                        value={eventDate.year}
                        onChange={handleDateChange}
                        placeholder="Year"
                        className='w-1/3 border-2 p-2'
                        required
                    />
                </div>
                <br /><br />
            </div>

            {/* Event Time ===================================================================================================== */}
            <div>
                <label>Event Time:</label>
                <br />
                <div className='mt-2 flex gap-x-4'>
                    <input
                        type="number"
                        name="hour"
                        min="1"
                        max="12"
                        value={eventTime.hour}
                        onChange={handleTimeChange}
                        className='border-2 p-2'
                        required
                    />
                    :
                    <input
                        type="number"
                        name="minute"
                        min="0"
                        max="59"
                        value={eventTime.minute}
                        onChange={handleTimeChange}
                        className='border-2 p-2'
                        required
                    />
                    <select name="ampm" value={eventTime.ampm} onChange={handleAMPMChange} className='p-2'>
                        <option value="AM">AM</option>
                        <option value="PM">PM</option>
                    </select>
                </div>
                <br /><br />
            </div>

            {/* Event Banner =================================================================================================== */}
            <div>
                <label>
                Event Banner
                <br />
                <span className='text-xs'>We recommend a 1920px by 1080px image</span>
                <input type="file" accept="image/*" onChange={handleFileChange} className='mt-2' />
                </label>
            </div>

            {/* Submit Button ================================================================================================== */}
            <div className='pt-12 flex justify-center'>
                <button type="submit" className='border-2 p-3 px-16 rounded-lg'>Create Event</button>
            </div>

        </form>
    </div>
  );
};
