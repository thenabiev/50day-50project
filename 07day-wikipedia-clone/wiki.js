let searchText=document.querySelector('#searchText'),
    findNow=document.querySelector('#findNow'),
    searchResult=document.querySelector('#searchResult');

    findNow.addEventListener('click', ()=>{
        if(searchText.value!== ''){
            let url=`https://en.wikipedia.org/w/api.php?action=query&list=search&prop=info&inprop=url&utf8=&format=json&origin=*&srlimit=20&srsearch=${searchText.value}`
            fetch(url).then(response => response.json())
            .then(data =>{
                console.log(data);

                searchResult.innerHTML=``;
                data.query.search.forEach(items =>{
                    let resultUrl=`https://en.wikipedia.org/?curid=${items.pageid}`;
                    searchResult.insertAdjacentHTML('afterbegin', `<br/><a href="${resultUrl}" class="resultTitle" target="_blank">${items.title}</a>
                    <a href="${resultUrl}" class="link" target="_blank">${resultUrl}</a>
                    <p>${items.snippet}</p> 
                    `)
                })

            })
        }
    })