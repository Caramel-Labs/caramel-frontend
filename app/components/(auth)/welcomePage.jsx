import Image from "next/image";
import { useFormState } from "@/app/utility/FormContext"

export default function WelcomePage() {
   
    const { onHandleNext} = useFormState()

    return (
        <div className="flex flex-col items-center justify-center h-screen">
                <Image alt="logo" />
                <h1 className="text-4xl font-bold mb-4">
                    STAY IN THE LOOP
                </h1>
                <p> lorem ipsum dolor sit amet</p>
           
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={onHandleNext}>
                Get Started
            </button>
        </div>
    );
}


