const toggler=document.querySelector('.toggler button')
const navOffset=document.querySelector('header .navbar nav ul')
const layer=document.querySelector('.layer')
const navLink=document.querySelectorAll('header .navbar nav ul li')


function closeMobileNav(){
    navOffset.classList.remove('active');
    layer.classList.remove('active');
    toggler.style.display='block'
    document.body.style.position='static'

}


toggler.addEventListener('click', ()=>{
    navOffset.classList.toggle('active')
    layer.classList.add('active')
    toggler.style.display='none'
    if (navOffset.classList.contains('active')){
        document.body.style.position='fixed'
    }

})
layer.addEventListener('click', ()=>{
    closeMobileNav()
})

navLink.forEach(link=>{
    link.addEventListener('click', ()=>{
        closeMobileNav()
    })
})

