const fs = require('fs'); // pull in the file system module

const index = fs.readFileSync(`${__dirname}/../client/client.html`);
const page2 = fs.readFileSync(`${__dirname}/../client/client2.html`);

const getIndex = (request, response) => {
  response.writeHead(200, { 'Content-Type': 'text/html' }); // headers
  response.write(index); // content
  response.end(); // close
};

const getPage2 = (request, response) => {
  response.writeHead(200, { 'Content-Type': 'text/html' }); // headers
  response.write(page2); // content
  response.end(); // close
};

module.exports.getIndex = getIndex;
module.exports.getPage2 = getPage2;
