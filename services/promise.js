const fs = require('fs/promises');

function promiseFn (path) {
    fs.readFile(path,  'utf8' )
        .then((data) => console.log(data) )
        .catch(reason => console.log(reason))
}

module.exports = promiseFn;
