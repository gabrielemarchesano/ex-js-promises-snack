/* Snack 1

Ottieni il titolo di un post con una Promise.

Crea una funzione getPostTitle(id) che accetta un id e restituisce una Promise che recupera il titolo di un post dal link https://dummyjson.com/posts/{id}

*/

const getPostTitle = id => {
  return new Promise((resolve, reject) => {
    fetch(`https://dummyjson.com/posts/${id}`)
      .then(response => response.json())
      .then(data => resolve(data.title))
      .catch(error => reject(error));
  })
}

getPostTitle(2)
.then(titlePost => console.log(`Titolo: ${titlePost}`))
.catch(error => console.error(error));

getPostTitle(4)
.then(titlePost => console.log(`Titolo: ${titlePost}`))
.catch(error => console.error(error));
