const names = require('./names')
const path = require('path')

const filePath = path.join('\content', 'test.txt')
console.log(filePath)

const base = path.basename(filePath)
console.log(base)
console.log(path.sep)

const absolute = path.resolve(__dirname, 'content', 'test.txt')
console.log(absolute)