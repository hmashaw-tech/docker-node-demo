/**
 * 
 */

const express = require('express')
const app = express()

app.get('/', (req, res) => {
    res.send('Hello World! - Version 1.0.0')
})

const server = app.listen(8000, () => {
    console.log('Demo app listening ...')
})
