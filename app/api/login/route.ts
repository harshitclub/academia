import {connect} from '@/db/dbConfig'
import User from '@/models/userModel'
import { NextResponse, NextRequest } from 'next/server'
import bcryptjs from 'bcryptjs'
import jwt from 'jsonwebtoken'

connect()

export async function POST(request: NextRequest){
    try {
        const reqBody = await request.json();
        const {email, password} = reqBody

        // check if user exists
        const user = await User.findOne({email})
        if(!user){
            return NextResponse.json({error: "User Does Not Exist!"}, {status: 400})
        }
        console.log("user exists!");

        // check if password is correct
        const valPassword = await bcryptjs.compare(password, user.password)
        if(!valPassword){
            return NextResponse.json({error: "Invalid Credentials!"}, {status: 400})
        }

        // create json web token
        const tokenData = {
            id: user._id,
            fullName: user.fullName,
            email: user.email
        }

        const token = await jwt.sign(tokenData, process.env.TOKEN_SECRET, {expiresIn: "1d"})

        const response = NextResponse.json({
            message:"Login Success!",
            success:true
        })

        response.cookies.set("token", token, {
            httpOnly:true
        })

        return response
        
        
    } catch (error: any) {
        return NextResponse.json({error: error.message}, {status:500})
    }
}