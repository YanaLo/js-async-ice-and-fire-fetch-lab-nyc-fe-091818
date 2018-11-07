function fetchBooks() {
  //write fetch request to the Game of Thrones API
  fetch("http://www.omdbapi.com/?apikey=c87ebb66&t=game+of+thrones")
}

function renderBooks(json) {
  const main = document.querySelector('main')
  json.forEach(book => {
    const h2 = document.createElement('h2')
    h2.innerHTML = `<h2>${book.name}</h2>`
    main.appendChild(h2)
  })
}

document.addEventListener('DOMContentLoaded', function() {
  fetchBooks()
})
