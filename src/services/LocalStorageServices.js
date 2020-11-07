function setToken(token) {
  localStorage.setItem('ACCESS_TOKEN', token);
}

function getToken() {
  return localStorage.getItem('ACCESS_TOKEN');
}

function removeToken() {
  localStorage.removeItem('ACCESS_TOKEN');
  window.location.reload();
}

function getRole() {
  if (getToken()) {
    return 'member';
  }
  return 'guest';
}

export default {
  setToken,
  getToken,
  removeToken,
  getRole,
};
