import { ObjectId } from "mongodb";
import clientPromise from "../../../lib/mongodb";


export async function GET(request,{ params }) {
  const {id} = await params;
 
try {
  const client = await clientPromise;
  const db = client.db('ShopMeo');
  const collection = db.collection('product');
  const product = await collection.findOne({ _id: new ObjectId(id) });


  if (!product) {
    return Response.json({ message: 'Product not found' }, { status: 404 });
  }


  return Response.json({ product });

} catch (error) {
  console.error(error);
  return Response.json({ error }, { status: 500 });
}
}
