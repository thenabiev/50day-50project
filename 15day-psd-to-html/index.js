const nav=document.querySelector("nav");
    const toggler=document.querySelector(".toggler");
    const navList=document.querySelector(".nav-list");
    toggler.addEventListener("click",()=>{
        navList.classList.toggle("active");


        if(navList.classList.contains("active") && document.body.style.width<'992px'){
        document.body.style.position='fixed';
        
    }   else{
        document.body.style.position='relative';
        
    }


    })

    