import { mongooseConnect } from "@/lib/mongoose";
import { hash } from "bcryptjs";
import User from "@/models/User";
import mongoose from "mongoose";

export default async function handler(req, res) {
    const { method } = req;
    await mongooseConnect().catch((err) => res.json(err));
    if (method === "POST") {
        if (!req.body)
            return res.status(400).json({ error: "Data is missing" });
        const { fullName, email, password } = req.body;
        const userExists = await User.findOne({ email });

        if (userExists) {
            return res.status(409).json({ error: "User Already exists" });
        } else {
            if (password.length < 6)
                return res
                    .status(409)
                    .json({ error: "Password should be 6 characters long" });

            const hashedPassword = await hash(password, 12);

            User.create(
                {
                    fullName,
                    email,
                    password: hashedPassword,
                },
                (error, data) => {
                    if (
                        error &&
                        error instanceof mongoose.Error.ValidationError
                    ) {
                        for (let field in error.errors) {
                            const msg = error.error(field).message;
                            return res.status(409).json({ error: msg });
                        }
                    }
                    const user = {
                        emal: data.email,
                        fullName: data.fullName,
                        _id: data._id,
                    };
                    return res.status(201).json({
                        success: true,
                        user,
                    });
                }
            );
        }
    } else {
        res.status(405).json({ error: "Method Not Allowed" });
    }
}
