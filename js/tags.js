const tagsfun = () =>{
    const cardDelail = document.querySelectorAll('.card-detail__change')
    const tabsTitle = document.querySelector('.card-details__title')
    const price = document.querySelector('.card-details__price')
    const image = document.querySelector('.card__image_item')

    const tabsoptions = [
        {
            name:"Graphite",
            price: 60000,
            image:'img/iPhone-graphite.webp'
        },
        {
            name:"Silver",
            price: 65000,
            image:'img/iPhone-silver.webp'
        },
        {
            name:"Sierra Blue",
            price: 70000,
            image:'img/iPhone-sierra_blue.webp'
        }
    ]
    const changeContent = (index) =>{
        tabsTitle.textContent = `Смартфон Apple iPhone 13 Pro 128GB ${tabsoptions[index].name}`
        price.textContent = `${tabsoptions[index].price}₽`
        image.setAttribute('src', tabsoptions[index].image)
    }


    const changeActiveTabs = (IndexCkiced) =>{
        cardDelail.forEach((tab, index) =>{
            tab.classList.remove('active')

            if(index === IndexCkiced){
                tab.classList.add('active')
            }
        })
        changeContent(IndexCkiced)
    }
    cardDelail.forEach((tab, index) =>{
        tab.addEventListener('click', ()=>{
            changeActiveTabs(index);
        })
    })
}
tagsfun();