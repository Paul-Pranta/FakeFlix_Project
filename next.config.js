/** @type {import('next').NextConfig} */
const nextConfig = {
    // below image section is manually added this need to be done if we are using any images that is not present in my folder

    images: {
        domains:["occ-0-116-448.1.nflxso.net","ademilter.com"]  
    },
    
    env: {
        MONGODB_URI: "mongodb://127.0.0.1:27017/fakeflix",
    },
    
    reactStrictMode: true,

    

}

module.exports = nextConfig
