import { connect } from "@/db/dbConfig";
import { sendVoucher } from "@/helpers/voucherMail";
import User from "@/models/userModel";
import { NextResponse, NextRequest } from "next/server";

connect()

export async function POST(request: NextRequest){
    try {
        const reqBody = await request.json()
        const {token} = reqBody
        console.log(token);

        const user = await User.findOne({verifyToken: token, verifyTokenExpiry: {$gt: Date.now()}})

        if(!user){
            return NextResponse.json({error:"Invalid Token"}, {status:400})
        }
        console.log(user)

        user.isVerified = true
        user.verifyToken = undefined
        user.verifyTokenExpiry =undefined
        await user.save()

        // send voucher
    await sendVoucher({
      email: user.email,
      name:user.fullName,
      emailType: "VOUCHEREMAIL",
      userId: user._id,
    });

        return NextResponse.json({
            message:"Email verified Successfully",
            success: true
        })
        
    } catch (error:any) {
        return NextResponse.json({error: error.message}, {status: 500})
        
    }
}