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

    if (!user.hasAccess) {
      return NextResponse.json(
        { error: "Please subscribe first!" },
        { status: 403 }
      );
    }

    const board = await Board.create({
      userId: user._id,
      name: body.name,
    });

    user.boards.push(board._id);

    await user.save();

    // return NextResponse.json({ success: true });
    // or
    return NextResponse.json(board);
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}

export async function DELETE(req) {
  try {
    const { searchParams } = req.nextUrl;
    const boardId = searchParams.get("boardId");

    if (!boardId) {
      return NextResponse.json(
        { error: "boardId is required" },
        { status: 400 }
      );
    }

    const session = await auth();

    if (!session) {
      return NextResponse.json({ error: "Not Authorized" }, { status: 401 });
    }

    const user = await User.findById(session?.user?.id);

    if (!user.hasAccess) {
      return NextResponse.json(
        { error: "Please subscribe first!" },
        { status: 403 }
      );
    }

    await Board.deleteOne({
      _id: boardId,
      userId: session?.user?.id,
    });

    user.boards = user.boards.filter((id) => id.toString() !== boardId);
    
    return NextResponse.json({});
  } catch (error) {
    return NextResponse.json({ error: error.messsage }, { status: 500 });
  }
}

//STATUS CODES
// 200: Good
// 300: Redirection changing domain
// 400: client side error
// 500 server side issues
