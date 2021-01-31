import express, { response } from 'express'

const app = express()

app.get('/users', (request, response) => {
    return response.json(['Hello World', 'Test'])
})

app.listen(3333)