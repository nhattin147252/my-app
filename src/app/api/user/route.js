import clientPromise from "@/app/lib/mongodb";


export async function GET() {
  try {
    const client = await clientPromise;
    const db = client.db('ShopMeo');
    const collection = db.collection('thongtin');


    const data = await collection.find({}).toArray();


    return Response.json({ data });
  } catch (error) {
    console.log("RRR", error);
    return Response.json({ error });
  }
}

