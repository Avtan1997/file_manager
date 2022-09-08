const fs = require('fs');


function cb (path) {
    fs.readFile(path, 'utf8', (err, data) => {
      if (err) {
            console.error(err);
            return;
        }
        console.log(data);
    })
}

module.exports = cb;
