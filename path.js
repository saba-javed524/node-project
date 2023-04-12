const path = require('path');

const fileLocation = path.join(__dirname, __filename);
console.log(fileLocation);

const baseName = path.basename(fileLocation);
console.log(`Base Name is ${baseName}`);

const fileExtension = path.extname(baseName);
console.log(`Extension is ${fileExtension}`);