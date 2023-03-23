const switcher=document.querySelector('.switch');
const toggler=document.querySelector('.toggler');

switcher.addEventListener('click', ()=>{
    switcher.classList.toggle('active');
    document.body.classList.toggle('dark');
})