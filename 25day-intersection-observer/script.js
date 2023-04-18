const cards=document.querySelectorAll(".card")

const observer=new IntersectionObserver(entries=>{
    entries.forEach(entry=>{
        entry.target.classList.toggle ('show', entry.isIntersecting)
       // if(entry.isIntersecting) observer.unobserve(entry.target)  // Əgər element bir dəfə observe olunubsa bir daha təkrar olmur
    })
},{
    //  threshold:0.5, // Obyektin nə qədər hissəsi ekrandan çıxırsa obyekt itir
    rootMargin:"-100px" // Ekranın gözləm sahəsin üst və altdan 100px azaldır

})

cards.forEach(card=>{
    observer.observe(card)
})