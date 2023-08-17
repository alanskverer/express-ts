import express, {Express, Request, Response} from "express";
import mongoose, {HydratedDocument} from 'mongoose';
import bodyParser from "body-parser";
import logger from "./src/configs/logger/logger";
import {IUser, User} from "./src/models/User";
import 'dotenv/config'
import {initializeMongoConnection} from "./src/configs/db/mongo";
import {userRoute} from "./src/routes/userRoute";
import { routes } from './src/routes';



const port = process.env.PORT || 8080;

const app = express();

// Use body-parser middleware to parse JSON data
app.use(bodyParser.json());

//db
 initializeMongoConnection()

//routes
app.use('/', routes);


// app.get("/", (req, res) => {
//     res.json({
//         message: "Docker is easy!"
//     })
// })


//
//
// app.get("/users/new", (req, res) => {
//     res.send("user new form")
// })

//
// app.get("/save", async (req, res) => {
//     const user: HydratedDocument<IUser> = new User({
//         name: Date.now().toString(),
//         email: "aa@gmail.com",
//     })
//
//
//     try {
//         await user.save();
//     } catch (e) {
//         console.log(e)
//     }
//
//     res.json({
//         message: "Docker is easy!"
//
//     })
// })
//
//
// app.post('/api/data', (req: Request, res: Response) => {
//     const data = req.body;
//     res.json(data);
// });
//

app.listen(port, () => {
    logger.info(`server listening on ${port}`)
})