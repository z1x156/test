const scrollfun = () => {
    const links = document.querySelectorAll('.header-menu__item a')
    seamless.polyfill();
    links.forEach((element, index) => {
        element.addEventListener('click', (event)=>{
            event.preventDefault()


            const id = element.getAttribute('href').substring(1)
            const section = document.getElementById(id)
            
            if(section){
                seamless.elementScrollIntoView(section,{
                    behavior: "smooth",
                    block: "center",
                    inline: "center",
                });
            }else{
                seamless.elementScrollIntoView(document.querySelector("#characteristics"), {
                    behavior: "smooth",
                    block: "center",
                    inline: "center",
                });
            }
        })
    })
}
scrollfun();
