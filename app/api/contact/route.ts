import { connect } from "@/db/dbConfig";
import Contact from "@/models/contactSchema"
import { NextRequest, NextResponse } from "next/server";

connect()

export async function POST(request: NextRequest){

    try {
        const reqBody = await request.json()

        const {name, email, phone, course, state, city, address, message} = reqBody
        console.log(reqBody)

        const newContact = new Contact({
            name, email, phone, course, state, city, address, message
        })

        const savedContact = await newContact.save()
        return NextResponse.json({
            message: "Message Sent",
            success: true,
            savedContact,
          });
    } catch (error:any) {
        return NextResponse.json({error: error.message}, {status: 500})
    }

}