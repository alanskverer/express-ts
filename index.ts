import express, {Express, Request, Response}  from "express";
import mongoose from 'mongoose';
import bodyParser from "body-parser";
const port = process.env.PORT || 8080;

const app = express();

// mongoose.connect("mongodb://root:example@localhost:27017")

mongoose.connect('mongodb://root:example@localhost:27017/alan', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    authSource: 'admin', // Specify the authentication database
});

const database = mongoose.connection

database.on('error', (error) => {
    console.log(error)
})

database.once('connected', () => {
    console.log('Database Connected');
})

// Use body-parser middleware to parse JSON data
app.use(bodyParser.json());

app.get("/", (req, res)=> {
    res.json({
        message:"Docker is easy!"
    })
})


app.post('/api/data', (req: Request, res: Response) => {
    const data = req.body;
    res.json(data);
});

app.listen(port, ()=> {
    console.log(`now listening on port ${port}`)
})