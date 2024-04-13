import express, {Request, Response} from 'express';
import morgan from 'morgan';
import cors from 'cors'


const app = express();

app.use(express.json())
app.use(cors())
app.use(morgan('tiny'))


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