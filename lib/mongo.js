import "server-only";
import { MongoClient } from "mongodb";

const uri =
  "mongodb+srv://rbiithyd_db_user:xL88bVN9AYpGmS1o@cluster0.af10wzt.mongodb.net/rbiit?retryWrites=true&w=majority&appName=Cluster0";

const client = new MongoClient(uri);
const clientPromise = client.connect();

export async function getCollection(name) {
  const client = await clientPromise;
  return client.db().collection(name);
}
