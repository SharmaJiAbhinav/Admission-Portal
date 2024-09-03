const express = require('express')
const app = express()
const Port = 3000
const web = require('./routes/web')
const connectDb = require('./db/ConnectDb.js')

//html css set
app.set('view engine', 'ejs')

//css image link
app.use(express.static('public'))


//connect db
connectDb()

app.use(express.urlencoded({ extended:true}));

//routing
app.use('/',web)


////server create
app.listen(Port, () => {
    console.log(`Server start localhost: ${Port}`)
})
   //routeing
//    app.get('/', (req, res) => {
//     res.send('Hello World!')
//    })

//    app.get('/aboutt', (req, res) => {
//     res.send('about page')
//    })