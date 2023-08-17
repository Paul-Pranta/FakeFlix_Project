



import dbConn from "@/utils/dbConn";
import Contact from "@/models/contact";
import {NextResponse} from "next/server";

export async function POST(req) {
    try {

        const body = await req.json();
        console.log("Request body:", body);
        await dbConn();

        await Contact.create(body);

        return NextResponse.json({
            message:"Message sent successfully!"
        }, {
            status: 200
        })

    }catch (e) {
        return NextResponse.json(
            { message: "Server error, please try again!" },
            { status: 500 }
        )
    }
}







// import dbConnect from "@/utils/conn"
// import Contact from "@/models/contact"
// import { NextResponse } from "next/server";



// export async function POST(req) {

//     try {

//         const body = await req.json();
//         await dbConnect();
//         await Contact.create(body);

//         return NextResponse.json({ message: 'message sent successfully' }, { status: 200 })

//     }catch (e) {

//         return NextResponse.json({ message: "server error try again!" }, {status:500})

//    }

// }