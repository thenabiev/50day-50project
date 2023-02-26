var section=document.querySelector('section');
window.addEventListener('scroll', ()=>{
    var value=window.scrollY;
    section.style.clipPath="circle("+ value +"px at center)"
})