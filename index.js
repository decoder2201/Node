// const app = require('./app');
// console.log(app);
// console.log(app.x);
// console.log(app.y);
// console.log(app.z());
// const arr = [2,3,5,4,8];
// arr.filter((item)=>{
//     console.log(item);
// })
// let result = arr.filter((item)=>{
     //  return item>=4;
     //  return item==4;
// })
// console.warn(result);


// const http = require('http');
// function dataControl(req,resp){
//     resp.write("<h1>Hello,This is sagar</h1>");
//     resp.end();
// }
// http.createServer(dataControl).listen(4500);


// const colors = require('colors');
// console.log("package.json".green);
// console.log("package.json".yellow);

const chalk = require('chalk');
const error = chalk.bold.red;
const warning = chalk.hex('#FFA500'); // Orange color

console.log(error('Error!'));
console.log(warning('Warning!'));



