/*
import express, {Request, Response} from 'express'
const app = express()
const port = 3000

const bodyMiddle = express.json();
app.use(bodyMiddle);

type typeMessage = {id: number, message: string}
type typeMessages = Array<typeMessage>

const messages: typeMessages = [
    {
        id: 1,
        message: 'Hello World!!!'
    }
]

app.get('/messages', (req:Request, res:Response) => {
    if(!req.query.message) res.status(200).json(messages.map(mes => mes.message))
    const foundedMessage: typeMessages = messages.filter(mes => mes.message.indexOf(req.query.message as string) > -1)
    if (!foundedMessage) res.sendStatus(404);
    res.status(200).json(foundedMessage.map(mes => mes.message))
})
app.get('/messages/:id', (req:Request, res:Response) => {
    const foundedMessage: typeMessage = messages.find(mes => mes.id === +req.params.id);
    if (!foundedMessage) res.sendStatus(404);
    res.status(200).json(foundedMessage.message)
})
app.post('/messages', (req:Request, res:Response) => {
    if(!req.body.message) res.status(404)
    messages.push({
        id: messages.length + 1,
        message: req.body.message
    })
    res.status(204).json(messages.map(mes => mes.message))
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})*/

export function multi(a: number,b: number): number {
    return a * b
}

let a = 5;
let b = 5;

console.log( multi(a,b) )