//export module
console.log('export module');
const shippingCost = 10;
const cart = [];

console.log('Start fetching');
const dataFetch = fetch('https://jsonplaceholder.typicode.com/users ');
console.log('Finish fetching');

export const addToCart = function (product, quantity) {
  cart.push({ product, quantity });
  console.log(`${quantity} ${product}s were added to the cart.`);
};
const totalExport = 10000;
const totalQuantity = 99999;
const prductsGap = 8888;

export { prductsGap, totalExport, totalQuantity as tq };
console.log(cart);

export default function (product, quantity) {
  cart.push({ product, quantity });
  console.log(`${quantity} ${product}s were added to the cart.`);
}
