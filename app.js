const express = require('express'); 
const { connectDB } = require('./database');
const { studentRouter, teacherRouter, homeWorksRouter } = require('./router/index');
require('dotenv').config()
const app = express()
const port = process.env.PORT || 3000;

app.use(express.json());
connectDB();



app.listen(port, () => {
    console.log(`Server ${port} numaralı portta ayağa kalktı.`)
    app.use('/api',studentRouter);
    app.use('/api',teacherRouter);
    app.use('/api',homeWorksRouter);
})  