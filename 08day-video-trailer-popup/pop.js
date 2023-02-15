const btn=document.querySelector('.btn');
const closedIcon=document.querySelector("i");
const trailer=document.querySelector('.trailer-container');
const video=document.querySelector('video')

btn.addEventListener('click', ()=>{
    trailer.classList.remove('active')
})
closedIcon.addEventListener('click',()=>{
    trailer.classList.add('active');
    video.pause();
    video.currentTime=0;
    
})