import { getCollection } from "@/lib/mongo";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const col = await getCollection("rb-academy-leads");
    const data = await col.find({}).sort({ created_at: -1 }).toArray();
    return NextResponse.json({ data });
  } catch (err) {
    console.error("[MONGO ERROR]", err);
    return NextResponse.json(
      { message: "Failed to fetch leads" },
      { status: 500 },
    );
  }
}

export async function POST(request) {
  try {
    const body = await request.json();
    const col = await getCollection("rb-academy-leads");
    await col.insertOne({
      name: body.name,
      mobile: body.mobile,
      class: body.class,
      message: body.message,
      created_at: new Date(),
    });
    return NextResponse.json({ message: "Lead added successfully" });
  } catch (err) {
    console.error("[MONGO ERROR]", err);
    return NextResponse.json(
      { message: "Failed to add lead" },
      { status: 500 },
    );
  }
}
