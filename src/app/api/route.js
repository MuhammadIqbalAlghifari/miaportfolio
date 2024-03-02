import nodemailer from "nodemailer";
import { NextResponse } from "next/server";

const email = process.env.EMAIL;
const pass = process.env.EMAIL_PASS;

export const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: email,
        pass,
    }
});

export async function POST(request) {
    try {
        const requestEmail = await request.json();

        const mailOptions = {
            from: requestEmail.email,
            to: email,
            text: requestEmail.message,
            html: `<div class="px-6 py-4 border-black border rounded-lg flex flex-col justify-center items-start gap-4 font-normal"><h1 class="text-xl">New Contact Message From Your Portfolio</h1><p class="text-md">Name : ${requestEmail.name}</p><p class="text-md">Email : ${requestEmail.email}</p><p class="text-md">Message : ${requestEmail.message}</p></div>`,
        };

        await transporter.sendMail(mailOptions);

        const form = {
            name: requestEmail.name,
            email: requestEmail.email,
            message: requestEmail.message,
        };

        console.log(form);

        return new NextResponse('Form submitted successfully', { status: 200 });
    } catch (error) {
        console.error('Error processing request', error);

        return new NextResponse('Failed to send email', { status: 500 });
    }
};
