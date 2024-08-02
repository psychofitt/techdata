export const runtime = 'edge';

import { NextResponse } from 'next/server';

export async function POST(request: Request) {
    const { firstName, lastName, company, email, country, phoneNumber, message } = await request.json();

    try {
        const response = await fetch('https://techdata-backend.onrender.com/api/contact', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ firstName, lastName, company, email, country, phoneNumber, message }),
        });

        if (!response.ok) {
            throw new Error('Error sending email');
        }

        const result = await response.json();
        return NextResponse.json(result, { status: 200 });
    } catch (error) {
        console.error('Error forwarding request:', error);
        return NextResponse.json({ error: 'Error forwarding request' }, { status: 500 });
    }
}
