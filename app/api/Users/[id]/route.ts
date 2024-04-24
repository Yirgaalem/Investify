import { NextRequest, NextResponse } from "next/server";

export const PUT = async(req: Request) => {
  try {
      console.log('PUT');
      // req.json();
  } catch (error) {
    return NextResponse.json({message: error}, {status: 500});
  }
  
} 