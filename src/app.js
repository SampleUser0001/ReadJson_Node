'use strict'

const fs = require('fs')

const jsonObject = JSON.parse(fs.readFileSync('./input.json', 'utf8'))
let result = {}

jsonObject.list.forEach((obj) => {
  result[obj.id] = obj
})

fs.writeFileSync('./output.json', JSON.stringify(result))
