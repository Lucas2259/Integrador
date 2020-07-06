let fs = require('fs')
const autos = require('./autosController')
const { EWOULDBLOCK } = require('constants')
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
},
id : function(req,res){
    res.set({'content-type':'text/plain;charset=utf-8'})
    let idMarcas = req.params.marca
    res.write('Estos son los autos disponibles: ' + idMarcas)
    dbMarcas.forEach(function(sucursal){
    sucursal.autos.forEach(function(autos){
    if(autos.marca == idMarcas){
        
        res.write('\n' + ' ' + autos.marca)
        res.write('\n')
        res.write('Modelo:'+ ' ' + autos.modelo)
        res.write('\n')
        res.write('Año: ' +  autos.anio)
        res.write('\n\n')
    }
    
    })
})
res.end()    
     
    
}
}

module.exports = marcas