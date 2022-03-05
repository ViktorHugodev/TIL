document.addEventListener('DOMContentLoaded', () => {
  updatePosts()
})

const updatePosts = () => {
  fetch('http://localhost:3333/api/all')
  .then((response) => response.json())
  .then(res => {
    let postsElements = ''
    
    let posts = JSON.parse(res)
    posts.forEach((post) => {
      let postsElement = `<div class="card mb-4">
      <div id="${post.id}"class="card-header">
        <h5 class="card-title">${post.title}</h5>
      </div>
      <div class="card-body">
        <div class="card-text">
          ${post.description}
        </div>
      </div>
    </div>`
      postsElements += postsElement
    })
    document.getElementById('posts').innerHTML = postsElements
  })
}

const newPost = () => {
  let title = document.getElementById('title').value
  let description = document.getElementById('description').value
  
  let post = {title, description}
  
  const options = {
    method: 'POST',
    headers: new Headers({'Content-Type': 'application/json'}),
    body: JSON.stringify(post)
  }
  
  fetch('http://localhost:3333/api/new', options).then(response => {
    console.log(response)
    updatePosts()
    document.getElementById('title').value = ''
    document.getElementById('description').value = ''
  
  })
}