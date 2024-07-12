import prisma from "../lib/prisma";
import { Request,Response } from "express";



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