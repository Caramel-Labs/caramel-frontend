import  CredentialsProvider  from 'next-auth/providers/credentials'

//const pagePath= "@app/auth/login"

const authOptions = {
    providers: [
        CredentialsProvider({
            name: 'credentials',
            credentials: {
                email: { label: "Email", type: "email", placeholder: "mfer@kdu.ac.lk" },
                password: { label: "Password", type: "password" }
            },
        
            async authorize(credentials) {
                console.log(credentials)
                const res = await fetch('http://localhost:3001/auth', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({
                        email: credentials.email,
                        password: credentials.password
                    })
                })
                    
                const jwt = await res.json()
                console.log(jwt)

                if (jwt) {
                    return jwt
                } else {
                    return null
                }
            

            }
        })
    ],
}

export default authOptions
