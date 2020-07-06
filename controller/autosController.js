let fs = require('fs')
let dbAutos = JSON.parse(fs.readFileSync('./data/concesionarias.json'))

const autos = {
    index: function(req,res){
        res.set({'content-type':'text/plain;charset=utf-8'})
      res.write('--TODOS NUESTROS MODELOS DE VEHICULOS--')
        res.write('\n')
        dbAutos.forEach(function(concesionarias){
        concesionarias.autos.forEach(function(autos){
        res.write('\n')
        res.write('Marca: ' + ' ' + autos.marca)
        res.write('\n')
        res.write('Modelo : ' + ' ' + autos.modelo)
        res.write('\n')
        res.write('Año : ' + ' ' + autos.anio)
        res.write('\n')
        res.write('Color : ' + ' ' + autos.color)
        res.write('\n\n\n')
       })
       res.send()
        })  
    }
}

    


module.exports = autos
