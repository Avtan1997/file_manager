const cb = require('./services/cb')
const asyncFn = require('./services/async')
const promiceFn = require('./services/promise')
// const writeFn = require('./services/writeFn')
// const path2 = './output.txt'
// writeFn(path2)
const path = './test.txt'
asyncFn(path)
promiceFn(path)
cb(path)
//===================================
//ДЗ
// const path2 = 'output.txt'
// const data = 'Hi'
// //writeFn(path2, data)
