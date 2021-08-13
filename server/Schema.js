const mongoose = require('mongoose')
// momgoose required to establish connection between mongodb and nodejs

mongoose.connect('127.0.0.1', {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
}).then(() => {
    console.log('Database is connected')
}).catch((err) => {
    console.log(err)
})

const MenuSchema = new mongoose.Schema({

    // name: String,
    // age: Number,
// address: String
name:{
type:String

} ,
Master_menu :{
type:String,
short_code:String,
sale_price:Number,
categories:String,
required:true
},
Categories:{
type:String,
description:String
},
food:{
type:String,
active:true,
required:true
}

})

const Menu = mongoose.model('MENU', MenuSchema)
module.exports = Menu
