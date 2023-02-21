//Butun teleb olunan elementleri sech
const gallery=document.querySelectorAll('.gallery .image'),
      previewBox=document.querySelector('.preview-box'),
      previewImg=previewBox.querySelector('img'),
      closeIcon=previewBox.querySelector('.icon'),
      currentImg=document.querySelector('.current-img'),
      totalImg=document.querySelector('.total-img'),
      layer=document.querySelector('.layer');


window.onload=()=>{  //Sehife yuklenir
    for(let i=0; i < gallery.length; i++){
        totalImg.textContent=gallery.length; //Gallerynin uzunlugu umumi total image sayi qederdir
        let newIndex=i; //Dovrden cixan i deyerini newIndexe atadiq
        
        let clickImgIndex
        gallery[i].onclick=()=>{
            layer.style.display='block';
            document.body.style.overflow='hidden';
            clickImgIndex=newIndex;
            function preview(){
                currentImg.textContent=newIndex+1;
                let selectedImgUrl=gallery[newIndex].querySelector('img').src;
                previewImg.src=selectedImgUrl;
                
            }

            const prevBtn=document.querySelector('.prev');
            const nextBtn=document.querySelector('.next');
            if(newIndex== 0){
                prevBtn.style.display='none';
            }
            if(newIndex>=gallery.length-1){
                nextBtn.style.display='none';
            }
            prevBtn.onclick=()=>{
                newIndex--;
                if(newIndex==0){
                    preview();
                    prevBtn.style.display='none';
                }else{
                    preview();
                    nextBtn.style.display='block';
                }
                
            }
            nextBtn.onclick=()=>{
                newIndex++;
                if(newIndex>=gallery.length-1){
                    preview();
                    nextBtn.style.display='none';
                }else{
                    preview();
                    prevBtn.style.display='block';
                }
                
            }
           
                preview();
          
            previewBox.classList.add('show');
            closeIcon.onclick=()=>{
                layer.style.display='none';
                document.body.style.overflow='auto';
                newIndex=clickImgIndex;
                prevBtn.style.display='block';
                nextBtn.style.display='block';

                previewBox.classList.remove('show')
            }
        }
    }
}
