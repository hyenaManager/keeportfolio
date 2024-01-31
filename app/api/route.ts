import sendGridEmail from "@/libs/messageMe";
import { NextRequest } from "next/server";

export async function POST(request:NextRequest){
    const body:any = await request.json();
    try {
        await sendGridEmail(body.email,body.message)
        return new Response("success",{
            status:201,
            statusText:"send successfully"
        })
    } catch (error) {
        return new Response(JSON.stringify(error))
    }
}