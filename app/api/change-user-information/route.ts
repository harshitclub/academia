import { connect } from "@/db/dbConfig";
import User from "@/models/userModel"
import {NextResponse, NextRequest} from 'next/server'
import { getDataFromToken } from "@/helpers/getDataFromToken";

connect()

export async function POST(request: NextRequest){
    try {
        const userId = await getDataFromToken(request)
        const user = await User.findOne({_id: userId})
        const reqBody = await request.json()
        const{newName} = reqBody;

        if(user){
            user.fullName = newName;
            await user.save()

            return NextResponse.json({message:"Name Changed Successfully"}, {status: 200})
        }

    } catch (error:any) {
        return NextResponse.json({error: error.message}, {status:500})
    }
}