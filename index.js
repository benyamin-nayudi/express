// require = function to import something
const express = require('express');
const cors = require('cors')
const app = express();

app.use(express.json()); // parse json data into objects
app.use(express.urlencoded()); // parse form inputs
app.use(cors());

app.use(cors())

app.get("/" , (req, res) => {
    // res.send('hii this is home route')
    res.json({data: [1,2,3]})
})

app.get('/user', (req, res) => {
    res.json({
        name: "benyamin",
        id: 1,
        email: "harchi.com"
    })
})

app.get('/users', (req, res) => {
    res.json([
        {
            name: "benyamin",
            id: 1,
            email: "harchi.com"
        },
        {
            name: "benyamin",
            id: 1,
            email: "harchi.com"
        }
    ])
})

app.get("/wiki/:something", (req, res) => {
    console.log(req.params)
})

app.get("/search", (req, res) => {
    console.log(req.query)
})

app.post('/createUser', (req, res) => {
    const data = req.body;
    console.log(data);

    // call the database to store the data
})

app.listen(8000, () => {
    console.log('server is running on port 8000');
})



