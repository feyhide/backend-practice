const names = require('./names')
//console.log(names)

const sayName = require('./function')

const items = require('./items');

sayName(names.fahad)
sayName(names.hamza)
sayName(items.singlePerson.name)
sayName(items.items[0])
sayName(items.items[1])
