const text = require('./textResponses.js');

const getHelloJSON = (request, response) => {
  const helloJSON = {
    message: text.hello,
  };
  const stringMessage = JSON.stringify(helloJSON);

  response.writeHead(200, { 'Content-Type': 'application/json' }); // headers
  response.write(stringMessage); // content
  response.end(); // close
};

const getTimeJSON = (request, response) => {
  const timeJSON = {
    message: text.getTimeString,
  };
  const stringMessage = JSON.stringify(timeJSON);

  response.writeHead(200, { 'Content-Type': 'application/json' }); // headers
  response.write(stringMessage); // content
  response.end(); // close
};

module.exports.getHelloJSON = getHelloJSON;
module.exports.getTimeJSON = getTimeJSON;
