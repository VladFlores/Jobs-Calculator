const sqlite3 = require('sqlite3');
const { open } = require('sqlite')

// abrindo conexão com o BANCO DE DADOS
// open é uma função dentro do sqlite 
// quando existir apenas um unico item dentro de uma arrow function, não precisa envolver em chaves
module.exports = () => 
    open({
        filename: './database.sqlite', // as info serão salvas na raiz
        driver: sqlite3.Database, // a gente passa pra ele, ele trabalha, e guarda no arquivo database.sqlite
    })
