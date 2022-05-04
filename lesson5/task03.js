const reverseString = (str) => {
    let reversStr = str;
    //let arraySymbls = reversStr.split("");
    //console.log(reversStr.split("")); // ['П', 'р', 'и', 'в', 'е', 'т', ' ', 'м', 'и', 'р']
    //console.log(arraySymbls.reverse()); // 

    return reversStr.split("").reverse().join("");

};



const resultReverseString = reverseString('Привет мир');
console.log(resultReverseString);