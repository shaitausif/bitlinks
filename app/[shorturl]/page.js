import { redirect } from "next/navigation"
import clientPromise from "@/lib/mongodb";

export default async function Page({ params }) {
    const shorturl = (await params).shorturl

    const client = await clientPromise;
    const db = client.db("bitlinks")
    const collection = db.collection("url")

    const doc = await collection.findOne({shorturl : shorturl})
    if(doc){
      redirect(doc.url)
    }else{
      redirect(`${process.env.NEXT_PUBILC_HOST}`) 
    }
    return <div>My Post: {url}</div>
  }