'use strict'; // переключает режим интепретатора на строгий

//  мы всегда используем const  и let

{
    const goodName = 'flat';
    const goodCount = 3;
    const goodCategory = 'shoes';
    const goodPrice = 2000;

    console.log('goodName is', goodName);
    console.log(`generalGoodsPrice is ${goodCount * goodPrice}`);
}


{
    const goodName = 'red hat';
    const goodCount = 6;
    const goodCategory = 'hats';
    const goodPrice = 6000;

    console.log('goodName is', goodName);
    console.log(`generalGoodsPrice is ${goodCount * goodPrice}`);
}


{
    const goodName = 'red hat'; // наименование товара
    const goodCount = 6; // число товара
    const goodCategory = 'hats';
    const goodPrice = 6000;

    console.log('goodName is', goodName);
    console.log(`generalGoodsPrice is ${goodCount * goodPrice}`);

    const good = prompt('Наименование товара');
    console.log(typeof (good));

    const count = +(prompt('Количество товара'));
    if (typeof (count) === Number) {
        console.log(typeof (count));
    } else {
        console.log('Вы ввели некорректные данные');
    }



    const category = prompt('Категория товара');
    //console.log(typeof (category));

    const price = +(prompt('Цена товара'));
    //console.log(typeof (price));

    //console.log(`На складе  ${count} единицы товара  "${good}" на сумму ${price} деревянных`);



}
