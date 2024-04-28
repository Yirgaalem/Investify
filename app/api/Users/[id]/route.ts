import { NextResponse } from "next/server";
import User from '../../../(models)/User';
import GetUser from "../../../functions/GetUser";

export async function PUT(req: Request) {
  
  try {
    const body = await req.json();
    const userData = body.stock;

    // Confirm data exists
    if (!userData?.stockName || !userData.stockAmount || !userData.stockPurchasePrice) {
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