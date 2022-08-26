'use strict';

const cart = {
  items: [],
  count: 0,
  calcItemPrice: 0,
  get totalPrice() {
    return this.calculateItemPrice();
  },
  add(product, price, amount = 1) {
    const newItem = {
      product,
      price,
      amount,
    };

    this.items.push(newItem);
    this.increaseCount();
  },
  increaseCount() {
    this.count = this.items.reduce((acc, {amount}) => acc + amount, 0);
    console.log(this.count);
  },
  calculateItemPrice() {
    const itemIndex = this.items.length - 1;
    const item = this.items[itemIndex];
    this.calcItemPrice += (item.price * item.amount);

    return this.calcItemPrice;
  },
  clear() {
    this.items = [];
    this.totalPrice = 0;
    this.count = 0;
  },
  print() {
    const cartPrint = JSON.stringify(this.items);

    console.log(`Ваша корзина состоит из ${cartPrint}.
    Общая стоимость: ${this.totalPrice}`);
  },
};

cart.add('Мороженое', 5, 20);
cart.add('Кофе', 8, 35);
cart.add('Чай', 6, 50);

cart.print();
