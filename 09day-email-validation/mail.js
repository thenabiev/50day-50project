const check=document.querySelector(".check")
const text=document.querySelector('.text')
const password=document.querySelector('.password');

let regex=/^[^]+\@[a-zA-z]+\.[a-zA-z]{2,4}$/;

check.addEventListener('click', ()=>{
    if(password.value==''){
        text.innerText="Please Enter An Email Adress";
        
    }
    else if(password.value.match(regex)){
        text.innerText="Successful Email";
        text.style.color="lime"
        password.style.border=" 1px solid lime"

    }
    else{
        text.innerText="Please Enter An Valid Email";
        text.style.color="crimson"
        password.style.border=" 1px solid crimson"
    }
    setTimeout(()=>{
        text.innerText="Please Enter An Email Adress";
        text.style.color="#fff"
        password.style.border=" none"


    }, 4000)
    password.value=""
})