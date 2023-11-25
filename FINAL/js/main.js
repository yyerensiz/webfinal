let inputText=document.querySelector('.search');
    submitForm=document.querySelector('.Search');
    information=document.querySelector('.information');

    searchFunction=(text)=>{
        information.forEach((element)=>{
            if(element.textContent==text){
                element.style="animation:animationElement 2s;";
                console.log(element)
            }
        });
    }
submitForm.addEventListener('click', (e)=>{
    e.preventDefault();
    searchFunction(inputText.value);
})