// app/api/submit-form/route.js
import { NextResponse } from 'next/server';

export async function POST(request) {
  try {
    const body = await request.json();
    
    const GOOGLE_SCRIPT_URL = process.env.GOOGLE_SCRIPT_URL;
    
    if (!GOOGLE_SCRIPT_URL) {
      throw new Error('GOOGLE_SCRIPT_URL not found in environment variables');
    }

    
    const response = await fetch(GOOGLE_SCRIPT_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body),
      // Thêm timeout
      signal: AbortSignal.timeout(10000)
    });

    if (!response.ok) {
      const errorText = await response.text();
      console.error('❌ Google Apps Script error:', errorText);
      throw new Error(`Google Apps Script returned ${response.status}: ${errorText}`);
    }

    const result = await response.text(); // Dùng text() thay vì json()
    
    return NextResponse.json({ 
      success: true, 
      message: 'Data submitted successfully',
      data: result 
    });
    
  } catch (error) {
    console.error('💥 Error details:', {
      message: error.message,
      name: error.name,
      stack: error.stack
    });
    
    return NextResponse.json(
      { 
        success: false, 
        error: error.message,
        details: error.name 
      },
      { status: 500 }
    );
  }
}