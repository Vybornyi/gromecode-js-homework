const filterNames = (arr, text) =>
    arr.filter(word => 
        (word.length > 5 && word.includes(text)));



let a = 'zhenia';
console.log(filterNames(['john', 'sdfskl', 'asfsdfsdfya', 'Alex', 'Bob'], 'ya'));