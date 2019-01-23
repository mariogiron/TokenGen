let tokengen = require('./index')

let token = tokengen({
    chars: true,
    symbols: false,
    exclude: ['a']
})
console.log(token)