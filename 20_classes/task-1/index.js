class User {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  sayHi() {
    console.log(`Hi, I am ${this.name}`);
  }

  requestNewPhoto() {
    console.log(`New photo request was sent for ${this.name}`);
  }

  setAge(age) {
    this.age = age;
    if (age >= 25) {
      console.log(`New photo request was sent for ${this.name}`);
    } else if (age < 0) {
      return false;
    } else if (age > 0 < 25) {
      return age;
    }
  }

  static createEmpty() {
    return new User('', null);
  }
}

const user1 = new User('Jon', 23);
user1.requestNewPhoto();
const user2 = User.createEmpty();
console.log(user2);
