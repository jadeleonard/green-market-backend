import { PrismaClient, Prisma } from "@prisma/client";
import { Request, Response } from "express";

const prisma = new PrismaClient();

export const createUsers = async (req: Request, res: Response) => {
    try {
        const { name, email, password ,address} = req.body as {
            name: string;
            email: string;
            password: string;
            address:string
        };

        // Check if all required fields are present
        if (!name || !email || !password || !address) {
            throw new Error("Name, email, or password is missing");
        }

        const response = await prisma.user.create({
            data: {
                name: name,
                email: email,
                password: password,
                address:address
            } as Prisma.UserCreateInput,
        });

        res.status(201).json(response);
        console.log('User Created:', response);
    } catch (error) {
        console.error('Error creating user:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
};
