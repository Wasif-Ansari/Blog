import { MongoClient, Db } from "mongodb";

const uri: string = process.env.MONGODB_URI || "";
const client = new MongoClient(uri);

export const connectDB = async():
Promise<Db> => {
  await client.connect();
  console.log("Connected to DB...");
  return client.db();
}
