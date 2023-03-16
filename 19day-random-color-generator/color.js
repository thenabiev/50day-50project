const container=document.querySelector('.container');

for(let i=0; i<30; i++){
    const color=document.createElement('div');
    color.className="color-container";
    container.appendChild(color)
    
}

const colorElements=document.querySelectorAll('.color-container')
generateColors()
function generateColors(){
    colorElements.forEach((color)=>{
        const newColorCode=randomColor();
        console.log(newColorCode)
        color.style.backgroundColor=`#${newColorCode}`;
        color.innerHTML=`#${newColorCode}`;
       
    })
}
randomColor()
function randomColor(){
    const chars="0123456789abcdef"
    const colorLength=6;
    let colorCode = '';
    for(let index=0; index<colorLength; index++){
        const randomNumber= Math.floor(Math.random()*chars.length);
        colorCode+=chars.substring(randomNumber, randomNumber+1);
    }
    return colorCode;
    

}
