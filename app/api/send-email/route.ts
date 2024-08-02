import { NextResponse } from 'next/server';

export async function POST(request: Request) {
    const { name, email, phone, orderNumber, purchaseDate, productName, productSKU, quantity, reason, condition, action, comments, returnAddress, shippingMethod, agree } = await request.json();

    try {
        const response = await fetch('https://techdata-backend.onrender.com/api/send-email', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ name, email, phone, orderNumber, purchaseDate, productName, productSKU, quantity, reason, condition, action, comments, returnAddress, shippingMethod, agree }),
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
