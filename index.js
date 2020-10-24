const express = require('express')
const app = express()
const port = process.env.PORT || 3000

const items = [
    { id: 1, name: 'iPhone 12 Pro Max'},
    { id: 2, name: 'Google Pixel 5'}
]

function getItems(){
    return items
}
app.get('/', (req, res) => {
    return res.send('Hello!')
})

app.get('/items', (req, res) => {
    return res.json(getItems())
})


app.listen(port, () => {
    console.log(`Start Express application at ${port}`)
})

module.exports = app