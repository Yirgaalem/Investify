import { NextResponse } from "next/server";
import User from '../../../../(models)/User';

export async function PUT(req: Request) {
  
  try {
    const body = await req.json();
    const userData = body.crypto;

    // Confirm data exists
    if (!userData?.cryptoName || !userData.cryptoAmount || !userData.cryptoPurchasePrice) {
      return NextResponse.json({ message: 'All fields are required'}, {status: 400});
    }

    const foundUser = await User.findByIdAndUpdate(userData._id, body);
    
    if (foundUser)
      return NextResponse.json({ message: 'User Updated'}, {status: 200})
    else  
      return NextResponse.json({message: 'Cannot Find User'}, {status:500});
  
  } catch (err) {
    console.log(err) //error
    return NextResponse.json({ message: 'Error', err}, {status: 500})
  }
}