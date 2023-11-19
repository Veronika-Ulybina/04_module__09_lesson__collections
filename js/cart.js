'use strict';

const cart = {
  items: [],
  totalPrice: 0,
  count: 0,
  add(name, price, amount = 1) {
    this.items.push({name, price, amount});

    this.increaseCount(amount);
  },
  increaseCount(num) {
    this.count = this.items.reduce((acc, item) => acc + num, 0);
  },
  calculateItemPrice() {
    return this.items.reduce((acc, item) => acc + item.price * item.amount, 0);
  },
  clear() {
    this.items = [];
    this.totalPrice = 0;
    this.count = 0;
  },
  print() {
    console.log(JSON.stringify(this.items));
  },
};

Object.defineProperty(cart, 'totalPrice', {
  get() {
    return this.calculateItemPrice();
  },
});

cart.add('Apples', 40);
cart.add('Bananas', 100);
cart.add('Oranges', 50);

cart.print();
// cart.clear();
