//import "@babel/polyfill";
import "core-js/modules/es6.promise";
import "core-js/modules/es6.array.iterator";
import {answer} from './computed';
import { Person } from './person';

const message = 'Hello webpack';

console.log('message:', message);

const result = answer();
console.log('add two numbers:', result.answer);

document.getElementById('main-content').innerText = result.x + '+' + result.y +' = ' + result.answer;

console.log(ENV_IS_DEVELOPMENT);
console.log(ENV_IS);
console.log('process.env.NODE_ENV:', process.env.NODE_ENV);

const tony = new Person('tony');
tony.showName();

if (ENV_IS_DEVELOPMENT && module.hot) {
  module.hot.accept();
}