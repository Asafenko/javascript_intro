let stylesradio = document.querySelectorAll('input[name="style"]');
let stylescheck = document.querySelectorAll('input[name="checkstyle"');
let text = document.querySelector('input[type="text"]');
let result = document.querySelector('textarea');
let btn = document.querySelector('input[type="button"]');




btn.addEventListener('click',function(){
    result.className = "";
    result.classList.add('area2');

    let classname;
    for(let el of stylesradio){
        if(el.checked){
            classname =  el.value;
            result.classList.add(classname);
        }
       
    }
    for(let el2 of stylescheck){
        if(el2.checked){
            classname = el2.value;
            result.classList.add(classname);
        }
    }
    result.value=text.value;
    

});



