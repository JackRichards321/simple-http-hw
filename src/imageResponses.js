const fs = require('fs'); // pull in the file system module

const img = fs.readFileSync(`${__dirname}/../client/spongegar.png`);

const getImage = (request, response) => {
  response.writeHead(200, { 'Content-Type': 'image/png' }); // headers
  response.write(img); // content
  response.end(); // close
};

module.exports.getImage = getImage;