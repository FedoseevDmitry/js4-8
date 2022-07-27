const cart = {
  items: [],
  totalPrice: 0,
  count: 0,
  get () {
    this.calculateItemPrice();

    return this.totalPrice;
  },
  add (product, price, amount = 1) {
    const newItem = {
      product,
      price,
      amount,
    };

    this.items.push(newItem);
    this.increaseCount();
  },
  increaseCount () {
    this.count = this.items.reduce((acc, {amount}) => acc + amount, 0);
    console.log(this.count);
  },
  calculateItemPrice () {
    this.calcItemPrice += (this.items[this.items.length - 1].price
    * this.items[this.items.length - 1].amount);

    return this.calcItemPrice;
  },
  clear () {
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