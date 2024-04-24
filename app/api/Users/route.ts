import User from '../../(models)/User';
import { NextResponse } from "next/server";
import bcrypt from 'bcrypt';

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const userData = body.formData;

    // Confirm data exists
    if (!userData?.email || !userData.password) {
      return NextResponse.json({ message: 'All fields are required'}, {status: 400});
    }

    // Check for duplicate emails
    const duplicate = await User.findOne({email: userData.email})
      .lean()
      .exec();

    if (duplicate) {
      return NextResponse.json({ message: 'Duplicate Email'}, {status: 409});
    }
    userData.stock = '';
    userData.crypto = '';

    const hashPassword = await bcrypt.hash(userData.password, 10);
    userData.password = hashPassword;

    await User.create(userData);
    return NextResponse.json({ message: 'User Created'}, {status: 200})

  } catch (err) {
    console.log(err) //error
    return NextResponse.json({ message: 'Error', err}, {status: 500})
  }
}

export async function GET() {
  
  try {
    const user = await User.find();
    return NextResponse.json({user}, {status: 200});

  } catch (err) {
    return NextResponse.json({message: "Error", err}, {status: 500});
  }
}