const express = require('express');
const path = require('path')
const apiRouter = require('./routes/api')


const PORT = 3333

const app = express()

app.use('/api', apiRouter)
app.use('/',express.static(path.join(__dirname, 'public')))


app.listen(PORT, () => {
	console.log('Servidor rodando na porta:', PORT);
});


