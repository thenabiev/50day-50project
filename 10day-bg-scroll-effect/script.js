const bgImage=document.getElementById('bg-image');
window.addEventListener('scroll', ()=>{
    updateImage();
});

function updateImage(){
    bgImage.style.opacity=1-window.pageYOffset/600;
    bgImage.style.backgroundSize=170- (window.pageYOffset/17) +"%";
}