//1 Load .env file
require('dotenv').config() //loads .env file contents into process .env by defaults.

//2 import express
const express =  require('express')

// 6 import cors
const cors = require('cors')

// 8 import db
const db = require('./DB/connection')

// 9
const applicationMiddleware = require('./Middlewares/ApplicationMiddleware')
const router = require('./Routes/router')



//3 application creation using express
const pfServer = express()

// 7 Middleware config
pfServer.use(cors())
pfServer.use(express.json())
// pfServer.use(applicationMiddleware)
pfServer.use(router)
// export image to frontend
pfServer.use('/uploads',express.static('./uploads'))

//4 define Port
const PORT = 3000 || process.env.PORT

//5 app run
pfServer.listen(PORT,()=>{
    console.log("Project fair server started at PORT : "+PORT);
     
})

pfServer.get('/',(req,res)=>{
    res.send("Welcome to pfServer")
})

