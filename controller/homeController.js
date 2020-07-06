let fs = require('fs')
let dbHome = JSON.parse(fs.readFileSync('./data/concesionarias.json'))


const homePage = {
  home: function (req, res) {
    res.set({
      'content-type': 'text/plain;charset=utf-8'
})
    res.write('--------------------BIENVENIDOS A MOTORS DH.--------------------')
    res.write('\n')
    res.write('\n\n\nESTAS SON TODAS NUESTAS SUCURSALES DISPONIBLES:')
    res.write('\n')
    dbHome.forEach(function(sucursal){
      res.write('\n')
      res.write(sucursal.sucursal)
      res.write('\n\n')

    })
    res.send()
  },

}


module.exports = homePage

//arrayConcesionarias.forEach((concesionaria)=>{
//  concesionaria.autos.forEach((auto)=>{