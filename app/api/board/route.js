//Next Response : helper to help us format our response

import { NextResponse } from "next/server";
import { auth } from "@/auth";
import { connectMongo } from "@/libs/mongoose";
import User from "@/Models/User";
import Board from "@/Models/Board";

export async function POST(req) {
  try {
    const body = await req.json();
    if (!body.name) {
      // return error
      // format in json fromat takes 2 params the data and metadata status
      return NextResponse.json(
        { error: "Board Name is Required" },
        { status: 400 }
      );
    }
    // is the user authenticated
    const session = await auth();

    if (!session) {
      return NextResponse.json({ error: "Not Authorized" }, { status: 401 });
    }

    await connectMongo();

    // User.find({email: "hey@hey.com"})
    // almost guarateed we will have user
    const user = await User.findById(session.user.id);

    const board = await Board.create({
      userId: user._id,
      name: body.name,
    });

    user.boards.push(board._id);
    await user.save();

    return NextResponse.json();

  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}

//STATUS CODES
// 200: Good
// 300: Redirection changing domain
// 400: client side error
// 500 server side issues
