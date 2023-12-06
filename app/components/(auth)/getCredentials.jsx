'use client'
import { useState } from 'react'
import Link from "next/link"
import { useFormState } from "@/app/utility/FormContext"


export default function GetCredentials() {

    const { onHandleNext,setFormData} = useFormState()
    const [userData, setUserData] = useState({
        username:'',
        password: '',
        confirm_password: ''
      })
    
    const[passwordError, setPasswordError] = useState(false)
    
    const handleInputChange = (e) => {
        const { name, value } = e.target
        setUserData((prevUserData) => ({
          ...prevUserData,
          [name]: value
        }))
      }

    async function handleSubmit(e) {
        e.preventDefault()
        if(userData.password !== userData.confirm_password) {
            setPasswordError(true)
            setUserData((prevUserData) => ({
                ...prevUserData,
                password: '',
                confirm_password: '',
              }))
            return
        }

        setFormData((prev) => ({ ...prev, 
            username: userData.username,
            password: userData.password,
        }))

        console.log(userData, "user data")
        onHandleNext()
        //setUserData({})
    }

    return(
        <form method="post" onSubmit={handleSubmit}> 
        <div className="bg-grey-lighter min-h-screen flex flex-col">
                    <div className="container max-w-sm mx-auto flex-1 flex flex-col items-center justify-center px-2">
                        <div className="bg-white px-6 py-8 rounded shadow-md text-black w-full">
                            <h1 className="mb-8 text-3xl text-center">Get Started</h1>

                            <input
                                type="text"
                                className="block border border-grey-light w-full p-3 rounded mb-4"
                                name="username"
                                value={userData.username}
                                onChange={(e) => handleInputChange(e)}
                                placeholder="Enter an username"
                                required ={true}
                            />

                            <input
                                type="password"
                                className={`block border border-grey-light w-full p-3 rounded mb-4 ${passwordError ? 'border-red-500' : ''} `}
                                name="password"
                                minLength={8}
                                value={userData.password}
                                onChange={(e)=> handleInputChange(e)}
                                placeholder="Enter a Password"
                                required ={true}
                            />
                            <input
                                type="password"
                                className={`block border border-grey-light w-full p-3 rounded mb-4 ${passwordError ? 'border-red-500' : ''} `}
                                name="confirm_password"
                                minLength={8}
                                value={userData.confirm_password}
                                onChange={(e)=>handleInputChange(e)}
                                placeholder="Confirm the Password"
                                required ={true}
                            />
                            {passwordError && <p className="text-red-500 text-xs italic">Passwords do not match.</p>}
        
                            <button
                                type='submit'
                                className="w-full text-center py-3 rounded bg-blue-700 text-black hover:bg-green-dark focus:outline-none my-1"
                            >Next</button>
        
                        </div>
        
                        <div className="text-grey-dark mt-6">
                            Already have an account? 
                            <Link className="no-underline border-b border-blue text-blue-400" href="/auth/login">
                                Sign in
                            </Link>
                        </div>
                    </div>
                </div>
              </form>  
    )
}