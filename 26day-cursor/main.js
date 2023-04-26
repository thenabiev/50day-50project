const body=document.body;
body.addEventListener("mousemove", (e)=>{
    const xPos=e.offsetX;
    const yPos=e.offsetY;
    // const span=document.createElement('span');
    const span=document.querySelector('span')
     span.style.left=xPos+"px";
     span.style.top=yPos+'px';
     
    

     
})