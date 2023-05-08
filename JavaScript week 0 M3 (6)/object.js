
// ДЗ 1 ) - Задание 1
// Создать массив «Список покупок». Каждый элемент массива
// является объектом, который содержит название продукта, необходимое количество и куплен или нет. Написать несколько функций для работы с таким массивом.

// 1. Вывод всего списка на экран таким образом, чтобы сначала
// шли некупленные продукты, а потом – купленные.
let shoppinglist=[
    {
        name:'bread',
        amount:2,
        isbuyed:true
    },
    {
        name:'milk',
        amount:1,
        isbuyed:false
    },
    {
        name:'meat',
        amount:2,
        isbuyed:true
    },
    {
        name:'tomates',
        amount:3,
        isbuyed:false
    },
    {
        name:'banana',
        amount:6,
        isbuyed:true
    }
]

// function showList(array)
// {
//     console.log('dont buyed');
//     for(let i=0;i<array.length;i++)
//     {
//         if(array[i].isbuyed==false)
//         {
//             console.log(array[i]);
//         }
//     }
//     console.log('buyed');
//     for(let i=0;i<array.length;i++)
//     {
//         if(array[i].isbuyed==true)
//         {
//             console.log(array[i]);
//         }
//     }
// }

// showList(shoppinglist);


// 2. Добавление покупки в список. Учтите, что при добавлении
// покупки с уже существующим в списке продуктом, необходимо увеличивать количество в существующей покупке,
// а не добавлять новую. 

let list={
    name:'popcorn',
    amount:2
}
let array2;
function addshop(array,element){

    for(let i=0;i<array.length;i++)
    {
        if(array[i].name != element.name)
        {
            array2=[...array,element];
            // console.log(array);
        }
        else if(array[i].name == element.name)
        {
            array[i].amount=array[i].amount + element.amount;
            array2=[...array];
            break;
        }
    }
    console.log(array2);
}
addshop(shoppinglist,list);




// 3. Покупка продукта. Функция принимает название продукта
// и отмечает его как купленный.

// function buyed(array,element){
//     for(let i=0;i<array.length;i++)
//     {
//         if(array[i].name==element)
//         {
//             if(array[i].isbuyed==true){
//                 console.log(array[i].name+ " buyed" ) ;
//             }
//             else if(array[i].isbuyed==false)
//             {
//                 console.log(array[i].name + ' will buy');
//             }
//         }
//     }
// }

// buyed(shoppinglist,'milk');