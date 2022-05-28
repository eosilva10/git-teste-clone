const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.status(200).send({message: 'ESSE É UM REPOSITÓRIO CLONADO'})
});

app.get('/ola', (req, res) => {
    res.status(200).send({message: 'SOU A ROTA OLÁ!'})
});

app.listen(4001, () => {
    console.log('-- APP INICIANDO NA PORTA 4001 --')
})