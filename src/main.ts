import express from 'express';
import dotenv from 'dotenv';

import cors from 'cors'
import { GetNavbarController } from './contollers/getNavbar.controller';
import { GetHeroController } from './contollers/getHero.controller';
import { GetAboutController } from './contollers/getAbout.contoller';


const app = express();
const port = process.env.PORT || 3001;

dotenv.config();

app.use(cors({
  origin:'*'
}))
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


app.get('/navbar',GetNavbarController);
app.get('/hero',GetHeroController);
app.get('/about',GetAboutController)
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});

export {app}