const { parse } = require('path');
const url = require('url');

const parsedURL = url.parse('https://nodejs.org/api/?month=january', true);

console.log(parsedURL);
console.log(parsedURL.protocol);
console.log(parsedURL.host);
console.log(parsedURL.pathname);
console.log(parsedURL.query);
console.log(parsedURL.query.month);