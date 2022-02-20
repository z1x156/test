const accFun = () => {
    const charTitle = document.querySelectorAll('.characteristics__item')

    const closeContent = () => {
        const activeButton = document.querySelector('.characteristics__title.active');
        const openContent = document.querySelector('.characteristics__description.open');
        if (activeButton) {
            activeButton.classList.remove('active');
        }
        else if (openContent) {
            openContent.classList.remove('open');
            openContent.style.height = '' + 'px';
        }
    };

    charTitle.forEach(item => {
        const charBrn = item.querySelector('.characteristics__title')
        const chardiv = item.querySelector('.characteristics__description')

        charBrn.addEventListener('click', () => {
            if (chardiv.classList.contains('open')) {
                chardiv.style.height = ''
            } else {
                chardiv.style.height = chardiv.scrollHeight + 'px'
            }
            charBrn.classList.toggle('active')
            chardiv.classList.toggle('open')
        })
    })
}
accFun()