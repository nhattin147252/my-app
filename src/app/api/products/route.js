import clientPromise from "@/app/lib/mongodb";


export async function GET() {
  try {
    const client = await clientPromise;
    const db = client.db('ShopMeo');
    const collection = db.collection('product');


    const data = await collection.find({}).toArray();


    return Response.json({ data });
  } catch (error) {
    return Response.json({ error });
  }
}

// export async function GET(req) {
//     try {
//         const id = req.query.id;
//         if (!id) {
//             return Response.json({ error: 'id is required' });
//         }
//         const client = await clientPromise;
//         const db = client.db('ShopMeo');
//         const collection = db.collection('product');
//         const product = await collection.findOne({_id: new ObjectId(id) });
//         if (!product) {
//             return Response.json({error: 'Product not found'});
//         }
//         return Response.json({ product });
//     } catch (error) {
//         return Response.json({ error: error.message });
//     }
// }