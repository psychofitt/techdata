// app/api/send-email/route.ts
export const runtime = 'edge';

import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: Request) {
    const { name, email, phone, orderNumber, purchaseDate, productName, productSKU, quantity, reason, condition, action, comments, returnAddress, shippingMethod, agree } = await request.json();

    let transporter = nodemailer.createTransport({
        host: process.env.EMAIL_HOST,
        port: Number(process.env.EMAIL_PORT),
        secure: true, // true for 465, false for other ports
        auth: {
            user: process.env.EMAIL_USER,
            pass: process.env.EMAIL_PASS,
        },
    });

    let mailOptions = {
        from: process.env.EMAIL_USER,
        to: process.env.EMAIL_USER,
        subject: 'New RMA Form Submission',
        text: `
            Name: ${name}
            Email: ${email}
            Phone: ${phone}
            Order Number: ${orderNumber}
            Purchase Date: ${purchaseDate}
            Product Name: ${productName}
            Product SKU: ${productSKU}
            Quantity: ${quantity}
            Reason: ${reason}
            Condition: ${condition}
            Action: ${action}
            Comments: ${comments}
            Return Address: ${returnAddress}
            Shipping Method: ${shippingMethod}
            Agree: ${agree}
        `,
    };

    try {
        await transporter.sendMail(mailOptions);
        return NextResponse.json({ message: 'Email sent successfully' }, { status: 200 });
    } catch (error) {
        console.error('Error sending email:', error);
        return NextResponse.json({ error: 'Error sending email'}, { status: 500 });
    }
}
