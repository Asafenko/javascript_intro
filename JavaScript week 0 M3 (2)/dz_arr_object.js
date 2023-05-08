// ЗАДАНИЕ С УРОКА ЯБЛОКИ !!!

// 1 способ

// let str='очень яблок хочеться';

// let first=str[0].toUpperCase();
// let other=str.slice(1,6);
// let newword = first+other;


// let second=str[6].toUpperCase();
// let other2=str.slice(7,12);
// newword+=second+other2;

// let third = str[12].toUpperCase();
// let other3=str.slice(13,20);
// newword+=third+other3;

// console.log(newword);

///////////////////////////////////////////////////////////////

// 2 способ

// let str='очень яблок хочеться';
// let strsplit=str.split(' ');

// let newword;
// for(let i=0;i<strsplit.length;i++)
// {
//     let firstword=strsplit[i];
//     let firstletter = firstword[0].toUpperCase();
//     let other=firstword.slice(1);
//     newword+=firstletter+other+' ';
// }
// // почему то в начале пиншеться undefined
// console.log(newword);



///////////////////////////////////////////////////////////////



///////////////////////////////////////////////////////////////////////

// Задание 1
// Создать объект, описывающий автомобиль (производитель,
// модель, год выпуска, средняя скорость), и следующие функции
// для работы с этим объектом.

// 1. Функция для вывода на экран информации об автомобиле.
// 2. Функция для подсчета необходимого времени для преодоления переданного расстояния со средней скоростью.
// Учтите, что через каждые 4 часа дороги водителю необходимо делать перерыв на 1 час.


let car= {
    maker:"hyundai",
    model:'santa-fe',
    year:2008,
    'average speed':120,
    showinfo(){
        console.log(this);
    },
    time(road){
        let relax=0;
        let time = road / 120;
        time = Math.trunc(time)+(((time - (Math.trunc(time))) * 60 )/ 100)
        for(let hour = 1;hour<= time;hour++){
            if(hour % 5 ==0){
                relax++;
                time++;
            }
        }
        time = time.toFixed(2).split('.');
        if(relax==0){
            console.log(`На преодоление расстояния ${road} километров со скоростью ${this['average speed']} км/ч вам потребуется ${time[0]} ч. ${time[1]} м. Отдых не требуется`)
        }
        else{
            console.log(`На преодоление расстояния ${road} километров со скоростью ${this['average speed']} км/ч вам потребуется ${time[0]} ч.  ${time[1]} м. потребуется для отдыха ${relax} час или часов`);
        }
            


    }

}

car.time(200);





