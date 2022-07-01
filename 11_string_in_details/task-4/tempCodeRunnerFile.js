
//1 - 'sdfsdggdthfgsdlklklsdlklklsdsd'
//2 - 'sdfsdggdthfgsdlklklsdlklklsdsd'
// create loop while with search()
// search index=>1.slice((search index +2.lengt) , 1.lengt)
//index+1

//return number 



function countOccurrences(firstString, secondString) {
    let i = 0;
    while (firstString.length > secondString.length) {
        indexOfSearch = firstString.search(secondString);
        firstString.slice(indexOfSearch + secondString.length);

        if (indexOfSearch === -1) {
            break;
        }
        i += 1;
    }
    return i;
}
const string1 = 'asasasas';
const string2 = 'as';


console.log(countOccurrences(string1, string2));