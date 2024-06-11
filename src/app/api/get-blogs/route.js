import connectToDB from "@/database";
import Blog from "@/models/blog";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    await connectToDB();
    const extractAllBlogsFromDatabase = await Blog.find({});

    if (extractAllBlogsFromDatabase) {
      return NextResponse.json({
        success: true,
        data: extractAllBlogsFromDatabase,
      });
    } else {
      return NextResponse({
        success: false,
        message: "Something went wrong !!! Please try again.",
      });
    }
  } catch (error) {
    console.log(error);
    return NextResponse({
      success: false,
      message: "Something went wrong !!! Please try again.",
    });
  }
}
