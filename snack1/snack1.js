/* Snack 1

Ottieni il titolo di un post con una Promise.

Crea una funzione getPostTitle(id) che accetta un id e restituisce una Promise che recupera il titolo di un post dal link https://dummyjson.com/posts/{id}

*/

const id = 1;

fetch(`https://dummyjson.com/posts/${id}`)
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.error(error));