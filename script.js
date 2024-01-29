// import module
import {
  addToCart,
  prductsGap as pg,
  totalExport,
  tq,
} from './shoppingCart.js ';
// import * as shoppingCart from './shoppingCart.js';
// console.log(shoppingCart);
// console.log(shoppingCart.totalExport);

console.log('import module');
addToCart('onion', 100);
// console.log(shippingCosts);
console.log(pg, totalExport, tq);

import add from './shoppingCart.js';
add('tomato', 3000);
