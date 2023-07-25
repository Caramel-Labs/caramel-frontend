import  CredentialsProvider  from 'next-auth/providers/credentials'
import verifyJWT from '@/app/utility/verifyJWT'

//const pagePath= "@app/auth/login"

const authOptions = {
    providers: [
        CredentialsProvider({
            name: 'credentials',
            credentials: {
                email: { label: "Email", type: "email", placeholder: "mfer@kdu.ac.lk" },
                password: { label: "Password", type: "password" }
            },
            pages: {
                signIn: '/auth/login',
            },
            async authorize(credentials) {
                console.log(credentials)
                const res = await fetch('http://localhost:3001/auth', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({
                        email: credentials?.email,
                        password: credentials?.password
                    })
                })
                    
                const user = await res.json()
                console.log(user)

                if (user) {
                    return user
                    
                } else {
                    return null
                }
            

            }
        })
    ],
}

export default authOptions
