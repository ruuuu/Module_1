const convertator = (priceEuro) => {
    let price = priceEuro;
    let priceRuble = price * 87.6;
    return priceRuble;
};

const res = convertator(10);
//console.log('res ', res);


