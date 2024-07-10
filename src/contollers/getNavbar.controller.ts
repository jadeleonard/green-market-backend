import { PrismaClient } from "@prisma/client";
import { Response,Request } from "express";
const prisma = new PrismaClient();


export const  GetNavbarController =  async(req:Request,res:Response) : Promise<void> => {


try {
    const response = await prisma.navbarcontent.findMany()
    if(!response){
        throw new Error("Error fetching")
    } 
    res.json(response)
} catch (error:any) {
    console.log(error)
    res.status(501).json({error:"Internal Server"})
    
}
}