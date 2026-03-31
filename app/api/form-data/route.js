import { NextResponse } from "next/server";
import { MongoClient } from "mongodb";

const URI =
  "mongodb+srv://rbiithyd_db_user:xL88bVN9AYpGmS1o@cluster0.af10wzt.mongodb.net/rbiit?retryWrites=true&w=majority&appName=Cluster0";
const COLLECTION = "rb-academy-leads";

const client = new MongoClient(URI);

export async function GET() {
  try {
    await client.connect();
    const db = client.db();
    const data = await db
      .collection(COLLECTION)
      .find({})
      .sort({ created_at: -1 })
      .toArray();

    return NextResponse.json({ data });
  } catch (err) {
    console.error("[MONGO ERROR]", err);
    return NextResponse.json(
      { message: "Failed to fetch leads" },
      { status: 500 },
    );
  } finally {
    await client.close();
  }
}
