const hamburger=document.querySelector(".hamburger");

hamburger.addEventListener('click', ()=>{
    hamburger.classList.toggle('active');
    document.querySelector('.nav-ul').classList.toggle('active')
    
})

document.querySelectorAll('.nav-a')
.forEach(x=>x.addEventListener('click',()=>{
    hamburger.classList.remove('active');
    document.querySelector('.nav-ul').classList.remove('active')
}))

//SCROLL

const root=document.documentElement;
const marqueElementsDisplayed=getComputedStyle(root).getPropertyValue('--marque-elements-displayed')
const marqueContent=document.querySelector('.marque-content')

root.style.setProperty('--marque-elements', marqueContent.children.length);

for(let i=0; i<marqueElementsDisplayed; i++){
    marqueContent.appendChild(marqueContent.children[i].cloneNode(true))
}