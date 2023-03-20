var skewed=document.querySelector('.skewed');
window.addEventListener('scroll', ()=>{
    var value= -10 + window.scrollY/60;
    skewed.style.transform="skewY("+ value +"deg)"
})