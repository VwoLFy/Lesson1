import express, {Request, Response} from "express";

export const app = express();
const port = 3000;

app.get("/", (req:Request, res: Response) => {
    res.json("Hi!!!")
})

app.listen(port, () => {
    console.log(`Server listening at ${port}`)
})