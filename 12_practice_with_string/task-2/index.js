function reverseString(string) {
  if (typeof string !== 'string') {
    return null;
  }
  return string.split('').reverse().join('');
}
console.log(reverseString('asfsdssafdsf')); // fsdfassdsfsa

const containsAnyLetter = str => /[a-zA-Z]/.test(str);
console.log(containsAnyLetter('sdf'));
