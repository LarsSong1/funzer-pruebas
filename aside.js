var links = document.querySelectorAll("#link")
links.forEach(elemento =>{
    elemento.addEventListener("click", ()=>{
        resetLinks();
        elemento.classList.add('active')
    })
})


function resetLinks (){
    links.forEach(li =>{
        li.classList.remove('active')
    })
}