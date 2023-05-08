let books =document.querySelectorAll('.book');

let list = document.querySelector('ol');



// for(let el of books){
//     el.addEventListener('click',function(){
//          for(el2 of books){
//             el2.classList.remove('orange');
//         }
//         el.classList.add('orange');
//     })
//     console.log(el);
// }

for(let i=0;i<books.length;i++)
{
    books[i].addEventListener('click',function(){
        for(let k=0;k<books.length;k++){
            books[k].classList.remove('orange');
        }
        books[i].classList.add('orange');
    });
}



// let add=document.getElementById('add');

// add.addEventListener('click',function(){
// let name=prompt('enter name');
// let newitem = document.createElement('li');
// newitem.innerText=name;
// list.appendChild(newitem);
// newlist=list;
// });

// let delet=document.getElementById('delete');
// delet.addEventListener('click',function(){
//     let n=0;
//     for(let el of list.childNodes){
//         if(el.tagName=='LI')n++;
//         if(n==2){
//             element2=el;
//             break;
//         }
//     }
// list.removeChild(element2);
// });







 


  
   
    