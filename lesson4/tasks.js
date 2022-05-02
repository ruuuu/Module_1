//  2-ая задача:

const rain = Math.round(Math.random() * 1);
console.log(rain);

if (rain === 0) {
    console.log('Дождя нет!');
}
if (rain === 1) {
    console.log('Пошёл дождь. Возьмите зонт!');
}


//  3-ая задача:

const countMath = +(prompt('Введите кол-во баллов по математике')); // приводим строку к числу
const countRuslanguage = +(prompt('Введите кол-во баллов по русскому языку'));
const countInformatika = +(prompt('Введите кол-во баллов по информатике'));

if (countMath + countRuslanguage + countInformatika >= 265) {
    console.log('Поздравляю, вы поступили на бюджет!');
} else {
    console.log('Иди подучись');
}



//  4-ая задача:

const countMoney = +(prompt('Сколько вы хотите снять денег?'));
if (countMoney % 100 === 0) {
    console.log('Банкомат сможет выдать запрошенную сумму');
}
else {
    console.log('Банкомат не сможет выдать запрошенную сумму');
}