let open = document.getElementById('open');
let close = document.getElementById('close');
let model = document.querySelector('.model');

open.addEventListener('click',function(){
    // model.classList.add('blok');
    model.style.display='block'; 
});

close.addEventListener('click',function(){
    // model.classList.remove('blok');
    model.style.display='none'; 
});

 