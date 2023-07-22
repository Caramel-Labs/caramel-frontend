"use client"

import Link from "next/link"

export default function LoginPage(){

    //const emailRegex = "/@kdu\.ac\.lk$/"
    //const passwordRegex = "[a-z0-9]{1,15}"

    return (
        <div className="h-screen relative flex content-center justify-center">
            <div className="flex flex-col content-center justify-center">
                <div className="bg-white rounded-lg h-1/2 max-w-sm p-4 sm:p-6 lg:p-8">
                
                    <form className="space-y-6" action="#">
                        
                        <h3 className="text-3xl font-extrabold">SIGN IN TO CARAMEL</h3>
                        <div>
                            <label for="email" className="text-sm font-medium block mb-2">Your email</label>
                            <input type="email" name="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-orange-500 focus:border-orange-500 block w-full p-2.5" placeholder="name@example.com" required=""/>
                        </div>

                        <div>
                            <label for="password" className="text-sm font-medium block mb-2">Your password</label>
                            <input type="password" name="password" id="password" required length="8"  placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-orange-500 focus:border-orange-500 block w-full p-2.5"/>
                        </div>

                        <div className="flex items-start">
                            <Link href="#" className="text-sm text-orange-700 hover:underline ml-auto dark:text-orange-500"> Forgot password?</Link>
                        </div>

                        <button type="submit" className="w-full text-white bg-orange-700 hover:bg-orange-800 focus:ring-4 focus:ring-orange-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-orange-600 dark:hover:bg-orange-700 dark:focus:ring-orange-800">Login to your account</button>
                        
                        <div className="text-sm font-medium text-gray-500">Not registered?&nbsp;
                            <Link href="#" className="text-orange-700 hover:underline dark:text-orange-500">Create account</Link>
                        </div>
    
                    </form>
                </div>
            </div>
        </div>
    )
}
