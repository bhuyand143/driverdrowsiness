const express = require('express');
const app = express();
const mongoose = require('mongoose')
// const helmet = require('helmet')
const dotenv = require('dotenv')
const authRoute = require('./routes/auth');
// const morgan = require('morgan')
// const userRoute = require('./routes/users')
// const authRoute = require('./routes/auth')
// const postRoute = require('./routes/posts')
// const conversationRoute = require('./routes/conversations')
// const messagesRoute = require('./routes/messages')
// const multer = require('multer')
// const path = require('path')
const cors = require('cors');

dotenv.config()

mongoose.connect(process.env.MONGO_URL)
.then(()=>console.log("DB connection successful"))
.catch((err)=>console.log(err))
app.use(cors());
app.use(express.json());
app.use("/api/auth",authRoute);


app.listen(8800,()=>{
    console.log("Backend server is ready and running");
})