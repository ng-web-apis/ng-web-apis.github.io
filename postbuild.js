const fs = require('fs');

const INDEX = 'index.html';
const PATH_TO_INDEX = 'dist/' + INDEX;

copyIndex();

function copyIndex() {
    fs.copyFileSync(PATH_TO_INDEX, INDEX);
}
