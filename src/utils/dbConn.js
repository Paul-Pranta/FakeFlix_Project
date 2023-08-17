

import mongoose from "mongoose"

const MONGODB_URI = process.env.MONGODB_URI;

if (!MONGODB_URI) {

    console.log("aaaaaaaaaaaaaaaaaaaaaaaaaaaa");
  
}

let cached = global.mongoose;

if (!cached) {
    cached = global.mongoose = { con: null, promise: null }
}

const dbConn = async () => {
    try {
        if (cached.conn) {
            return cached.conn;
        }

        if (!cached.promise) {
            const opts = {
                bufferCommands: false
            };
            cached.promise = mongoose.connect(MONGODB_URI, opts).then((mongoose) => {
                return mongoose;
            });
        }

        cached.conn = await cached.promise;
        console.log("Database connected successfully");
        return cached.conn;
    } catch (error) {
        console.error("Database connection error:", error);
        throw error;
    }
};




export default dbConn;

// const MONGODB_URL = "mongodb://127.0.0.1/netflix";

// if (!MONGODB_URL) {
//     throw new Error(
//         "Please define the MONGODB_URI environment variable inside .env.local"
//     )
// }


// let cached = global.mongoose;

// if (!cached) {
//     cached = global.mongoose = { con: null, promise: null }
// }

// const dbConnect = async () => {
//     if (cached.conn) {
//         return cached.conn;
//     }


//     // If a connection does not exist, we check if a promise is already in progress.If a promise is already in progress, we wait for it to resolve to get the connection
//     if (!cached.promise) {
//         const opts = {
//             bufferCommands: false
//         };

//         cached.promise = mongoose.connect(MONGODB_URL, opts).then((mongoose) => {
//             return mongoose
//         })
//     }

//     try {
//         cached.conn = await cached.promise;
//     } catch (e) {
//         cached.promise = null;
//         throw e;
//     }

//     return cached.conn;
// }