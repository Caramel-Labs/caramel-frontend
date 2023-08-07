'use client'
import { useState } from 'react';
import { useFormState } from "@/app/utility/FormContext"

export default function VerifyOTP() {
  const [otpValues, setOtpValues] = useState(['', '', '', '', '', '']); // An array to store OTP input values
  const { onHandleNext, setFormData, formData} = useFormState();

  function handleInputChange(index, value) {

    if (value.length === 1 && index < otpValues.length - 1) {
      const nextInput = document.getElementById(`otp-input-${index + 1}`);
      nextInput.focus();
      
    }
    const updatedValues = [...otpValues];
    updatedValues[index] = value;
    setOtpValues(updatedValues);
  }

  async function handleSubmit(event) {
    event.preventDefault();
    //create the OTP string from the array
    console.log(formData.email)
    const otp = otpValues.join('');
    console.log('OTP:', otp);
    
    const verificationData = {
      email: formData.email,
      otp: otp
    }

    // API call to verify the OTP
    
    try {
      const response = await fetch('http://localhost:3001/email/verify-otp', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(verificationData) // Send the email as an object
      });

      if (response.ok) {
        console.log("OTP verified successfully")
        onHandleNext();
      } else {
        console.log("OTP verification failed")
      }
    } catch (error) {
      console.error("An error occurred:", error);
    }
  }

  return (
    <div className="relative flex min-h-screen flex-col justify-center overflow-hidden bg-gray-50 py-12">
      <div className="relative bg-white px-6 pt-10 pb-9 shadow-xl mx-auto w-full max-w-lg rounded-2xl">
        <div className="mx-auto flex w-full max-w-md flex-col space-y-16">
          <div className="flex flex-col items-center justify-center text-center space-y-2">
            <div className="font-semibold text-3xl">
              <p>Email Verification</p>
            </div>
            <div className="flex flex-row text-sm font-medium text-gray-400">
              <p>We have sent a code to your email {formData.email}</p>
            </div>
          </div>

          <div>
            <form onSubmit={handleSubmit}>
              <div className="flex flex-col space-y-16">
                <div className="flex flex-row items-center justify-between mx-auto w-full max-w-xs">
                  {otpValues.map((value, index) => (
                    <div key={index} className="w-16 h-16 ">
                      <input
                        id={`otp-input-${index}`}
                        className="w-full h-full flex flex-col items-center justify-center text-center px-5 outline-none rounded-xl border border-gray-200 text-lg bg-white focus:bg-gray-50 focus:ring-1 ring-blue-700"
                        type="number"
                        value={value}
                        autoFocus={index === 0 ? true : false}
                        maxLength={1}
                        onChange={(e) => handleInputChange(index, e.target.value)}
                      />
                    </div>
                  ))}
                </div>

                <div className="flex flex-col space-y-5">
                  <div>
                    <button
                      className="flex flex-row items-center justify-center text-center w-full border rounded-xl outline-none py-5 bg-blue-700 border-none text-white text-sm shadow-sm"
                      type="submit"
                    >
                      Verify Account
                    </button>
                  </div>

                  <div className="flex flex-row items-center justify-center text-center text-sm font-medium space-x-1 text-gray-500">
                    <p>Didnt receive code?</p> <a className="flex flex-row items-center text-blue-600" href="http://" target="_blank" rel="noopener noreferrer">Resend</a>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
