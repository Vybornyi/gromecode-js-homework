
function splitText(text, num) {
    if (typeof (text) !== 'string') {
        return null;
    }
    if (num === undefined){
        num = 10;
    }
    const resArr = [];
    let startPositiom = 0;
    while (true) {
        let chunk = text.substr(startPositiom, num);
        if (chunk.length === 0) {
            break;
        }     
        resArr.push(chunk[0].toUpperCase() + chunk.slice(1));
        startPositiom += num;
    }
    return resArr.join('\n');
}


//1.[sdaf,fgds,dsfs]
console.log(splitText('dsfsdfs wesfg sdfwsgsd kjsdjk sdkfjk'));
