const express = require("express");
const app = express();
const pool = require("./db");

app.use(express.json()) // -> req.body


//ROUTES//

//get all todos

//get a todo

//create a todo

//update a todo

//delete a todo

app.listen(5000, () => {
    console.log("server is listening on port 5000");
});
