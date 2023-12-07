import { useFormState } from "@/app/utility/FormContext"
import { useRouter } from "next/navigation";

export default function OtpVerified() {

    const {formData , onHandleNext} = useFormState()
    const router = useRouter()

    console.log(formData, "verified")
    async function handleCreateAccount() {

        const userData = {
            ...formData,
        }
            
        try {
            const response = await fetch('http://localhost:3001/profiles/newProfile', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(userData) // Send the email as an object
        });
    
        if (response.ok) {
        onHandleNext()
         console.log("Account Created successfully")
        } else {
         console.log("Account Creation failed")
        
        }
        } catch (error) {
           console.error("Ah shit here we go again", error);
    }
  }

    return (
        <div className="flex flex-col items-center justify-center  bg-zinc-950 h-screen">
            <h1 className="text-2xl font-semibold text-white">OTP Verified</h1>
            <p className="text-gray-500 text-center mt-4 text-xs">Your email has been verified successfully</p>
            <button 
             className="flex flex-row items-center justify-center text-center bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-11 h-12 w-80 rounded-lg text-xs"
             onClick={handleCreateAccount}>
             Continue
            </button>
        </div>
    )
}