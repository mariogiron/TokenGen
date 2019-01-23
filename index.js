let tokengen = ({ length = 8, chars = true, numbers = true, symbols = true }) => {
    if(!chars && !numbers && !symbols) throw new SyntaxError('Debes activar uno de los conjuntos de caracteres')
    let resultChars = ''
    if (chars) resultChars += 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'
    if (numbers) resultChars += '0123456789'
    if (symbols) resultChars += '¡!¿?.,+{}[]/$%&'
    let token = '';
    for (let i = 0; i < length; i++) {
        token += resultChars[Math.floor(Math.random() * resultChars.length)];
    }
    return token;
}

module.exports = tokengen