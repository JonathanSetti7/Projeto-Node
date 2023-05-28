// config inicial
require('dotenv').config()
const express = require('express')
const mongoose = require('mongoose')
const app = express()

// forma de ler JSON / middlewares
app.use(
    express.urlencoded({
        extended: true,
    }),
)

app.use(express.json())

  // Rota POST para usuário enviar para o servidor um novo cadastro de pessoa
  const personRoutes = require('./routes/personRoutes')

  app.use('/person', personRoutes)

// rota inicial / endpoint
app.get('/', (req, res) => {
  // mostrar req

    res.json({ message: 'Oi Express!' })
})

  // geQT7S41DAcTAQ5f
  // mongodb+srv://jonathansetti7:<password>@cluster0.kphxfbi.mongodb.net/?retryWrites=true&w=majority

// entregar uma porta
const DB_USER = process.env.DB_USER
const DB_PASSWORD = encodeURIComponent(process.env.DB_PASSWORD)

mongoose
  .connect(`mongodb+srv://${DB_USER}:${DB_PASSWORD}@cluster0.kphxfbi.mongodb.net/?retryWrites=true&w=majority`)
.then(() => {
  console.log('conectamos ao mongoDB!')
  app.listen(3000)
})
.catch((err) => console.log(err))





 