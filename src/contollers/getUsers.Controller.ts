import { PrismaClient } from "@prisma/client";
import { Request,Response } from "express";


const prisma = new PrismaClient();




export const getUsers = async(req:Request,res:Response) =>{
        try {
            const response  = await prisma.user.findMany();
            res.status(200).json(response);

        } catch (error) {
            console.log(error)
            res.status(500)
        }
}