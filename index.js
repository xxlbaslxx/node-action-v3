const express = require('express')
const app = express()
const port = process.env.PORT || 3000

app.get('/', (req, res) => {
    return res.send('Hello!')
})

app.listen(port, () => {
    console.log(`Start Express application at ${port}`)
})

module.exports = app