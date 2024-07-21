const express = require('express');
const cors = require('cors');
const blogRouter = require('./route/blogRouter')
const port = 5000;
const path = require('path');

const app = express();

const jsonParser = express.json();
const bodyParser = express.urlencoded({ extended: true });


app.use(cors());
app.use(jsonParser);
app.use(bodyParser);
app.use(express.static("public"));



app.use('/blogs', blogRouter);



app.use((req, res, next) => {
    res.status(404).send("Not Found!");
})

app.use((err, req, res, next) => {
    res.status(500).send("Something Broke Somewhere");
})


app.listen(port, () => {
    console.log(`Server Listening on port: ${port}`);
})