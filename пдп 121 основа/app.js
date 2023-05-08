
//27 июля
// console.log('привет, ребята!!');  //хотела с вами поздороваться!!!)))

// 1. string строка   'привет, ребята!!'
// 2. number число      45     45.34
// 3. null   пусто    что-то ожидали, но ничего не пришло
// 4. undefined  неопределенно  
// 5. boolean true false





// неизменяемы/константы
// пи = 3.14

// изменяемые
// грушу


// const ageRat = 2;
// console.log(ageRat);

// const ageDog = '15';
// console.log(ageDog);

// let fruit = 'pear';
// fruit = 'apple';
// console.log(fruit);


// let vegetable;

// vegetable = 'potato';
// console.log(vegetable);


// let x = 2;
// let y = '2';


// == - НЕ строгое
// === -  строгое

// console.log( x == y);
// console.log( x === y);


// let x = 2;
// let y = 5;

// let x = 2;
// let y = 5;

// let summ = x + y;
// let difference = x - y;
// let del = x / y; 
// let mult = x * y;
// let ost = x % y;
// let pow = x ** y;

// console.log(summ);
// console.log(difference);
// console.log(del + ' del');
// console.log(mult + ' mult');
// console.log(ost + ' ost');
// console.log(pow + ' pow');

// 10 / 5 = 2
// остаток от деления = 0
// 10 / 3 = 3.33333
// остаток от деления = 1
// целую получившуюся часть (3) умножаем на делитель (3) = получаем 9
// из делимого (10) вычитаем то, что получили (9) = в итоге остаток от деления равен 1






// (x || y) или
// (x && y) и

// console.log(typeof '2');

// alert('Тыкни на меня!');
// confirm('Тыкнешь на меня?');
// let userName = prompt('Введите Ваше имя');
// console.log(userName);

// let userName = prompt('Введите Ваше имя', 'Васенкин Игорь Геннадьевич');
// console.log(userName);


// let userDigit = +prompt('Введите число', '6');
// console.log(userDigit);

// let userDigit = Number(prompt('Введите число', '6'));
// console.log(userDigit);




// >
// >=
// <
// <=

// if(условие) {
//     тело
// }

// if(userDigit > 17) {
//     console.log('проходите!');
// }

// if(userDigit >= 18) {
//     console.log('проходите!');
// }


// if(условие) {
//     тело
// } else {
//     тело, если не прошли условие
// }

// if(userDigit >= 18) {
//     console.log('проходите!');
// } else {
//     console.log('вы слишком малы!');
// }


// if(условие) {
//     тело
// } else if (другое условие){
//     тело
// } else if (другое условие){
//     тело
// } else {
//     тело, если ни одно из условий не подошло (если надо)
// }


// if(userDigit >= 54) {
//     console.log('пара рюмой за наш счет!');
// } else if(userDigit >= 18){
//     console.log('проходите!');
// } else {
//     console.log('вы слишком малы!');
// }



// if(userDigit > 50) {
//    console.log('ура!!');
// } else if ((userDigit > 20) && (userDigit < 30)) {
//     console.log('самый сок!');
// } else {
//     console.log('еще молод!');
// }


// let userNumber = prompt("Введите число");

// if(userNumber == 0) {
//     console.log("Число 0 - нейтральное");
// } else if(userNumber > 0) {
//     // console.log("Число" + ' ' + userNumber + " - Положительное");
//     console.log(`Число ${userNumber} - положительное!`);
// } else {
//     console.log("Число" + userNumber + " -Отрицательное");
// }

// console.log(`если сложить 5 и 7, то получится ${5 + 7}`);


// let userNumber = prompt("Введите число");

// if(userNumber > 0) {
//     console.log("положительное!");
// } else {
//     console.log('не положительное');
// }

//(userNumber > 0) ? console.log("положительное!") : console.log('не положительное'); 


// if(userNumber == 0) {
//     console.log("Число 0 - нейтральное");
// } else if(userNumber == 20) {
//     console.log('В наличии 50 товаров под номеров 20');
// } else if((userNumber == 10) || (userNumber == 15)) {
//     console.log('это 10 или 15');
// } else {
//     console.log('а тут я сижу'); 
// }

// switch (userNumber) {
//     case '0':
//         console.log("Число 0 - нейтральное");
//         break;
//     case '20':
//         console.log('В наличии 50 товаров под номеров 20');
//         break;
//     case '10':
//     case '15':
//         console.log('это 10 или 15');
//         break;
//     default:
//         console.log('а тут я сижу'); 
// }





//29 июля


// while(условие - правда) {
//         выполняться тело
// }


// a++
// a = a + 1
// a-- 
// a = a - 1



// let x = 0;

// while(x < 10) {
//     x++;
//     console.log(x);
// } 

// x = 0
// 0 < 10
// x = 1
// console.log(1);

// 1 < 10
// x = 2
// console.log(2);

// ... 

// x = 10
// 10 < 10
// мы вышли из цикла


// let num = prompt('числоо');

// while( num > 0) {
    // num--;
    // console.log('вот столько циклов');
// }

// console.log('все');


// num = 3
// 3 > 0
// num = 2
// console.log('вот столько циклов');

// 2 > 0
// num = 1
// console.log('вот столько циклов');

// 1 > 0
// num = 0
// console.log('вот столько циклов');

// 0 > 0



//запросить число у пользователя от 1 до 48
//вывести числа от того чтсла, что ввел пользователь до 50

// пример: пользователь ввел 31
// мы выводим в консоль
// 31
// 32
// 33
// 34
// ... 
// 50

// let stop = 50;
// let userDigit = prompt('число от 1 до 48'); 

// while(userDigit <= stop) {
//     console.log(userDigit);
//     // userDigit = userDigit + 1
//     userDigit++;
//     // console.log(userDigit);
// }


//запросить число у пользователя положительное (не больше 100)
//вывести числа от того чтсла, что ввел пользователь до 0


// 31
// 30
// 29
// ... 
// 3
// 2
// 1


// 101

// 
// let userDigit = prompt('число от 1 до 100'); 

// while ((userDigit > 0) && (userDigit <= 100)) {
//     if(userDigit % 2 == 0) {
//         console.log(userDigit);
//     }
//     userDigit--; //0
// }


// do {
//         хотя бы один раз отработает
//         даже если условие ложь, все равно сначал отработает тело
// } while (условие)


// do {
//     console.log(userDigit);
//     userDigit--;
// } while ((userDigit > 0) && (userDigit <= 100))





// for (устанавливаем начальное значение счетчика; условие; манипуляция счетчиком) {
//     тело 
// }

// 1 шаг - проверка
// 2 щаг - если true, то идем в тело, выполняем тело
// 3 шаг - манипуляция с счетчиком   => идем на 1 шаг


// let digit = 0;

// for(let i = 1; i <=12; i++) {
//     digit +=1; 
//     // digit = digit + 1;
//     console.log(digit);
// }


// выести числа от 0 до того, что ввел пользователь
// let digit = prompt('гони число');

// for(let i = 0; i <= digit; i++) {
//     console.log(i);
// }

// digit = 3
// 0 <= 3
// console.log(0);
// i = 1

// 1 <= 3
// console.log(1);
// i = 2

// 2 <= 3
// console.log(2);
// i = 3

// 3 <= 3
// console.log(3);
// i = 4



// let str = 'hello!';
// h e l l o !
// 1 2 3 4 5 6 - символы/элементы   length
// 0 1 2 3 4 5 - индексы
// console.log(str.length); 



// let str = 'очень яблок хочется';
// console.log(str.length); 
// console.log(str[str.length - 1]);
// console.log(str[0]);
// console.log(str[1]);
// console.log(str[2]);
// console.log(str[18]);
// console.log(str[19]);


// 1 шаг - проверка
// 2 щаг - если true, то идем в тело, выполняем тело
// 3 шаг - манипуляция с счетчиком   => идем на 1 шаг

// for(let i = 0; i < str.length; i++) {
//     console.log(str[i]);
// }

// console.log(str[0]); //о
// i = 1
// console.log(str[1]); //ч
// i = 2
// console.log(str[2]); //e
// i = 3
// .. .


// let str = 'очень яблок хочется';
// console.log(str.indexOf('я')); //6
// // console.log(str.indexOf('я')); //6
// console.log(str.indexOf('хоч')); //12
// console.log(str.indexOf('г')); //-1


// let str = 'очень яблок хочется! ОЧЕНЬ!!!';

// for(let i = 0; i < str.length; i++) {
//     console.log(str[i]);
//     if(str[i] === '!') {
//         break;
//     }
// }





// 1) вызываем, когда хотим
// 2) позволяет избежать дубляжа кода (сокращает его)
// 3) создает шаблон, по которому мы можем прогонять разные ситуации
// то есть переиспользование функции
// 4) улучшает читаемость кода


// let firstDigit = 4;
// let secondDigit = 5;

// function sum(a, b) {
//     console.log(a + b);
//     return a + b;  
// }


// sum(firstDigit, secondDigit); //9
// sum(3, 7); //10
// let result = sum(3, 7);
// console.log(result);


// function hi() {
//     console.log('hi');
// }

// hi();




// Написать функцию, которая принимает 2 числа и возвращает -1, 
// если первое меньше, чем второе; 1 – если первое 
// больше, чем второе; и 0 – если числа равны


// function min(firstDigit, secondDigit) {
//     if(firstDigit > secondDigit) {
//         // console.log(`${secondDigit} - минимальное число`);
//         return 1;
//     } else if (firstDigit < secondDigit) {
//         // console.log(`${firstDigit} - минимальное число`);
//         return -1;
//     } else {
//         // console.log(`${firstDigit} и ${secondDigit} - равны`);
//         return 0;
//     } 
// }

// console.log(min(5, 7));
// console.log(min(5, 5));
// console.log(min(7, 5));


//функциб сразу записывают в переменную
// const min = function (firstDigit, secondDigit) {
//     if(firstDigit > secondDigit) {
//         // console.log(`${secondDigit} - минимальное число`);
//         return secondDigit;
//     } else if (firstDigit < secondDigit) {
//         // console.log(`${firstDigit} - минимальное число`);
//         return firstDigit;
//     } else {
//         console.log(`${firstDigit} и ${secondDigit} - равны`);
//     } 
// }

// console.log(min(5, 7));



//есть стрелочные функции
// const min = (firstDigit, secondDigit) => {
//     if(firstDigit > secondDigit) {
//         console.log(`${secondDigit} - минимальное число`);
//         return secondDigit;
//     } else if (firstDigit < secondDigit) {
//         console.log(`${firstDigit} - минимальное число`);
//         return firstDigit;
//     } else {
//         console.log(`${firstDigit} и ${secondDigit} - равны`);
//     } 
// }
    
// console.log(min(5, 7));



// function powFour(digit) {
//    let result = digit ** 4; //81
//    console.log('какая-то шляпа'); //'какая-то шляпа'
//    return result; //возвращаю 81 из функции для манипуляций
//    console.log('какая-то шляпа не прошла');
// }

// // powFour(3); //вызвали функцию
// // console.log(powFour(3)); //законсолили результат работы функции (return)
// let res = powFour(3);//записали в переменную результат работы функции (return)
// console.log(res);





// Преобразовать строку в число
// 1)   Number('4'); //4 число
// 2)   +'4'  //4 число
// let num = '4';
// console.log(+num);
// 3)   let digit = '4';
// console.log(digit * 1);
// console.log(digit / 1);
// 4)   let b = parseInt("015", 10); 
// console.log(b); //15
// 5)   console.log(parseFloat('4.999988585')); //4.999988585



// Преобразовать число в строку
// 1)  String(5)   //'5' строка
// 2)  5.toString()  //'5' строка
// let num = 5;
// num.toString();
// console.log(num.toString());
// 3)  let digit = 5;
// console.log(digit + '');
// 4)  let num = 4.1239988585;
// console.log(num.toFixed(3)); //'4.124'



// let a = parseInt(4.7, 10);
// console.log(a); //4

// let aSecond = parseInt(4.7);
// console.log(aSecond); //4

// let b = parseInt("015", 10); 
// console.log(b); //15

// let c = parseInt("1111", 2);
// console.log(c); //15

// let ex = parseInt("15/?,^*rihowfhifshl", 10);
// console.log('пример ' + ex);

// let d = parseInt("15*3", 10);
// console.log(d); //15

// console.log(15 * 3);   //45
// console.log('15 * 3');   // '15 * 3'
// console.log('15' * 3); //45
// console.log('15' * '3'); //45

// let e = parseInt(15*3, 10);
// // let e = parseInt(45, 10);
// console.log(e);

// let f = parseInt('sth', 10);
// console.log(f);

// let fSecond = parseInt('4sth', 10);
// console.log(fSecond);

// let g = parseInt("F", 16);
// console.log(g); //15

// // 0 1 2 3 4 5 6 7 8 9 10 11 12 13 14 15 
// // 0 1 2 3 4 5 6 7 8 9  A  B  C  D  E  F  

// console.log(parseInt('4.999988585')); //4

// let num = 4.1239988585;
// console.log(num.toFixed(3)); //'4.124'
// console.log(parseFloat(num.toFixed(3)));




// let arr = ['qwe', 34, true, [5, 6, 'rrr'], 'yy'];
// //        // 1      2    3          4        5   - элементы   length
//         //   0      1    2          3        4    - индексы
// console.log(arr);
// console.log(arr.length);
// console.log(arr[0]); //'qwe'
// console.log(arr[1]); //34
// console.log(arr[2]); //true
// console.log(arr[3]); //[5, 6, 'rrr']
// console.log(arr[4]); //'yy'


// let arr = [1, 2, 3, 4, 5];
// let oldCar = ['black', 'lamba', 'sand'];


// setTimeout таймер 
// let arr= ['ww','ww','ww'];

// setTimeout(()=>{
//     for(let i=0;i<arr.length;i++)
//     {
//         console.log(arr[i]);
//     }
// }, 3000);

// console.log(1);
// console.log(2);
// console.log(3);
// console.log(4);

//////////////////////////////////////////////////////////

// function sum(a,b){
//     alert(a+b);
// }
// setTimeout(sum,3000,2,3);

/////////////////////////////////////////////////////////

// Удаляет таймер

// let id=setTimeout(function(){
//     alert('BOOM')},3000);

//     console.log('id timer = '+ id);
    
//     clearTimeout(id);


// setInteval и clearInterval создаёт интервал

// console.log(1);
// console.log(2);
// let time=0;
// let id=setInterval(() => {
//     console.log('TICK');
//     time++;
//     if(time==7){
//         clearInterval(id);
//     }
// }, 1000);
// console.log(3);
// console.log(4);









//29 августа

// const car = {
//     //ключ: значение ключа
//     //свойство: значение свойства
//     //поле: значение поля
//     allColor: 'black',
//     digits: 456,
//     left: true,
//     'name of car': 'lamba',
//     tiresColor: 'black',
//     tires: 'sand',
//     seats: ['left', 'right'],
//     windows: {
//         firstWindow: 'right',
//         secondWindow: 'left'
//     },
//     hi: function() {
//         console.log('hi');
//     },
//     hello() {
//         console.log(`hello, my color is ${this.allColor}`);
//     },
//     changeTiresColor(color) {
//         this.tiresColor = color;
//     }
// }

// console.log(car.allColor); //'black'
// console.log(car.left); //true
// console.log(car['name of car']); //'lamba'
// console.log(car.seats); 
// console.log(car.windows); 

// car.tiresColor = 'green';
// console.log(car.tiresColor); //'green'


// car.changeTiresColor('red');
// car.hi();
// car.hello();
// console.log(car.tiresColor);
// car.year = 2010;
// delete car.tires;
// console.log(car);
// console.log(car['name of car']);

// const newCar = {...car};
// const newCar = {...car, dog: true};
// newCar.allColor = 'red';
// console.log(newCar);
// newCar.hello();



// let arrAnimal = ['home', 'rat', 'black', 'brown', 2, 'Пыня', 1.4];

// let objAnimal = {
//     area: 'home', //ключ(название свойства) : значение ключа (знач св-ва)
//     animal: 'rat',
//     colorAnimal: 'black',
//     colorEyes: 'brown',
//     ears: true,
//     animalName: 'Пыня',
//     age: 1.4,
//     'favourite food': 'cucumbers',
//     parents: {
//             mother: 'крыса',
//             father: 'крыс'
//     },
//     grandparents: ['крыса-бабушка', 'крыса-дедушка'],
//     greet: function() {
//         console.log('привееет!');
//     },
//     hi() {
//         console.log('hi!');
//     },
//     showAnimalName() {
//         console.log(`Это прекрасное имя ${this.animalName}`);
//         console.log(`у моего животного - ${this.animal}`);
//     },
//     increaseAge: function() {
//         // let newAge = this.age + 0.1;  //1.5
//         // console.log(newAge); 
//         // this.age = Number(newAge.toFixed(1)); //num
//         // return this.age;
//         // this.age = this.age + 0.1;

//         this.age = Number(((this.age) + 0.1).toFixed(1));
//     },
//     changeName(newName) {
//         this.animalName = newName;
//     },
//     showInformation() {
//         console.log(this);
//     }

// }

// objAnimal.showAnimalName();
// objAnimal.increaseAge();
// objAnimal.increaseAge();
// objAnimal.increaseAge();
// console.log(objAnimal.age);
// objAnimal.changeName('Милый Пыня');
// objAnimal.showInformation();


// let newAnimal = {...objAnimal};
// newAnimal.animalName = 'Пушистик';
// console.log(newAnimal);
// objAnimal.showAnimalName();
// newAnimal.showAnimalName();

// this - именно у этого объекта 




// const arr = [45, 'fff', 'rrr'];
         //  1     2       3    элементы
         //  0     1       2     индексы
// console.log(arr.length);  //количество элементов = длина массива
// console.log(arr[0]);
// console.log(arr[1]);
// console.log(arr[2]);
// console.log(arr);

// arr[1] = 'eeee';
// console.log(arr);


// const arr = [45, 30, 10];

// for(let i = 0; i < arr.length; i++) {
//     console.log(arr[i]);
// }

// i = 0
// 0 < 3
// console.log(arr[0]);  //45
// i = 1
// 1 < 3
// console.log(arr[1]); //30
// i = 2
// 2 < 3
// console.log(arr[2]); //10
// i = 3
// 3 < 3
// конец


// const arr = [45, 30, 10];

// let sum = 0;

// for(let i = 0; i < arr.length; i++) {
//     // sum += arr[i];
//     sum = sum + arr[i];
//     // sum = 0 + 45  //45
//     // sum = 45 + 30  //75
//     // sum = 75 + 10 //85
// }

// console.log(sum);


// const fruits = ['apple', 'orange', 'pear'];
// fruits.push('pineapple');
// fruits.pop();
// fruits.shift();
// fruits.unshift('grape');
// console.log(fruits);

//join превращает массив в строку
// let stringFruits = fruits.join(', ');
// console.log(fruits);
// console.log(stringFruits);

//split превращает строку в массив
// let str = 'привет, сегодня прекрасная погода, солнце, облака!'
// let strSplit = str.split();
// console.log(strSplit);






// const fruits = ['apple', 'orange', 'pear'];

// let appleFruit = fruits[0];
// let orangeFruit = fruits[1];
// let pearFruit = fruits[2];

//деструктуризация
// let [appleFruit, orangeFruit, pearFruit] = fruits;
// console.log(appleFruit);



//rest-operator
// const fruits = ['apple', 'orange', 'pear', 'pineapple', 'grape'];
// let [appleFruit, orangeFruit, ...otherFruits] = fruits;
// console.log(appleFruit);
// console.log(orangeFruit);
// console.log(otherFruits);


//spread-operator
// console.log(fruits);
// console.log(...fruits);



// console.log(Math);
// console.log(Math.PI);
// let maxDigit = Math.max(45, 67, 90, 5);
// console.log(maxDigit);

// let arr = [45, 67, 90, 5];
// console.log(Math.max(...arr));




// const fruits = ['apple', 'orange', 'pear'];
// // fruits - ссылка на ячейку памяти, где расположен массив

// let newFruits = fruits;
// // такая запись значит, что в newFruits положили ссылку на ячейку памяти,
// // где расположен массив fruits

// newFruits.push('grape');

// console.log(fruits);
// console.log(newFruits);



//при копировании массива НЕОБХОДИМО использовать spread-operator
// const fruits = ['apple', 'orange', 'pear'];
// let newFruits = [...fruits];
// newFruits.push('grape');

// let newFruits = [...fruits, 'grape'];


// console.log(fruits);
// console.log(newFruits);



// let listOfProducts = [
//     {
//         productName: 'картоха',
//         ammount: 8,
//         isBuyed: true
//     },
//     {
//         productName: 'апельсины',
//         ammount: 8,
//         isBuyed: false
//     },
//     {
//         productName: 'молоко',
//         ammount: 8,
//         isBuyed: false
//     },
//     {
//         productName: 'бананы',
//         ammount: 8,
//         isBuyed: true
//     }
// ]

// 1 - перебрать элементы массива, залезть в каждый элементы
// 2 - в каждом элементе (объекте) надо найти значение ключа isBuyed
// 3 - если false, то сначала выводим на экран
// 4 - если true, то позже выводим на экран

// function showProducts(arr) {
//     console.log('Не купили:');
//     for(let i = 0; i < arr.length; i++) {
//         if(arr[i].isBuyed == false) {
//             console.log(arr[i]);
//         }
//     }
//     console.log('Купили:');
//     for(let i = 0; i < arr.length; i++) {
//         if(arr[i].isBuyed == true) {
//             console.log(arr[i]);
//         }
//     }
// }

// showProducts(listOfProducts);


// const arr = [1, 2, 3, 4, 5];
// console.log(arr.reverse());


// const fruits = ['apple', 'orange', 'pear'];

// fruits.forEach((fruit, index) => {
//     console.log(`для элемента ${fruit} его индекс это ${index}`);
// }) 


// function callback(item, index) {
//     console.log(`для элемента ${item} его индекс это ${index}`);
//     return 2;
// }

// console.log(fruits.forEach(callback))



// const animals = ['ant', 'bison', 'camel', 'duck', 'elephant'];
//                 // 0     1         2        3         4
// console.log(animals.slice(2));
// // expected output: Array ["camel", "duck", "elephant"]

// console.log(animals.slice(2, 4));
// // // expected output: Array ["camel", "duck"]

// console.log(animals.slice(1, 5));
// // // expected output: Array ["bison", "camel", "duck", "elephant"]

// console.log(animals.slice(1));
// // // expected output: Array ["bison", "camel", "duck", "elephant"]

// console.log(animals.slice(-2));
// // // expected output: Array ["duck", "elephant"]

// console.log(animals.slice(2, -1));
// // expected output: Array ["camel", "duck"]




// const str = 'The quick brown fox jumps over the lazy dog.';

// console.log(str.slice(31));
// // expected output: "the lazy dog."

// console.log(str.slice(4, 19));
// // expected output: "quick brown fox"

// console.log(str.slice(-4));
// // expected output: "dog."

// console.log(str.slice(-9, -5));
// expected output: "lazy"



// let str = 'яблоки';

// let firstLetter = str[0].toUpperCase(); // Я
// let otherLetters = str.slice(1); // блоки

// let result = firstLetter + otherLetters;

// console.log(result);


// console.log('алфавит'.toUpperCase()); // 'АЛФАВИТ'


// задача с яблоками заглав буквы первые

























//replace


// let text = "Mr Blue has a blue house and a blue car";
// let result = text.replace(/blue/gi, "red");
// // let result = text.replace("blue", "red");
// console.log(result);


// let text = "Mr Blue has a blue house and a blue car";
// let result = text.replace(/blue|house|car/gi, function (x) {
//     return x.toUpperCase();
// });

// console.log(result);


// function styleHyphenFormat(propertyName) {
//     function upperToHyphenLower(match) {
//         console.log(match);
//         return '-' + match.toLowerCase();
//     }
//     return propertyName.replace(/[A-Z]/g, upperToHyphenLower);
// }

// console.log(styleHyphenFormat('borderTopAndBorderLeft'));  // border-top-and-border-left




// const arr = [1, 45, -3, 78, 1];

// const index = arr.indexOf(-3);
// console.log(index); //2


// const notExist = arr.indexOf(99);
// console.log(notExist); //-1



// const arr = [12, 45, -3, 82, 12, 78, 12];
// let counter = 0;
// let index = arr.indexOf(12); //0

// while(index !== -1) {
//     counter++;
//     index = arr.indexOf(12, index + 1); //7
// }



// index = 0
// counter = 1
// index = 4

// index = 4
// counter = 2
// index = 6

// index = 6
// counter = 3
// index = -1


// console.log(counter);




// const arr = [12, 45, -3, 82, 12, 78, 12];

// const index = arr.lastIndexOf(12);
// console.log(index); //6

// const notExist = arr.lastIndexOf(77);
// console.log(notExist); //-1





// const arr = [12, 45, -3, 82, 12, 78, 12];
// let counter = 0;
// let index = arr.lastIndexOf(12);

// while(index !== -1) {
//     counter++;
//     // мы проверяем на ноль
//     // так как ниже начинаем с index-1
//     // при 0 мы получим старт -1
//     // для метода lastIndexOf отрицательный индекс
//     // означает искать с конца массива
//     if (index == 0) {
//         break;
//     } else {
//         // двигаемся дальше по массиву за счет изменения
//         // индекса на значение индекс-1
//         index = arr.lastIndexOf(12, index - 1); //3
//     }
// }

// // index = 6
// // counter = 1
// // index = 4

// // counter = 2
// // index = 0

// // counter = 3


// console.log(counter);








// const arr = [1, 2, 3, 4, 5];  
// let newArr = arr.map(item => {
//     return item + 3;
// });

// console.log(arr); //[1, 2, 3, 4, 5]
// console.log(newArr); // [4, 5, 6, 7, 8]




// const arr1 = [-1, -2, 3, 4, -5]; 

// let result1 = arr1.find(item => {
//     return item < 0
// })

// console.log(result1);





// const arr = [-1, -2, 3, 4, -5]; 

// let result = arr.filter(item => {
//     return item < 0
// })

// console.log(result);


// const arr = ['errr', 'werwe', 'gods', 'kowe'];




// arr.splice(index[, deleteCount, elem1, ..., elemN])
// Он начинает с позиции index, удаляет deleteCount элементов и вставляет elem1, 
// ..., elemN на их место. Возвращает массив из удалённых элементов.


// let arr = ["Я", "изучаю", "JavaScript"];

// arr.splice(1, 1); // начиная с позиции 1, удалить 1 элемент

// console.log( arr ); // осталось ["Я", "JavaScript"]



// let arr = ["Я", "изучаю", "JavaScript", "прямо", "сейчас"];

// // удалить 3 первых элемента и заменить их другими
// arr.splice(0, 3, "Давай", "танцевать");

// console.log( arr ) // теперь ["Давай", "танцевать", "прямо", "сейчас"]




// let arr = ["Я", "изучаю", "JavaScript", "прямо", "сейчас"];

// // удалить 2 первых элемента
// let removed = arr.splice(0, 2);

// console.log( removed ); // "Я", "изучаю" <-- массив из удалённых элементов



// let arr = ["Я", "изучаю", "JavaScript"];

// // с позиции 2
// // удалить 0 элементов
// // вставить "сложный", "язык"
// arr.splice(2, 0, "сложный", "язык");

// console.log( arr ); // "Я", "изучаю", "сложный", "язык", "JavaScript"




// let arr = [1, 2, 5];

// // начиная с индекса -1 (перед последним элементом)
// // удалить 0 элементов,
// // затем вставить числа 3 и 4
// arr.splice(-1, 0, 3, 4);

//  console.log( arr ); // 1,2,3,4,5








// const arr = [10, 1, 3, 33, 6];
// arr.sort();
// // 1 10 3 33 6
// console.log(arr);





// function compareFunc(a,b) {
//     if(a > b) {
//         return 1;
//     } else if (b > a){
//         return -1;
//     } else {
//         return 0;
//     }
// }

// const arr = [10, 1, 3, 33, 6];
// // 1 3 6 10 33
// console.log(arr.sort(compareFunc));






// function compareFunc(a, b){
//     if(a > b) {
//         return -1;
//     } else if (b > a){
//         return 1;
//     } else {
//         return 0;
//     }
// }
// const arr = [10,1,3,33,6];

// console.log(arr.sort(compareFunc));
   



// const arr = [10,1,3,33,6];
// arr.sort((a, b) => {
//     return a - b;
// })

// console.log(arr);



// const str = "test it is test sun test no";
// let counter = 0;
// const wordToFind = "test";
// let index = str.indexOf(wordToFind);






// console.log(index);
// while(index !== -1){
//     counter++;
//     index = str.indexOf(wordToFind, index + 1); //24
// }
// console.log(counter);

// counter = 0
// index = 0


// counter = 1
// index = 14


// counter = 2
// index = 23


// counter = 3



// const str = "Some value";
// let newStr = str.substring(2);
// // me value
// // console.log(newStr);
// newStr = str.substring(1,3);
// // om
// console.log(newStr);





// const str = "Some value";

// // let newStr = str.substr(2);
// // // me value
// // console.log(newStr);
// newStr = str.substr(1,3);
// // ome
// console.log(newStr);







// function HelloWorld(){
//     alert("Hello world!");
// }

// setTimeout(HelloWorld, 3000);

// console.log(1);
// console.log(2);
// setTimeout(() => {
//     console.log(3);
// }, 3000);
// console.log(4);
// console.log(5);



// function sum(a, b){
//     alert(a + b);
// }

// setTimeout(sum, 3000, 1, 2);



// setTimeout(function() {
//     alert("Hi!");
// }, 3000);


// setTimeout(
//     function(a, b){
//         alert(a * b);
//     }, 3000, 3, 7
// );


// let id = setTimeout(function() {
//     alert("Boom!")}, 3000
// );

// console.log("id timer: " + id);


// clearTimeout(id);



// повторить с интервалом 2 секунды
// let timer = 0;
// let id = setInterval(() => {
//     console.log('tick');
//     timer++;
//     if(timer == 7) {
//         clearInterval(id);
//     }
// }, 1000);

// tick
// timer = 1;
// tick
// timer = 2;
// timer = 7;








//19 sentember




class Rat {
    constructor(name, age, favouriteFood, color, isSpot) {
        this.name = name;
        this.age = age;
        this.favouriteFood = favouriteFood;
        this.color = color;
        this.isSpot = isSpot;
    }
    increaseAge() {
        this.age += 0.1;
        // this.age = this.age + 0.1;
    }
}

const rat1 = new Rat('Пыня', 1.8, ['огурец', 'авокадо', 'шоколадный сырок'], 
'черно-коричневый', true);

const rat2 = new Rat('Тина', 1.8, ['огурец', 'авокадо', 'шоколадный сырок'], 
'черно-коричневый', true);

const rat3 = new Rat('Биша', 1.8, ['огурец', 'авокадо', 'шоколадный сырок'], 
'черно-коричневый', true);

const rat4 = new Rat('Дымка', 1.8, ['огурец', 'авокадо', 'шоколадный сырок'], 
'черно-коричневый', true);


rat1.increaseAge();
rat4.increaseAge();
rat4.increaseAge();

console.log(rat1, rat2, rat3, rat4);



// class Dog {
//     constructor(name, age, favouriteFood, color, isSpot, breed, colorCollar) {
//         this.name = name;
//         this.age = age;
//         this.favouriteFood = favouriteFood;
//         this.color = color;
//         this.isSpot = isSpot;
//         this.breed = breed;
//         this.colorCollar = colorCollar;
//     }
//     increaseAge() {
//         this.age += 0.1;
//         // this.age = this.age + 0.1;
//     }
//     changeColorCollar(userColor) {
//         this.colorCollar = userColor;
//     }
// }

// class Dog extends Rat {
//     constructor(name, age, favouriteFood, color, isSpot, breed, colorCollar) {
//         super(name, age, favouriteFood, color, isSpot);
//         this.breed = breed;
//         this.colorCollar = colorCollar;
//     }
//     changeColorCollar(userColor) {
//         this.colorCollar = userColor;
//     }
// }


// const dog1 = new Dog('Грэф', 1.8, ['огурец', 'авокадо', 'шоколадный сырок'], 
// 'черно-коричневый', true, 'овчарка немецкая', 'коричневый');

// const dog2 = new Dog('Эрли', 1.8, ['огурец', 'авокадо', 'шоколадный сырок'], 
// 'черно-коричневый', false, 'афган', 'черный');

// dog1.increaseAge();
// dog1.increaseAge();

// dog2.changeColorCollar('красный');

// console.log(dog1, dog2);