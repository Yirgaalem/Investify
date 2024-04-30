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
  
    const user = await User.findById(userData._id);
    // console.log(user)
    // Find the user by id and set the crypto to what currently exists, and push new crypto to array
    await User.updateOne({_id: userData._id}, {crypto: [...user.crypto, userData]});

    return NextResponse.json({ message: 'User Updated'}, {status: 200});
    
  } catch (err) {
    console.log(err) //error
    return NextResponse.json({ message: 'Error', err}, {status: 500})
  }
}