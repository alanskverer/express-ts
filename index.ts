import express, {Express, Request, Response}  from "express";
const port = 8000;

const app = express();

app.get("/", (req, res)=> {
    res.send("HELLO FROM EXPRESS + TS!")
})

app.listen(port, ()=> {
    console.log(`now listening on port ${port}`)
})