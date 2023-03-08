require('dotenv').config()
const path = require("path");
const express = require('express')
const mongoose = require('mongoose')
const UserModel = require('./models/UserModel')

const app = express()
const PORT = process.env.PORT

app.use(express.json())
app.use(express.static(path.resolve(__dirname, 'public')))

app.post('/api/user', async (req, res) => {
    const {name} = req.body
    await UserModel.create({name, date: new Date()})
    res.status(200).send('Success')
})

const connect = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URL)
        await app.listen(PORT, () => console.log(`Server is working in port ${PORT}...`))
    } catch (e) {
        console.log(e)
    }
}

connect()

