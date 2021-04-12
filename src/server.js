const express = require("express")
const server = express()
const routes = require("./routes")
const path = require("path")

// usando template engine, vai ser processado e depois vai ser distribuido o html puro 
server.set('view engine', 'ejs')

// Muda a localização da pasta views
// set = vai setar, configurar alguma coisa
server.set('views', path.join(__dirname, 'views'))

// habilitar arquivos estaticos
// use serve para adicionar configurações no servidor
server.use(express.static("public"))

// usar o req.body
server.use(express.urlencoded({ extended: true }))

// routes
server.use(routes)

server.listen(3000, () => console.log('rodando')) 
// rodando o server na porta 3000 