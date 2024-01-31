// import module
import cloneDeep from './node_modules/lodash-es/cloneDeep.js';

import {
  addToCart,
  prductsGap as pg,
  totalExport,
  tq,
} from './shoppingCart.js ';
// import * as shoppingCart from './shoppingCart.js';
// console.log(shoppingCart);
// console.log(shoppingCart.totalExport);

// console.log('import module');
addToCart('onion', 100);
// console.log(shippingCosts);
// console.log(pg, totalExport, tq);

import add from './shoppingCart.js';
add('tomato', 3000);

// const postRes = await fetch('https://jsonplaceholder.typicode.com/posts');
// const postData = await postRes.json();
// console.log(postData);
// const getLastpost = async function () {
//   const postRes = await fetch('https://jsonplaceholder.typicode.com/posts');
//   const postData = await postRes.json();
//   return { title: postData.at(-1).title, text: postData.at(-1).body };
// };
// const lastPost = getLastpost().then(res => console.log(res));

// console.log(lastPost);
// const lastPost2 = await getLastpost();
// console.log(lastPost2);

// const personalData = (function () {
//   const name = 'John';
//   const surname = 'Smith';
//   const age = 40;
//   const pesel = 84546131664646;
//   const idNumber = 'SD 7802';

//   const introduce = function (univeristy) {
//     console.log(`${name} ${surname} graduated ${univeristy}`);
//   };
//   const createPassword = function () {
//     const password = `${name.slice(-3)}${surname.slice(-2)}${pesel.slice(-5)}}`;
//     console.log(password);
//   };
//   return {
//     name,
//     surname,
//     age,
//     introduce,
//   };
// })();
// console.log(personalData);
// personalData.introduce('AWL');
// personalData.password;
const state = {
  cart: [
    { product: 'bread', quantity: 1 },
    { product: 'pizza', quantity: 2 },
  ],
  user: { Loged: true },
};
const stateClone = Object.assign({}, state);
const stateCloneDeep = cloneDeep(state);
state.user.Loged = false;
console.log(state);
console.log(stateClone);
console.log(stateCloneDeep);
