export const user = {
  firstName: 'John',
  lastName: 'Doe',
  getFullName() {
    return `${this.firstName} ${this.lastName}`;
  },
  setFullName(fullName) {
    const arrOfName = fullName.split(' ');
    user.firstName = arrOfName[0];
    user.lastName = arrOfName[1];
  },
};
