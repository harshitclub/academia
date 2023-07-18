import { connect } from "@/db/dbConfig";
import User from "@/models/userModel"
import {NextResponse, NextRequest} from 'next/server'
import bcryptjs from 'bcryptjs'
import { getDataFromToken } from "@/helpers/getDataFromToken";

connect()

export async function POST(request: NextRequest){
    try {
        const userId = await getDataFromToken(request)
        const user = await User.findOne({_id: userId})
        const reqBody = await request.json()
        const{oldPassword, newPassword} = reqBody
        if(user){
        const valPassword = await bcryptjs.compare(oldPassword, user.password)

        if(!valPassword){
            return NextResponse.json({message: "Invalid Old Password"
            }, {status: 400})
        }
            // hash new password
            const salt = await bcryptjs.genSalt(10)
            const hashPassword = await bcryptjs.hash(newPassword, salt)

            user.password = hashPassword
            await user.save()

            return NextResponse.json({message: "Password Change Successfully"},{status: 200})
        
        }else{
            return NextResponse.json({error: "Something is Wrong, Please Re-Login!"}, {status: 400})
        }
        

        
    } catch (error:any) {
        return NextResponse.json({error: error.message}, {status:500})
    }
}