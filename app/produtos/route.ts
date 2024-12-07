// app/api/products/route.ts
import { NextResponse } from 'next/server';

const API_URL = 'https://deisishop.pythonanywhere.com/products/';

export async function GET() {
 return fetch(API_URL)
        .then(res => res.json())
        .then(data => Response.json(data))
}
