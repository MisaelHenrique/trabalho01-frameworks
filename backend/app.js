const express = require('express');
const bodyparser = require('body-parser');
const http = require('http');
const port = 3000;
const authRouter = require('./routes/auth');


const app = express();

app.use(bodyparser.json());
app.use(authRouter);


/*
* Configuração de rotas
* GET, PUT, POST, DELETE
*/
app.get('/', (req, res) => {
    res.send('Meu Express esta rodando...');
})

/*
* Configuração da porta
*/
const server = http.createServer(app);
server.listen(port, () => {
    console.log(`Express is running on port ${port}`);
})