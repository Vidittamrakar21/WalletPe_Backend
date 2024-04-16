import express, {Request, Response} from 'express';
import morgan from 'morgan';
import cors from 'cors'
//@ts-ignore
import apirouter from './routes/test'

const app = express();

app.use(express.json())
app.use(cors())
app.use(morgan('tiny'))

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