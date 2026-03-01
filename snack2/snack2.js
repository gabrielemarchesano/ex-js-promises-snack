/* Snack 2

Crea la funzione lanciaDado() che restituisce una Promise che, dopo 3 secondi, genera un numero casuale tra 1 e 6. Tuttavia, nel 20% dei casi, il dado si "incastra" e la Promise va in reject.

*/

const lanciaDado = () => {
  return new Promise((resolve, reject) => {
    console.log("Lancio il dado...");
    setTimeout(() => {
      if(Math.random() < 0.2){
        reject("Il dado si è incastrato")
      }
      const risultato = Math.floor(Math.random() * 6) + 1
      resolve(risultato)
    }, 3000)
  })
}

lanciaDado()
  .then(numero => console.log(`E' uscito il numero ${numero}`))
  .catch(error => console.error(error))