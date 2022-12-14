

require('dotenv').config()
const express = require('express');
const sequelize = require('./db')
const PORT = process.env.PORT || 6000;
const models = require("./models/models")
const cors = require('cors')
const fileUploads = require('express-fileupload')
const router = require('./routes/index')
const errorHandler = require("./middleware/ErrorHandlingMiddleware")
const path = require('path')

const app = express()
app.use(cors())
app.use(express.json())
app.use(express.static(path.resolve(__dirname, 'static')))
app.use(fileUploads({}))
app.use('/api', router)



//Ошибки
app.use(errorHandler)




const start = async () => {
    try{
        await sequelize.authenticate()
        await sequelize.sync()
        app.listen(PORT, () => console.log(`Server started on port ${PORT}`))
    } catch (e) {
        console.log(e)
    }
}

start()