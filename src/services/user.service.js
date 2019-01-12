export default {
  login,
  logout,
  getAll,
  profileMe,
  profilePut
}

function authHeader () {
  // return authorization header with jwt token
  let user = JSON.parse(localStorage.getItem('user'))

  if (user && user.token) {
    return { 'Authorization': 'Bearer ' + user.token }
  } else {
    return {}
  }
}

function authHeader2 () {
  // return authorization header with jwt token
  let user = JSON.parse(localStorage.getItem('user'))

  if (user && user.token) {
    return { 'Authorization': 'Bearer ' + user.token, 'Content-Type': 'application/json' }
  } else {
    return {}
  }
}

function login (email, password) {
  const requestOptions = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ email, password })
  }

  return fetch(`http://localhost:8081/user/login`, requestOptions)
    .then(handleResponse)
    .then(user => {
      // login successful if there's a jwt token in the response
      if (user.token) {
        // store user details and jwt token in local storage to keep user logged in between page refreshes
        localStorage.setItem('user', JSON.stringify(user))
      }
      return user
    })
    .then(storeaccountinfo)
}

function profilePut (picture, firstname, lastname) {
  const requestOptions = {
    method: 'PUT',
    headers: authHeader2(),
    body: JSON.stringify({ picture, firstname, lastname })
  }

  return fetch(`http://localhost:8081/user/me`, requestOptions)
    .then(handleResponse)
    .then(console.log('works'))
    .then()
}

function storeaccountinfo () {
  const requestOptions = {
    method: 'GET',
    headers: authHeader()
  }
  return fetch(`http://localhost:8081/user/me`, requestOptions)
    .then(handleResponse)
    .then(accountinfo => {
      localStorage.setItem('accountinfo', JSON.stringify(accountinfo))
    })
}

function logout () {
  // remove user from local storage to log user out
  localStorage.removeItem('user')
  localStorage.removeItem('accountinfo')
}

function getAll () {
  const requestOptions = {
    method: 'GET',
    headers: authHeader()
  }

  return fetch(`http://localhost:8081/user/me`, requestOptions).then(handleResponse)
}

function profileMe () {
  const requestOptions = {
    method: 'GET',
    headers: authHeader()
  }

  return fetch(`http://localhost:8081/user/me`, requestOptions).then(handleResponse)
}

function handleResponse (response) {
  return response.text().then(text => {
    const data = text && JSON.parse(text)
    if (!response.ok) {
      if (response.status === 401) {
        // auto logout if 401 response returned from api
        logout()
        location.reload(true)
      }

      const error = (data && data.message) || response.statusText
      return Promise.reject(error)
    }

    return data
  })
}
