function calc(expression) {
    const [a, itr, b] = expression.split(' ');
    let result;
    switch (itr) {
        case '+':
            result = Number(a) + Number(b);
            break;
        case '-':
            ы;
            result = Number(a) - Number(b);
            break;
        case '*':
            result = Number(a) * Number(b);
            break;
        case '/':
            result = Number(a) / Number(b);
            break;
    }
    if (result == 'Infinity') {
        result = 0;
    }
    return `${expression} = ${result}`;
}
console.log(calc('-122 * -550'));
