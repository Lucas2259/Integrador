let fs = require('fs')
let dbSucur = JSON.parse(fs.readFileSync('./data/concesionarias.json'))

const sucursale = {
    index: function(req,res){
        res.set({'content-type':'text/plain;charset=utf-8'})
        res.write('----EN ESTA DIRECCIÓN ESTÁN TODAS LAS SUCURSALES----\n')
        dbSucur.forEach(function(sucursales){
      res.write('---------------------------')
      res.write(sucursales.sucursal)
      res.write('---------------------------')
      res.write('\n')
      res.write(sucursales.direccion)
      res.write('\n')  
      res.write(sucursales.telefono)
      res.write('\n')
       }) 
        res.send()
    },
   id : function(req,res){
        res.set({'content-type':'text/plain;charset=utf-8'})
        let idSucursales = req.params.sucursal
        dbSucur.forEach(function(sucursal){
        if (sucursal.sucursal == idSucursales){
            res.write('\n')
            res.write('Bienvenido/a a la sucursal'  + ' ' + sucursal.sucursal)
            res.write('\n')
            res.write('Direccion: ' + sucursal.direccion)
            res.write('\n')
            res.write('Telefono: ' + sucursal.telefono)
            res.write('\n')
            sucursal.autos.forEach(function(auto){
            res.write('\n')
            res.write('Marca: ' + auto.marca)
            res.write('\n')
            res.write('Modelo: ' + auto.modelo)
            res.write('\n')
            res.write('Color: ' + auto.color)
            res.write('\n')
            res.write('Anio : ' + auto.anio)
            res.write('\n\n')
            })
        }
        })
        res.end('No se encontro esa sucursal en nuestra base de datos')

        
      },
    
  
  
      




    }

module.exports = sucursale






