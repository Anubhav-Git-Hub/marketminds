const express = require('express');
const mysql = require('mysl');
const cors = require('cors');

const app = express();

app.use(cors());

const db = mysql.createConnection({
    host: "localhost",
    user:"root",
    password:""
}
)

app.listen(8081, () => {
    console.log("Listening.........");
} )