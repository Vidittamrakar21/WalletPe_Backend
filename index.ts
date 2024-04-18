import express, {Request, Response} from 'express';
import morgan from 'morgan';
import cors from 'cors'
import mongoose from 'mongoose';
import dotenv from 'dotenv';
dotenv.config();
//@ts-ignore
import apirouter from './routes/test'

const app = express();

app.use(express.json())
app.use(cors())
app.use(morgan('tiny'))

main().catch(err => console.log(err));

async function main() {
    await mongoose.connect(`mongodb+srv://vidit:${process.env.dbpass}@cluster0.2votuvn.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`);
    console.log("Database Connected");
  }


app.use('/check', apirouter);

app.get('/', async (req:Request , res:Response)=>{
    try {

        res.json({"message": "Server is breathing"})
        
    } catch (error) {
        res.send(error)
    }
})



app.listen(8080, ()=>{
    console.log("server started")
})