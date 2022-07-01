
function splitString(text, num = 10) {
    if (typeof (text) !== 'string') {
        return null;
    }
    const resArr = [];
    let startPositiom = 0;
    while (true) {
        let chunk = text.substr(startPositiom, num);
        if (chunk.length > 0 && chunk.length < num) {
            chunk = chunk.padEnd(num,'.');
        }
        if (chunk.length === 0) {
            break;
        }
        resArr.push(chunk.slice(0));
        startPositiom += num;
    }
    return resArr;
}

console.log(splitString('sdfvdv dfvdfz asdgf arsf',20));
console.log(splitString('sdfvdv dfvdfz asdgf arsf'));
console.log(splitString(' ', 11));
console.log(splitString('sdfvd', 3));
console.log(splitString(11, 11));