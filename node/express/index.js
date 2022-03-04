const express = require('express');
const path = require('path');
const aluno = require('./routes/aluno');
const app = express();

app.use(express.json())
app.use(express.urlencoded())

app.use('/api', aluno)

app.get('/', (req, res) => {
	res.send('Hello world');
});







const port = 5000;
app.listen(port, () => {
	console.log(`Servidor rodando na porta ${port}`);
});
