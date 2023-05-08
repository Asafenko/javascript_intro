let text = document.querySelector('input[name="text"]');

 

     text.addEventListener('input',function(){
       let el = text.value.slice(-1);
       if(!isNaN(Number(el))){  
            text.value=text.value.slice(0,-1);
       }
     });
    