let fs = require('fs')
let dbAutos = JSON.parse(fs.readFileSync('./data/concesionarias.json'))

const autos = {
    index: function(req,res){
        res.set({'content-type':'text/plain;charset=utf-8'})
      res.write('--TODOS NUESTROS MODELOS DE VEHICULOS--')
        res.write('\n')
        dbAutos.forEach(function(concesionarias){
            res.write('\n')
        concesionarias.autos.forEach(function(autos){
        res.write('\n')
        res.write(autos.marca)
       })
        
        })
        res.end()
    }
}
    


module.exports = autos
