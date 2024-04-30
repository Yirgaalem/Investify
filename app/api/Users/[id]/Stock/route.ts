import { NextResponse } from "next/server";
import User from '../../../../(models)/User';

export async function PUT(req: Request) {
  
  try {
    const body = await req.json();
    const userData = body.stock;

    // Confirm data exists
    if (!userData?.stockName || !userData.stockAmount || !userData.stockPurchasePrice) {
      return NextResponse.json({ message: 'All fields are required'}, {status: 400});
    }
  
    const user = await User.findById(userData._id);
  
    // Find the user by id and set the stock to what currently exists, and push new stock to array
      await User.updateOne({_id: userData._id}, {stock: [...user.stock, userData]});

    return NextResponse.json({ message: 'User Updated'}, {status: 200});
    
  } catch (err) {
    console.log(err) //error
    return NextResponse.json({ message: 'Error', err}, {status: 500})
  }
}