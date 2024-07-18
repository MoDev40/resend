import EmailTemplate from "@/app/_component/EmailTemplate";
import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(req:NextRequest) {
    try {
                
        // const { error,data } = await resend.emails.send(
        //     {
        //         from:"Acme <delivered@resend.dev>",
        //         to:"modev.404@gmail.com",
        //         subject:"Notification",
        //         react:EmailTemplate({username:"Mukhtaar"}),
        //         reply_to:'info@support.com'
        //     }
        // )

        // Send Batch Emails
        // Trigger up to 100 batch emails at once. 
        const { error,data } = await resend.batch.send([
            {
                from:"Acme <delivered@resend.dev>",
                to:"modev.404@gmail.com",
                subject:"Notification",
                react:EmailTemplate({username:"Mukhtaar"}),
                reply_to:'info@support.com'
            },
            {
                from:"Acme <delivered@resend.dev>",
                to:"modev.404@gmail.com",
                subject:"Notification",
                react:EmailTemplate({username:"Faarax"}),
                reply_to:'info@support.com'
            },
            {
                from:"Acme <delivered@resend.dev>",
                to:"modev.404@gmail.com",
                subject:"Notification",
                react:EmailTemplate({username:"Geele"}),
                reply_to:'info@support.com'
            }
        ])

        if(error){
            return NextResponse.json({message:"Unexpected error",error},{status:500})
        }

        return NextResponse.json(data,{status:201})
    } catch (error) {
        return NextResponse.json({message:"Unexpected error"},{status:500})
    }
}