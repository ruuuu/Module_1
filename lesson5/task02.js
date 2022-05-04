const replaceFirstStringToUpperCase = (mystring) => {
    let editString = mystring;

    //console.log('editString[0] = ', editString[0]);
    //console.log('editString[0] === editString[0].toUpperCase(): ', editString[0] === editString[0].toUpperCase());

    if (editString[0] === editString[0].toUpperCase()) {
        console.log('первый символ с большой буквы');
        editString = editString.toLowerCase();
    }
    else {
        console.log('первый символ с маленькой буквы');
    }

    return editString;

};

const result = replaceFirstStringToUpperCase('Привет Мир');
console.log('res ', result);

