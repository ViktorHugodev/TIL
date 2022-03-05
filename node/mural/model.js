module.exports = {
	posts: [
		{
			id: 'suhda',
			title: 'Primeiro post',
			description: 'Testando o mural de posts',
		},
		{
			id: 'dsda',
			title: 'segundo post',
			description: 'Testando o mural de APIPOSTS',
		},
	],
  
  getAll() {
    return this.posts
  },
  
  newPost(title,description) {
    this.posts.push({
      id:generateId(),
      title,
      description
    })
  }
};

const generateId = () => {
  return Math.random().toString(36).substring(2, 9)
}