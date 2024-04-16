function fetchUserData() {
  const username = document.getElementById('username').value
  const apiUrl = `https://api.github.com/users/${username}`

  fetch(apiUrl)
    .then((response) => response.json())
    .then((data) => {
      displayUserCard(data)
    })
    .catch((error) => {
      console.error('Error:', error)
      alert(
        'Failed to fetch user data. Please check the username and try again.'
      )
    })
}

function displayUserCard(userData) {
  const userCard = document.getElementById('user-card')
  userCard.innerHTML = `
        <img src="${userData.avatar_url}" alt="${userData.login}'s Avatar">
        <h2>${userData.name || userData.login}</h2>
        <p>Username: ${userData.login}</p>
        <p>Public Repos: ${userData.public_repos}</p>
        <p>Public Gists: ${userData.public_gists}</p>
        <p>Profile Created: ${new Date(userData.created_at)
          .toISOString()
          .slice(0, 10)}</p>
    `
  userCard.classList.remove('hidden')
}
