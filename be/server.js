require("dotenv").config();
const express = require('express'); //commonjs
const apiRoutes = require('./src/routes/api');
const connection = require('./src/config/database');
// const cookieParser = require('cookie-parser');
var cors = require('cors');
const { app, server } = require("./src/config/socket");

const port = process.env.PORT || 8888;

//config cors
app.use(
    cors({
        origin: "http://localhost:5173",
        credentials: true,
    })
);

//config req.body
app.use(express.json()) // for json
app.use(express.urlencoded({ extended: true })) // for form data

//config cookie-parser
// app.use(cookieParser());

//khai báo route
app.use('/v1/api/', apiRoutes);

(async () => {
    try {
        //using mongoose
        await connection();

        server.listen(port, () => {
            console.log(`Backend Nodejs App listening on port ${port}`)
        })
    } catch (error) {
        console.log(">>> Error connect to DB: ", error)
    }
})()
