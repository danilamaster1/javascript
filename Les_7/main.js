const gallery = {
    settings: {
        galleryMain: '.my',
        previewSelector: '.products',
        modalImageContainer: 'gallery__modal',
        modalImageClass: 'gallery__image',
        modalImageScreen: 'gallery__back',
        modalImageClose: 'gallery__close',
        modalImageCloseSrc: 'img/close.png'
    },

    init(userSettings = {}) {
        Object.assign(this.settings, userSettings);

        const galleryContainer = document.querySelector(this.settings.previewSelector);
        galleryContainer.addEventListener('click', (event) => this.containerClickHandler(event));
    },

    containerClickHandler(event) {
        if (event.target.tagName !== 'IMG') {
            return;
        }
        this.createGalleryModal(event.target);
    },

    createGalleryModal(img) {
        const galleryModal = document.createElement('div');
        galleryModal.classList.add(this.settings.modalImageContainer);

        const galleryScreen = document.createElement('div');
        galleryScreen.classList.add(this.settings.modalImageScreen);
        galleryModal.appendChild(galleryScreen);

        const galleryClose = new Image();
        galleryClose.classList.add(this.settings.modalImageClose);
        galleryClose.src = this.settings.modalImageCloseSrc;
        galleryClose.addEventListener('click', (event) => {
            this.close(event.target);
        })
        galleryModal.appendChild(galleryClose);

        const galleryImage = new Image();
        galleryImage.classList.add(this.settings.modalImageClass);
        galleryImage.src = img.dataset.fullImageUrl;
        galleryModal.appendChild(galleryImage);

        document.querySelector(this.settings.galleryMain).appendChild(galleryModal);
    },

    close(closeImg) {
        closeImg.parentElement.remove();
    }
}

window.addEventListener('load', () => {
    gallery.init({
        galleryMain: '.main__content',
    });
})

let prods = {
    items: [
        {
            name: 'LV',
            price: 27000,
        },
        {
            name: 'LC',
            price: 34000,
        },
        {
            name: 'DG',
            price: 13999,
        }
    ]
}

const toBuy = {
    init() {
        const buyClick = document.querySelector('.products');
        buyClick.addEventListener('click', (event) => {
            this.clickToBuy(event);
        });
    },

    clickToBuy(event) {
        if (event.target.tagName !== 'BUTTON') {
            return;
        }
        this.createToBuy(event.target);
    },

    createToBuy(event) {
        const finallyPrice = document.querySelector('.finally__price');
        let mainPrice = parseInt(finallyPrice.textContent);
        if (event.classList[0] === 'buy__link1') {
            mainPrice += prods.items[0].price;
            localStorage.setItem(prods.items[0].name, prods.items[0].price);
        } else if (event.classList[0] === 'buy__link2') {
            mainPrice += prods.items[1].price;
            localStorage.setItem(prods.items[1].name, prods.items[1].price);
        } else {
            if (event.classList[0] === 'buy__link3') {
                mainPrice += prods.items[2].price;
                localStorage.setItem(prods.items[2].name, prods.items[2].price);
            }
        }
        finallyPrice.innerHTML = `${mainPrice}`;
        localStorage.setItem('price', `${mainPrice}`);
    }
}

window.addEventListener('load', () => {
    toBuy.init();
});

const collapse = {
    init() {
        const structureCard = document.querySelector('.structure');
        const collapseItem = document.createElement('div');
        collapseItem.classList.add('structure__block');
        collapseItem.innerHTML = `
        <p class="p__collapse">Здесь будет состав заказа когда-нибудь!</p>
        <button class="button__collapse">Next</button>
        `;
        structureCard.insertAdjacentElement('beforeend', collapseItem);

        const but = document.querySelector('.button__collapse');
        but.addEventListener('click', () => {
            collapseItem.classList.remove('structure__block')
            collapseItem.innerHTML = ``;
            structureCard.insertAdjacentElement('beforeend', collapseItem);
            this.next();
        })
    },

    next() {
        const nextBut = document.querySelector('.address');
        const collapseNext = document.createElement('div');
        collapseNext.classList.add('structure__block');
        collapseNext.innerHTML = `
        <p class="p__collapse">Улица:</p>
        <textarea></textarea>
        <button class="button__collapse2">Next</button>
        `;
        nextBut.insertAdjacentElement('beforeend', collapseNext);

        const but2 = document.querySelector('.button__collapse2');
        but2.addEventListener('click', () => {
            collapseNext.classList.remove('structure__block')
            collapseNext.innerHTML = ``;
            nextBut.insertAdjacentElement('beforeend', collapseNext);
            this.nextLast();
        })
    },

    nextLast() {
        const lastBut = document.querySelector('.comment');
        const collapseLast = document.createElement('div');
        collapseLast.classList.add('structure__block');
        collapseLast.innerHTML = `
        <p class="p__collapse">Комментарий к заказу:</p>
        <textarea></textarea>
        <button class="button__collapse2">Заказать!</button>
        `;
        lastBut.insertAdjacentElement('beforeend', collapseLast);
    }
}

window.addEventListener('load', () => {
    collapse.init();
});
