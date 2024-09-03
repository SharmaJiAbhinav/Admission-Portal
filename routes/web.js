const express = require("express")
const FrontController = require("../controllers/FrontController")
const AdminController = require("../controllers/admin/AdminController")

const route = express.Router()

route.get('/home' ,FrontController.home)
route.get('/about',FrontController.about)
route.get('/',FrontController.login)
route.get('/register',FrontController.register)
route.get('/contact',FrontController.contact)

// insert data
route.post('/userInsert',FrontController.userInsert)

 //admincontroller
  route.get('/admin/dashboard',AdminController.dashboard)
  route.get('/admin/studentDisplay',AdminController.display)
  route.get('/admin/adduser',AdminController.adduser)
// route.get('/', (req, res) =>{
//     res.send('Hello World!')
// })
// route.get('/aboutt' , (req, res) =>{
//     res.send('about page')
// })
  
    module.exports = route