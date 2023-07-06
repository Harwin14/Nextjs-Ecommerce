import { mongooseConnect } from "@/lib/mongoose";
import { Category } from "@/models/Category";
import { getServerSession } from "next-auth";
import { authOptions, isAdminRequest } from "./auth/[...nextauth]";

export default async function handle(req, res) {
    const { method } = req;
    await mongooseConnect();
    await isAdminRequest(req, res)

    if (method === "GET") {
        res.json(await Category.find().populate("parent"));
    }

    if (method === "POST") {
        const { name, parentCategory, properties } = req.body;
        const CategoryDoc = await Category.create({
            name,
            properties,
            parent: parentCategory || undefined,
        });
        res.json(CategoryDoc);
    }

    if (method === "PUT") {
        const { name, parentCategory, properties, _id } = req.body;
        const CategoryDoc = await Category.updateOne(
            { _id },
            {
                name,
                properties,
                parent: parentCategory || undefined,
            }
        );
        res.json(CategoryDoc);
    }

    if (method === "DELETE") {
        const { _id } = req.query;
        await Category.deleteOne({ _id });
        res.json("Ok");
    }
}
