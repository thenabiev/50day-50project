const cards=document.querySelectorAll(".card")

const observer=new IntersectionObserver(entries=>{
    entries.forEach(entry=>{
        entry.target.classList.toggle ('show', entry.isIntersecting)
    })
},{
    threshold:0.5
})

cards.forEach(card=>{
    observer.observe(card)
})