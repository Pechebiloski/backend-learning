import express from 'express'
import cors from 'cors'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

const app = express()

app.use(express.json())
app.use(cors())

app.post('/users', async (request, response) => {
  await prisma.user.create({
  data: {
     email: request.body.email,
     name: request.body.name,
     age: request.body.age
  }
  })
     response.status(201).json(request.body)
})

app.put('/users/:id', async (request, response) => {
  //console.log(request) -> ver como o express
  //monta o objeto da requisição.
  await prisma.user.update({
       where:{
       id: request.params.id
     },
    data:{
       email: request.body.email,
       name: request.body.name,
       age: request.body.age
    }
   })
     response.status(201).json(request.body)
  })

  app.delete('/users/:id', async (request, response) => {
  await prisma.user.delete({
   where: {
    id: request.params.id
   }
  })
     response.status(200).json({ message: 'User deletado com sucesso!'})
})


app.get('/users', async (request, response) => {
    let users = []

    if (request.query.name) {
        users = await prisma.user.findMany({
            where: {
                name: request.query.name,
                email: request.query.email,
                age: request.query.age
            }
        })
    } else {
        users = await prisma.user.findMany()
    }

    response.status(200).json(users)
})

app.listen(3000)


//