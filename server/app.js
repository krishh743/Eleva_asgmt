const express = require('express')
const app = express();
const cors = require('cors')
const Menu = require('./Schema')
app.use(cors())
//we can update more data in json format
const arr = [
    {
        name: "Krishna kumar"
    },
    {
        address: "Lucknow"
    }]

app.get('/test', (req, res) => {
    console.log('request')
    res.status(200).send(arr)

})
// uses two parameter for request send and response recieve
app.post('/postdat', async (req, res) => {
    const {name, age, address} = req.body
    const MenuData = new Menu({
        name: name,
        age: age,
        addresss: address
    })
    await MenuData.save()

})

app.get('/getdat', (req, res) => {
    const data = Menu.findById({_id: id})
    res.status(200).send(data)
})
// so here is start server on port 8080
app.listen(8080, () => {
    console.log('server stared is 8080')
})
