const assert = require('assert')
const request =  require('supertest')
const app = require('../index')

describe('Validate setting the test', () => {
    it('should be ok', () => {
        assert.ok(true)
    })
})

describe('GET "/"', () => {
    it('respond with Hello!', (done) => {
        request(app).get('/').expect('Hello!', done)
    })
})

describe('GET "/items"', () => {
    it('respond with list of items', (done) => {
        let want = [
            { id: 1, name: 'iPhone 12 Pro Max'},
            { id: 2, name: 'Google Pixel 5'}
        ]
        request(app).get('/items').expect(want, done)
    })
})