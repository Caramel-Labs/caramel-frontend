'use client'
import { useFormState } from "@/app/utility/FormContext"
import { useState } from 'react'

export default function GetEmail() {


    const [email, setEmail] = useState("");
    const { onHandleNext, setFormData, formData } = useFormState();
    // console.log(formData, "form data")

   async function handleSubmit(e) {
        e.preventDefault();
        setFormData((prev) => ({ ...prev, ...{ email } }));

        try {
          const response = await fetch('http://localhost:3001/email/send-otp', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify({ email }) // Send the email as an object
          });

          if (response.ok) {
            console.log("OTP requested successfully")
            onHandleNext();
          } else {
            console.log("OTP request failed")
          }
        } catch (error) {
          console.error("An error occurred:", error);
        }
       
    }

    return (
        <form className="flex gap-1 flex-col" method="post" onSubmit={handleSubmit}>
        <label htmlFor="email">Email</label>
            <input 
            autoFocus 
            id="email"
            type="email"
            name="email"
            value={email}
            required={true} 
            onChange={(e) => setEmail(e.target.value)}
            className="border h-11 px-4 rounded-md focus:outline-blue-500 " 
            />

            <div className="flex gap-4 justify-center mt-4">
            <button type="submit" className="h-11 px-6 inline-block bg-blue-600 font-semibold text-white rounded-md">
                Send OTP
            </button>
            </div>
      </form>
    )

}