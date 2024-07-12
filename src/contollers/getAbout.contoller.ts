import prisma from "../lib/prisma";
import { Request,Response } from "express";


export  async function GetAboutController(req:Request,res:Response) {
    try {
        

        const response = await prisma.aboutus.findMany();
        res.status(201).json(response)
    } catch (error) {
        res.status(500).json({error:"Error"})
    }
}