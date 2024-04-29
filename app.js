const express = require('express')
const app = express()
const port = process.env.PORT || 3000
const env = require('dotenv').config()
require('./src/db/mongoose')
app.use(express.json())

const userRouter = require('./src/routers/user')
const patientRouter = require('./src/routers/patient')
const assistantRouter = require('./src/routers/assistant')


app.use(userRouter)
app.use(patientRouter)
app.use(assistantRouter)
app.use((error, req, res, next) => {
    return res.send({ status: error.status, message: error.message, code: error.code, stack: error.stack })
})

app.listen(port, () => {
    console.log('Server is running')
})





