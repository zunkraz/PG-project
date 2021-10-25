const path = require('path')
const fs = require('fs')


const controllers = {}
//Esto está diseñado para exportar todos los controladores desde controllers/index.js
//sin emabrgo las funciones deben declararse dentro de controllers/functions
fs.readdirSync(path.join(__dirname, '/functions'))
.filter(f => f.slice(-3) === '.js')
.forEach(f => {
    f = f.slice(0,f.length-3)
    controllers[f]= (require(path.join(__dirname,'/functions',f)))
})

module.exports = {
    ...controllers
}