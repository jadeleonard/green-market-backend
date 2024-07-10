import express from 'express';
import dotenv from 'dotenv';

import cors from 'cors'
import { GetNavbarController } from './contollers/getNavbar.controller';
const app = express();
const port = process.env.PORT || 3001;

dotenv.config();

app.use(cors({
  origin:'*'
}))
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


app.get('/navbar',GetNavbarController);

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
