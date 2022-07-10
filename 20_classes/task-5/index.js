/* eslint-disable max-classes-per-file */
class User {
  constructor(id, name, sessionId) {
    this._id = String(id);
    this._name = String(name);
    this._sessionId = String(sessionId);
  }

  get id() {
    return this._id;
  }

  get name() {
    return this._name;
  }

  get sessionId() {
    return this._sessionId;
  }
}

class UserRepository {
  // put your code here
  constructor(users) {
    this._users = Object.freeze(users);
  }

  get users() {
    return this._users;
  }

  getUserNames() {
    const res = this._users.map(el => Object.entries(el)[1][1]);
    return res;
  }

  getUserIds() {
    const res = this._users.map(el => Object.entries(el)[0][1]);
    return res;
  }

  getUserNameById(userId) {
    console.log(this._users.find(el => el._id === userId));
    return this._users
      .filter(el => el.id === userId)
      .map(el => el.name)
      .pop();
  }
}
const user = new User('1dgfdg', 'Tom', 'session-id');
const user2 = new User('2', 'Bom', 'session-id');

const arrayOfUser = new UserRepository([user]); // option 1

console.log(arrayOfUser.getUserNameById('1dgfdg'));
