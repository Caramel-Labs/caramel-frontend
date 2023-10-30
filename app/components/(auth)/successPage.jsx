import Image from "next/image"
import { useFormState } from "@/app/utility/FormContext"
import { useRouter } from "next/navigation"


export default function SuccessPage() {
   
    const {formData} = useFormState()
    const router = useRouter()

    //This function creates a user account in the db
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
        <div className="flex flex-col items-center justify-center h-screen">
                <Image alt="logo" />
                <h1 className="text-4xl font-bold mb-4">
                    ALL DONE
                </h1>
                <p>
                    lorem ipsum dolor sit amet
                </p>
           
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={handleCreateAccount}>
                Lets gooo
            </button>
        </div>
    );
}


