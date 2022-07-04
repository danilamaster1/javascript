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

const buy = {
    init() {
        const prods = {
            items: [
                {
                    name: 'LV',
                    price: 12590,
                },
                {
                    name: 'DC',
                    price: 16590,
                },
                {
                    name: 'DG',
                    price: 23000,
                }
            ]
        }

        const prodContainer = document.querySelector('.prod__info1');
        const appendElem1 = document.createElement('div');
        appendElem1.classList.add('price__info')
        appendElem1.innerHTML = `
            <h4>${prods.items[0].name}</h4>
            <p>${prods.items[0].price}</p>
        `;
        prodContainer.insertAdjacentElement('afterbegin', appendElem1);

        const prodContainer2 = document.querySelector('.prod__info2');
        const appendElem2 = document.createElement('div');
        appendElem2.classList.add('price__info')
        appendElem2.innerHTML = `
            <h4>${prods.items[1].name}</h4>
            <p>${prods.items[1].price}</p>
        `;
        prodContainer2.insertAdjacentElement('afterbegin', appendElem2);

        const prodContainer3 = document.querySelector('.prod__info3');
        const appendElem3 = document.createElement('div');
        appendElem3.classList.add('price__info')
        appendElem3.innerHTML = `
            <h4>${prods.items[2].name}</h4>
            <p>${prods.items[2].price}</p>
        `;
        prodContainer3.insertAdjacentElement('afterbegin', appendElem3);

        const buyClick = document.querySelector('.products');
        buyClick.addEventListener('click', (event) => {
            clickToBuy(event)
        });

        function clickToBuy(event) {
            if (event.target.tagName !== 'BUTTON') {
                return;
            }
            createToBuy(event.target);
        }

        let mainPrice = 0;

        function createToBuy(event) {
            const appendPrice = document.querySelector('.basket');
            const appendElem4 = document.createElement('div');
            appendElem4.innerHTML = `
                <p>${mainPrice}</p>
            `;
            appendPrice.insertAdjacentElement('afterbegin', appendElem4);

            if (event.classList[0] === 'buy__link1') {
                mainPrice += prods.items[0].price;
            } else if (event.classList[0] === 'buy__link2') {
                mainPrice += prods.items[1].price;
            } else {
                if (event.classList[0] === 'buy__link3') {
                    mainPrice += prods.items[2].price;
                }
            }

            appendElem4.innerHTML = `
            <p>${mainPrice}</p>
            `;

            appendPrice.insertAdjacentElement('afterbegin', appendElem4);
        }
    },
}

window.addEventListener('load', () => {
    buy.init();
})

