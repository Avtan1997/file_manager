const fs = require('fs/promises');

async function asyncFn(path) {
    try {
        const data = await fs.readFile(path, { encoding: 'utf8' });
        console.log(data);
    } catch (err) {
        console.log(err);
    }
}

module.exports = asyncFn;
