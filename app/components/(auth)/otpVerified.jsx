import { useFormState } from "@/app/utility/FormContext"
import { useRouter } from "next/navigation";

export default function OtpVerified() {

    const {formData} = useFormState()
    const router = useRouter()

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
         router.push('/auth/login')
         console.log("Account Created successfully")
        } else {
         console.log("Account Creation failed")
        
        }
        } catch (error) {
           console.error("Ah shit here we go again", error);
    }
  }

    return (
        <div className="flex flex-col items-center justify-center">
            <h1 className="text-2xl font-semibold">OTP Verified</h1>
            <p className="text-gray-500 text-center">Your email has been verified successfully</p>
            <button 
             className="flex flex-row items-center justify-center text-center w-full border rounded-xl outline-none py-5 bg-blue-700 border-none text-white text-sm shadow-sm"
             onClick={handleCreateAccount}>
             Continue
            </button>
        </div>
    )
}