const { Console } = require('console')
const { readFile, readFileSync, writeFileSync } = require('fs')


console.log('Start')
readFile('./content/first.txt', 'utf8', (err, result) => {
    if (err) {
        console.log(err)
        return
    }
    const first = result
    console.log(first)

    readFile('./content/second.txt', 'utf-8', (err, result) => {
        if (err) {
            console.log(err)
            return
        }
        const second = result
        console.log(second)
    })
})
console.log('finished')