/**
 * 
 */

const os = require('os')

const express = require('express')
const app = express()

app.get('/api', (req, res) => {
    res.send({ msg: 'Demo App - Version 1.0.0'})
})

app.get('/api/osInfo', (req, res) => {
    const frame1 = 'Hostname: ' + "'" + os.hostname() + "'" + ', '
    const frame2 = 'Load_Avg: ' + "'" + os.loadavg() + "'" + ', '
    const frame3 = 'Network_Interfaces: ' + JSON.stringify(os.networkInterfaces())
    data = `{ ${frame1} ${frame2} ${frame3}`
    res.send({ msg: data })
})

module.exports = app
