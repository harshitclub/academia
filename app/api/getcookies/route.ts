import {NextRequest, NextResponse} from 'next/server'


export async function GET(request: NextRequest){
    try {
        const token = request.cookies.get("token")?.value;
        
        if(token){
            return NextResponse.json({token: "LOGOUT"})
        }else if(!token){
            return NextResponse.json({
                token: "LOGIN"
            })
        }
    } catch (error:any) {
        return NextResponse.json({error:error.message}, {status:400})
    }
}