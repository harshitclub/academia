import { NextRequest, NextResponse } from "next/server";
import User from "@/models/userModel";
import { connect } from "@/db/dbConfig";
import { getDataFromToken } from "@/helpers/getDataFromToken";
import { sendEmail } from "@/helpers/mailer";

connect()

export async function GET(request: NextRequest){
    try {
        const userId = await getDataFromToken(request);

        const user = await User.findOne({_id: userId}).select('-password')

        if(user){
          
        console.log(user.email);
        console.log(user._id);
        
        
          await sendEmail({email: user.email, name: user.fullName, emailType:"VERIFY", userId: user._id})
        }

        return NextResponse.json({
            message:"Verification Email Sent",
            success:true,
        })

    } catch (error:any) {
        return NextResponse.json({error: error.message}, {status: 400})
    }
}