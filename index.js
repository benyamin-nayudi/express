// require = function to import something
const express = require('express');
const cors = require('cors');
const logger = require('./middleware/logger');
const router = require("./routes/blog.routes")

const app = express();

app.use(express.json()); // parse json data into objects
app.use(express.urlencoded()); // parse form inputs
app.use(cors());
app.use(logger)

app.use("/blogs", router)


app.get('/', (req, res) => {
    res.json({message: "welcome to my blog api"})
})


app.listen(8000, () => {
    console.clear();
    console.log('server is running on port 8000');
})



