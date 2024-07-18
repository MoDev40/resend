import EmailTemplate from "@/app/_component/EmailTemplate";
import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(req:NextRequest) {
    try {
        const { error } = await resend.emails.send({
            from:"delivered@resend.dev",
            to:"modev.404@gmail.com",
            subject:"Notification",
            react:EmailTemplate({username:"Mukhtaar"})
        })

        if(error){
            return NextResponse.json({message:"Unexpected error",error},{status:500})
        }

        return NextResponse.json("ok",{status:201})
    } catch (error) {
        return NextResponse.json({message:"Unexpected error"},{status:500})
    }
}