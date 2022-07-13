/**
 * @field {string} id
 * @field {number} price
 * @field {date} dateCreated
 * @field {boolean} isConfirmed
 * @field {date} dateConfirmed
 * @field {string} city
 * @field {string} type
 */
class Order {
  // put your code here
  constructor(price, city, type) {
    this.price = Number(price);
    this.city = String(city);
    this.type = String(type);
    this.ID = String(Math.random().toString(36).substring(2, 9));
    this.dateCreated = new Date();
    this.dateConfirmed = null;
    this.confirmed = Boolean(false);
  }

  checkPrice() {
    return this.price > 1000;
  }

  confirmOrder() {
    if (!this.confirmed) {
      this.confirmed = true;
      this.dateConfirmed = new Date();
    }
  }

  isValidType() {
    if (this.type === 'Buy' || this.type === 'Sell') {
      return true;
    }
    return false;
  }
}
const order1 = new Order('1005', 'Kyiv', 'Buy');
console.log(order1);

console.log(Math.random(0, Infinity));
