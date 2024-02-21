/** @type {import('next').NextConfig} */
const nextConfig = {}

const withPWA = require('next-pwa')({
    dest: 'public'
  })
  
  module.exports = withPWA({
    images: {
        domains: ['res.cloudinary.com']
      },
    async headers() {
        return [
            
                {
                    // matching all API routes
                    source: "/api/:path*",
                    headers: [
                        { key: "Access-Control-Allow-Credentials", value: "true" },
                        { key: "Access-Control-Allow-Origin", value: "http://localhost:3000, http://localhost:8000 , https://loop-backend.cyclic.app , https://loop-recommender-caramel-labs-2.koyeb.app/",}, // origins separated by comma
                        { key: "Access-Control-Allow-Methods", value: "GET,DELETE,PATCH,POST,PUT" },
                        { key: "Access-Control-Allow-Headers", value: "X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version" },
                    ]
                }         
        ]
    }
    // next.js config
  })
