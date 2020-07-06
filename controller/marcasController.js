let fs = require('fs')
let dbMarcas = JSON.parse(fs.readFileSync('./data/concesionarias.json'))

const marcas = {
index: function(req,res){
    res.set({'content-type':'text/plain;charset=utf-8'})
    res.write('--TODOS NUESTROS MODELOS DE VEHICULOS--')
    res.write('\n')
    dbMarcas.forEach(function(concesionarias){
    concesionarias.autos.forEach(function(autos){
        res.write('\n')
        res.write(autos.marca)
    })
    res.send()
   })
}
}

module.exports = marcas