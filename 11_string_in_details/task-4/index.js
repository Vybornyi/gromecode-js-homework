
//1 - 'sdfsdggdthfgsdlklklsdlklklsdsd'
//2 - 'sdfsdggdthfgsdlklklsdlklklsdsd'
// create loop while with search()
// search index=>1.slice((search index +2.lengt) , 1.lengt)
//index+1

//return number 



function countOccurrences(firstString, secondString = '') {
    if (secondString.length === 0) {
        return null;
    }
    return firstString.split(secondString).length - 1;

}


const string1 = 'sdgd.fg.asasas.asg.bfxnas fdsasfdvdas';
const string2 = '';



console.log(countOccurrences(string2));
console.log(string2.matchAll(string1));