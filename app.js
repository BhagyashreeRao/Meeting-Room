const express = require('express');
const app = express()
const port = 3000;

const db = require('./models/connect')

const meetingRouter = require('./routes/meeting')

app.use(express.urlencoded({extended:false}));
app.use(express.json());


app.use('/api/meeting',meetingRouter)

app.listen(port,()=>{
    console.log(`listening on port ${port}`)
})