const modal = () => {
    const modalBtn = document.querySelector('.card-details__button_delivery')
    const cardTitle = document.querySelector('.modal__title')
    const title = document.querySelector('.card-details__title')
    const modal = document.querySelector('.modal')
    const closeBtn = document.querySelector('.modal__close')

    modalBtn.addEventListener('click', ()=>{
        modal.style.display = 'flex'
    })
    closeBtn.addEventListener('click', ()=>{
        modal.style.display = ''
    })
    title.innerText = cardTitle.innerText
}
modal()