document.addEventListener('DOMContentLoaded', init, false);

function init() {
  if (navigator.onLine === true) {
    const messageElem = document.getElementById('page-message')
    messageElem.innerHTML = 'Yay!'
    const statusElem = document.getElementById('page-status')
    statusElem.innerHTML = 'online'
    const textElem = document.getElementById('page-text')
    textElem.innerHTML = 'Hit refresh to read more!'
  }
}