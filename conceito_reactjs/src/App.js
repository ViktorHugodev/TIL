import React, {useState, useEffect} from "react";
import api from './services/api'
import "./styles.css";

function App() {
  const [repositories, setRepositories] = useState([])

  useEffect(() => {
    api.get('/repositories').then(response => {
      setRepositories(response.data)
    })
    
  },[])

  
  async function handleAddRepository() {


    const response = await api.post('repositories', {
      title: 'React JS',
      url: 'https://github.com/ViktorHugodev',
      techs: ['Desafio JS', 'ReactJS'],

      
    })
    const repository = response.data

    setRepositories([...repositories, repository])

  }

  async function handleRemoveRepository(id) {
    await api.delete(`repositories/${id}`)

    setRepositories(repositories.filter(
      repository => repository.id !== id
    ))
  }

  return (
    <div>
      <ul data-testid="repository-list">
        {repositories.map(repository => 
          <li key={repository.id}>

            <ul>
              <li><a href={repository.url}>{repository.title}</a></li>
              <li>Likes: {repository.likes}</li>
            </ul>

            <button onClick={() => handleRemoveRepository(repository.id)}>
              Remover
            </button>

          </li>
          )}
      </ul>

      <button onClick={handleAddRepository}>Adicionar</button>
    </div>
  );
}

export default App;
