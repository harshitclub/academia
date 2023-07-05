import {connect} from '@/db/dbConfig'
import User from '@/models/userModel'
import { NextRequest, NextResponse } from 'next/server';
import bcryptjs from "bcryptjs";
import { sendEmail } from '@/helpers/mailer';
import { sendVoucher } from '@/helpers/voucherMail';
 

connect()

export async function POST(request: NextRequest){
    try {
        const reqBody = await request.json()
        const {fullName, email, phone, password} = reqBody
        console.log(reqBody);

        // check if user already exist
        const user = await User.findOne({email})
        if(user){
            return NextResponse.json({error: "User Already Exists"}, {status:400})
        }

        // hash password
        const salt = await bcryptjs.genSalt(10)
        const hashedPassword = await bcryptjs.hash(password, salt)

        const newUser = new User({
            fullName,
            email,
            phone,
            password: hashedPassword
        })

        const savedUser = await newUser.save()
        // send voucher
        await sendVoucher({email, emailType:"VOUCHEREMAIL", userId: savedUser._id})
        // send verification email
        await sendEmail({email, emailType: "VERIFY", userId: savedUser._id})

        return NextResponse.json({
            message: "User created successfully",
            success: true,
            savedUser
        })


        
    } catch (error:any) {
        return NextResponse.json({error: error.message}, {status:500})
        
    }
}