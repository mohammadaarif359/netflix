const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')
const userRoute = require('./route/UseRoute')

const app = express();
app.use(cors())
app.use(express.json())

mongoose.connect("mongodb+srv://shahid:shahid@cluster0.zbodk.mongodb.net/netflix?authSource=admin&replicaSet=atlas-hspesf-shard-0&readPreference=primary&ssl=true",{
    useNewUrlParser:true,
    useUnifiedTopology:true
}).then(()=>{
    console.log('db connected')
})

app.use('/api/user',userRoute)

app.listen(5000,()=>{
    console.log('api run on port 5000')
})