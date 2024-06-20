import express from 'express';
import dotenv from 'dotenv';
import { getAllShoes } from './contollers/getShoes.Controller'
import { getUsers } from './contollers/getUsers.Controller'
import {createUsers} from './contollers/createUsers.Controller'
import cors from 'cors'
const app = express();
const port = process.env.PORT || 3001;

dotenv.config();

app.use(cors({
  origin:'*'
}))
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/shoes', getAllShoes);
app.get('/users', getUsers);
app.post('/createuser',createUsers) 

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
