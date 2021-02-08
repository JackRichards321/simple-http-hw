const hello = 'Hello World';

const getTimeString = () => {
  const d = new Date();
  const dateString = `${d.getHours()}:${d.getMinutes()}:${d.getSeconds()}`;
  return dateString;
};

const getTime = (request, response) => {
  response.writeHead(200, { 'Content-Type': 'text/plain' }); // headers
  response.write(getTimeString()); // content
  response.end(); // close
};

const getHello = (request, response) => {
  response.writeHead(200, { 'Content-Type': 'text/plain' }); // headers
  response.write(hello); // content
  response.end(); // close
};

module.exports.hello = hello;
module.exports.getTimeString = getTimeString;
module.exports.getHello = getHello;
module.exports.getTime = getTime;
