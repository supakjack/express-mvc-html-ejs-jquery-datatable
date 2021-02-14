const express = require('express')
const path = require('path')
const app = express()

require('dotenv').config()

/** set view engine */
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs')

/** set config */
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(express.static(path.join(__dirname, 'public')))

/** set routers */
app.use('/auth', require('./routers/auth.router'))

/** error handling */
app.use((req,res,next)=>{
    res.render('notFound')
})

/** set app listen */
const { PORT, HOST } = process.env
app.listen(PORT, () => console.log('run on ' + HOST + ':' + PORT))
