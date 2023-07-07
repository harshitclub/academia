import User from '@/models/userModel'
import {connect} from '@/db/dbConfig'
import { NextResponse, NextRequest } from 'next/server'
connect()

export async function POST(request: NextRequest) {
    try {
        const reqBody = await request.json()
        const {hashVoucher} = reqBody; 

        // check if voucher exists
        const user = await User.findOne({voucher:hashVoucher, voucherExpiry: {$gt: Date.now()}});
        if(user){
            return NextResponse.json(
                {message:"Verified",
            verify: 1
            },
                
           
            )
        }else if(!user){
          return NextResponse.json(
            {message: "Invalid Voucher or Expired", 
            verify: 0},

          )
        }

       
    } catch (error:any) {
        return NextResponse.json({error: error.message}, {status: 500})
    }

}