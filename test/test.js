/**
 * 
 */

/* eslint-env mocha */
/* eslint-disable handle-callback-err */
/* eslint-disable dot-location */

const assert = require('assert')
const request = require('supertest')

const app = require('../src/app')

describe('The Nodejs Demo App', () => {
    it('handles a GET request to /api', (done) => {
        request(app)
            .get('/api')
            .end((err, res) => {
                assert(res.body.msg.indexOf('Demo App') !== -1)
                done()
            })
    })

    it('handles a GET request to /api/osInfo', (done) => {
        request(app)
            .get('/api/osInfo')
            .end((err, res) => {
                assert(res.body.msg.indexOf('Hostname:') !== -1)
                done()
            })
    })
})
