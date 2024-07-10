import { PrismaClient } from "@prisma/client";
import { Request,Response } from "express";

const prisma = new PrismaClient();

export const GetHeroController = async(req:Request,res:Response) =>{


    try {
        const response = await prisma.herocontent.findMany();
        if(!response){
            throw new Error("Error");
        }
        res.status(201).json(response)
    } catch (error) {
        res.status(501).json({error:"error"})
    }
}   