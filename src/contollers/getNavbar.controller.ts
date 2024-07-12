import prisma from "../lib/prisma";
import { Response,Request } from "express";



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