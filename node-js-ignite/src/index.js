import express from 'express'

const app = express()
const port = 3334

app.use(express.json())

app.get('/courses',(req, res) =>{
  const {query} = req
  console.log('query', query)
  return res.json(["Curso 1", "Curso 2", "Curso 3"])
})

app.post('/courses',(req, res) =>{
  const {body} = req
  console.log('body', body)
  return res.json(["Curso 1", "Curso 2", "Curso 3"])
})

app.put('/courses/:id',(req, res) =>{
  const params = req.params
  console.log('params', params)
  return res.json(["Curso 6", "Curso 2", "Curso 3"])
})
app.delete('/courses/:id', (req, res) =>{
  return res.json(["Curso 6", "Curso 2"])
})
app.listen(port,  () => console.log(`Running on port ${port}`))