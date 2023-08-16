import express, {Express, Request, Response}  from "express";
const port = process.env.PORT || 8080;

const app = express();

app.get("/", (req, res)=> {
    res.json({
        message:"Docker is easy!"
    })
})

app.listen(port, ()=> {
    console.log(`now listening on port ${port}`)
})