function User(name, age) {
  this.name = name;
  this.age = age;
}
User.prototype.sayHi = function () {
  console.log(`Hi, I am ${this.name}`);
};
User.prototype.requestNewPhoto = function () {
  console.log(`New photo request was sent for ${this.name}`);
};
User.prototype.setAge = function (age) {
  this.age = age;
  if (age >= 25) {
    console.log(`New photo request was sent for ${this.name}`);
  } else if (age < 0) {
    return false;
  } else if (age > 0 < 25) {
    return age;
  }
};

const user1 = new User('Niu', 27);
user1.sayHi(user1);
user1.requestNewPhoto(user1);
user1.setAge(26);
console.log(user1);
