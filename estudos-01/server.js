import express from 'express'

const app = express()

app.get('/users', (request, response) => {
    response.send('ok, deu bom')
} )

app.listen(3000)