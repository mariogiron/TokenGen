# @mariogironm/tokengen - Token Generator

![Versión](https://img.shields.io/badge/npm-v2.5.0-blue.svg)
[![install size](https://packagephobia.now.sh/badge?p=@mariogironm/tokengen)](https://packagephobia.now.sh/result?p=@mariogironm/tokengen)


<!-- ![](logo.png) -->


* * *

Generates random character strings with different symbols or numbers. 


### Download & Installation

```shell 
$ npm install @mariogironm/tokengen
```

### Code Demo

```javascript 

let tokengen = require('@mariogironm/tokengen')

let token = tokengen({
    length: 16, // default 8
    chars: true, // default true
    numbers: false, // default true
    symbols: true, // default true
    exclude: ['a', '/'] // default []
})

```

### Autor

*   Mario Girón
