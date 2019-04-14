import { add } from './math';

const x = 2;
const y = 5;

const answer = function() {
  return { x, y, answer: add(x, y)};
};

const sleep = async () => {
  return new Promise((res, rej) => {
    setTimeout(() => {
      res();
    }, 1000);
  });
}

const asyncTest = async () => {
  await sleep();
}

export {answer, asyncTest};

//export {answer};