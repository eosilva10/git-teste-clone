const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.status(200).send({message: 'ESSE É UM REPOSITÓRIO CLONADO'})
})

app.listen(4001, () => {
    console.log('-- APP INICIANDO NA PORTA 4001 --')
})