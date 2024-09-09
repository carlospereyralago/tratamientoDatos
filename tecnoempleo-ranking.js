(async() => {
  const fs = require('fs/promises')
  const file = await fs.readFile('tecnoempleo.json', 'utf8')
  const data = JSON.parse(file)
  
  const offers = data.map(offers => {
    offers.cvsInscritosEnElProceso = parseInt(offers.cvsInscritosEnElProceso.trim());// Eliminar espacios y convertir a número
    return offers
  })
 
  offers.sort((a, b) => b.cvsInscritosEnElProceso - a.cvsInscritosEnElProceso)
 
  fs.writeFile('tecnoempleo-ranking.json', JSON.stringify(offers, null, 2))

})()
