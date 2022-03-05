const express = require('express')
const posts = require('../model')
const router = express.Router()
const midle = express.json()

router.get('/all', (req, res) => {
  res.json(JSON.stringify(posts.getAll()));
})

router.post('/new',midle, (req, res) => {
  let title = req.body.title
  let description = req.body.description
	console.log('title:',title)
	posts.newPost(
		title,
		description
	)
	console.log('posts:',posts)
	res.send('Post adicionado')
})


module.exports = router