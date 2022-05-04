const calculate = (generalSum, goodsCount, promocode) => {
    let sum = generalSum; // изначальная  стоиомость корзины


    if (goodsCount > 10) {
        sum = sum * 0.97;
        //console.log('первая проверка: sum = ', sum);
    }

    if (generalSum > 30000) {
        sum = sum * 0.95;
        //console.log('вторая проверка: sum = ', sum);
    }

    if (promocode === "METHED") {
        sum = sum * 0.9;
        //console.log('третья проверка: sum = ', sum);
    }

    if (promocode === "G3H2Z1" && sum > 2000) {
        sum = sum * 0.9;
        //console.log('четвертая проверка: sum = ', sum);
    }

    return sum;
};

const resultSum = calculate(30000, 12, "G3H2Z1");
console.log('resultSum = ', resultSum);