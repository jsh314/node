const exp   = require('constants')
const express   = require('express')
const app       = express()

app.use(express.json())
app.use(express.urlencoded({ extended: true}))


//RestAPI
//get,post

//127.0.0.1:port/
app.get('/', (req, res) => {
    res.send('hello world thank you');
})

app.get('/test', (req, res) => {

    let jsonSample = {
        id:"20240872",
        name:"조성호"
    }
    res.send(jsonSample);
})

app.post('/sendPost', (req, res) => {

    console.log('Recv data:', req.body)

    res.send("OK");
})
//서버 시작 
app.listen(3000, () => {
    console.log('sample server start');
})