

import { Request, Response } from 'express';
import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

export const getAllShoes = async (req: Request, res: Response) => {
  try {
    const shoes = await prisma.shoes.findMany();
    res.status(200).json(shoes);
  } catch (error) {
    console.error('Error fetching shoes:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};


