const express = require("express");
const cors = require("cors");

const { v4: uuid, validate: isUuid } = require('uuid');

const app = express();

app.use(express.json());
app.use(cors());

const repositories = []; //ARRAY com repositórios

app.get("/repositories", (request, response) => { //APENAS LISTAR OS REPOSITORIOS
  return response.json(repositories);
});

app.post("/repositories", (request, response) => { //CRIA o repositorio
  const {title, url, techs} = request.body
  //

  const repository = {
    id: uuid(),
    title,
    url,
    techs,
    likes: 0,
  }

  repositories.push(repository)
  //Sempre preciso definir as variaveis que recebo com o request
  // sempre retornar uma REPONSE como JSON e usar a variavel definida
  return response.json(repository)
});

app.put("/repositories/:id", (request, response) => { // Altera os campos title. url e techs.
  //Foi retornado o objeto Likes com a quantidade antiga, ainda não entendi pq não podia apenas não passar ele
  const {id} = request.params
  const {title, url, techs} = request.body
  
  const repositoryIndex = repositories.findIndex(repositorie => repositorie.id === id)

  if (repositoryIndex < 0) {
    return response.status(400).json({error: 'Repositório não existe'})
  }

  const repository = {
    id,
    title,
    url,
    techs,
    likes: repositories[repositoryIndex].likes,
  }
  repositories[repositoryIndex] = repository

  return response.json(repository)

});

app.delete("/repositories/:id", (request, response) => {
  //Escolhe o ID e da uma SPLICE tirando do array. Se nao existir o ID retorna um error 400
  const {id} = request.params
  const repositoryIndex = repositories.findIndex(repositorie => repositorie.id === id)

  if (repositoryIndex < 0) {
    return response.status(400).json({error: 'Repositório não existe'})
  }

  repositories.splice(repositoryIndex, 1)

  return response.status(204).send()

});

app.post("/repositories/:id/like", (request, response) => { //Apenas adiciona ao like USANDO POST
  const {id} = request.params

  const repositoryIndex = repositories.findIndex(repositorie => repositorie.id === id)

  if (repositoryIndex < 0) {
    return response.status(400).json({error: 'Repositório não existe'})
  }

  repositories[repositoryIndex].likes++

  return response.json(repositories[repositoryIndex])
});

module.exports = app;
