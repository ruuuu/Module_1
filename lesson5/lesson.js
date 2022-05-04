// 3 способа объявления функции

const foo = () => { // такую функицю можно вызвать только после ее объявления, предпочитеьный способ

};

const bar = function () { // такую функицю можно вызвать только после ее объявления

};

function bad() { // такую функицю можно вызвать до ее объявления, это устаревший способ 

}

() => { // анонимная фукнция, ее передают в виде колбэк-функции или возвращают из функции

}

const calc = (...arg) => { // передаем rest-оператор ...arg, туда заносим остаточные параметры

    console.log(arg); // выведет массив
}

calc(5, 15, 25, 35, 45, 55, 65); // число + undefined = NaN


const calc1 = (a = 0, b = 0, c = 0) => { // процедура(возвращет значение), а фукнция возвращает, передача парамтеро по умолчанию

    console.log(a + b + c); // 
};

calc1(5, 15, 25);
calc1(5, 15); // c=0;
calc1(5); // b=0, c=0


const calc2 = (a = 0, b = 0, c = 100) => { // чистая фукнция(это фукнция котрпая не зависит от внешних параметров)
    return a + b + c; // если не напишем return то выдаст indefined, тк функция всегда возвращает результат, все что написано после return не выполнится
};

const res1 = calc2(5, 15, 25);
console.log(res1);

const res2 = calc2(5, 15);
console.log(res2);

const res3 = calc2(5);
console.log(res3);

// Детерминированная фукнцяи - функция которая зависит от входных данных


const calc3 = (a = 0, b = 0, c = 100) => {
    const sum = 0;
    if (sum > 50) {
        return; // вернет undefined
    }

    return sum;
};

const pow2 = x => x ** 2; // return  x ** 2; , можно не указывать фигурные скобки и в теле фукнции


const getTotalPrice = money => { //в функции переданные параметры не менятб, нужн делать копию и с ней рабоать!
    let resultMoney = money;
    resultMoney *= 0.95;
    resultMoney -= 100;
    return resultMoney;
};


// функция может принимать др функцию fn-коллбэк:
const getTotalPrice2 = (money, fn) => { // коллбэк- фукнция котрпая принмиается ввиде аргумента в др фукнцию
    let resultMoney = money;
    let resultOtherMoney = fn(resultMoney);
    return resultOtherMoney;

};
const result = getTotalPrice2(1000, (n) => { n * 0.8 });
console.log('result ', result);