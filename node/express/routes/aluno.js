const express = require('express');
const router = express.Router();

let alunos = [
	{id: 0, nome: 'Victor'},
	{id: 1, nome: 'Leandra'},
	{id: 2, nome: 'Malu'},
	{id: 3, nome: 'Rogerio'},
]

router.get('/alunos', (req, res) => {

	res.send(JSON.stringify(alunos));
});

router.get('/aluno', (req, res, next) => {
	
	console.log('Req.body:',req.body)
	let aluno = alunos[req.body.id]
	if (aluno) {
		res.send(aluno)
	} else {
		next()
	}
	
});
router.get('/aluno', (req, res) => {
	
	console.log('Req.query:',req.query)
	let aluno = alunos[req.query.id]
	if (aluno) {
		res.send(aluno)
	} else {
		res.send('Aluno não encontrado')
	}
	
});
router.get('/aluno/all', (req, res) => {

	res.send(alunos)
});

router.get('/aluno/:id', (req, res) => {
	console.log('Req.params:', req.params)
	let aluno = alunos[req.params.id]
  if (aluno) {
		res.send(aluno)
	} else {
		res.send('Aluno não encontrado')
	}
});

module.exports = router