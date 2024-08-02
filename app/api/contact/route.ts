import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: Request) {
    try {
        const { firstName, lastName, company, email, country, phoneNumber, message } = await request.json();

        const transporter = nodemailer.createTransport({
            host: process.env.EMAIL_HOST,
            port: Number(process.env.EMAIL_PORT),
            secure: true,
            auth: {
                user: process.env.EMAIL_USER,
                pass: process.env.EMAIL_PASS,
            },
        });

        const mailOptions = {
            from: process.env.EMAIL_USER,
            to: process.env.EMAIL_USER,
            subject: 'New Contact Form Submission',
            text: `
                First Name: ${firstName}
                Last Name: ${lastName}
                Company: ${company}
                Email: ${email}
                Country: ${country}
                Phone Number: ${phoneNumber}
                Message: ${message}
            `,
        };

        await transporter.sendMail(mailOptions);
        return NextResponse.json({ message: 'Email sent successfully' }, { status: 200 });
    } catch (error) {
        console.error('Error sending email:', error);
        return NextResponse.json({ error: 'Error sending email'}, { status: 500 });
    }
}
