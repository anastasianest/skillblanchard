document.addEventListener('DOMContentLoaded', function () {
    document.querySelector(".header-top__burger").addEventListener("click", function () {
        document.querySelector(".header-top__nav").classList.add("active");
    })
    document.querySelector(".header-top__nav-close").addEventListener("click", function () {
        document.querySelector(".header-top__nav").classList.remove("active");
    })


    document.querySelector(".header-top__link").addEventListener("click", function () {
        document.querySelector(".header-top__form").classList.add("header-top__form__active");
        this.classList.add("active");
    })

    let form = document.querySelector(".header-top__form");
    let closeBtn = document.querySelector('.js-close-form');

    function closeForm() {
        form.classList.remove("header-top__form__active");
        form.querySelector("input").value = "";
        document.querySelector(".header-top__link").classList.remove("active")
    }

    document.addEventListener("click", function (e) {
        let target = e.target;

        if (!target.closest(".header-top__form-container")) {

        }
    });

    closeBtn.addEventListener('click', closeForm);

    const swiper = new Swiper('.swiper', {
        direction: 'horizontal',
        allowTouchMove: false,
        loop: true,
        effect: 'fade',
        speed: 10000,
        autoplay: {
            delay: 5000
        },
    });
});

const params = {
    btnClassName: "js-header-dropdown-btn",
    dropClassName: "js-header-drop",
    activeClassName: "is-active",
    disabledClassName: "is-disabled"
}

function onDisable(evt) {
    if (evt.target.classList.contains(params.disabledClassName)) {
        evt.target.classList.remove(params.disabledClassName, params.activeClassName);
        evt.target.removeEventListener("animationend", onDisable);
    }
}

function setMenuListener() {
    document.body.addEventListener("click", (evt) => {
        const activeElements = document.querySelectorAll(`.${params.btnClassName}.${params.activeClassName}, .${params.dropClassName}.${params.activeClassName}`);

        if (activeElements.length && !evt.target.closest(`.${params.activeClassName}`)) {
            activeElements.forEach((current) => {
                if (current.classList.contains(params.btnClassName)) {
                    current.classList.remove(params.activeClassName);
                } else {
                    current.classList.add(params.disabledClassName);
                }
            });
        }

        if (evt.target.closest(`.${params.btnClassName}`)) {
            const btn = evt.target.closest(`.${params.btnClassName}`);
            const path = btn.dataset.path;
            const drop = document.querySelector(`.${params.dropClassName}[data-target="${path}"]`);

            btn.classList.toggle(params.activeClassName);

            if (!drop.classList.contains(params.activeClassName)) {
                drop.classList.add(params.activeClassName);
                drop.addEventListener("animationend", onDisable);
            } else {
                drop.classList.add(params.disabledClassName);
            }
        }
    });
}

setMenuListener();


document.addEventListener("DOMContentLoaded", () => {
    let gallerySlider = new Swiper(".slides-container", {
        slidesPerGroup: 1,
        slidesPerView: 1,
        grid: {
            rows: 1,
            fill: "row"
        },
        spaceBetween: 20,
        pagination: {
            el: ".gallery .gallery__swiper-pagination",
            type: "fraction"
        },
        navigation: {
            nextEl: ".gallery__swiper-next",
            prevEl: ".gallery__swiper-prev"
        },

        breakpoints: {
            577: {
                slidesPerView: 2,
                slidesPerGroup: 2,
                spaceBetween: 35
            },

            1361: {
                slidesPerView: 3,
                slidesPerGroup: 3,
                spaceBetween: 50
            }
        },

        a11y: false,
        keyboard: {
            enabled: true,
            onlyInViewport: true
        },
        watchSlidesProgress: true,
        watchSlidesVisibility: true,
        slideVisibleClass: "slide-visible",

        on: {
            init: function () {
                this.slides.forEach((slide) => {
                    if (!slide.classList.contains("slide-visible")) {
                        slide.tabIndex = "-1";
                    } else {
                        slide.tabIndex = "";
                    }
                });
            },
            slideChange: function () {
                this.slides.forEach((slide) => {
                    if (!slide.classList.contains("slide-visible")) {
                        slide.tabIndex = "-1";
                    } else {
                        slide.tabIndex = "";
                    }
                });
            }
        }
    });
});


const element = document.querySelector('select');
const choices = new Choices(element, {
    searchEnabled: false,
    itemSelectText: '',
    shouldSort: false,
    position: 'bottom'
});



(() => {
    new Accordion(".js-accordion-container", {
        openOnInit: [0]
    });
})();


document.querySelectorAll('.tabs-item').forEach(function (tabsBtn) {
    tabsBtn.addEventListener('click', function (e) {
        const path = e.currentTarget.dataset.path;
        document.querySelectorAll('.tabs-item').forEach(function (btn) {
            btn.classList.remove('tabs-item-active')
        });
        e.currentTarget.classList.add('tabs-item-active');
        document.querySelectorAll('.tab-content').forEach(function (tabsBtn) {
            tabsBtn.classList.remove('tab-content-active')
        });
        document.querySelector(`[data-target="${path}"]`).classList.add('tab-content-active');
    });
});


document.addEventListener("DOMContentLoaded", () => {
    let eventsSlider = new Swiper(".events__swiper", {
        direction: 'horizontal',
        slidesPerGroup: 1,
        slidesPerView: 1,
        spaceBetween: 20,

        breakpoints: {
            1360: {
                spaceBetween: 50,
                slidesPerView: 3,
                slidesPerGroup: 2,
            },
            992: {
                slidesPerView: 3,
                slidesPerGroup: 2,
                spaceBetween: 25,
            },
            577: {
                slidesPerView: 2,
                slidesPerGroup: 2,
                spaceBetween: 30,
            }
        },
        pagination: {
            el: '.swiper-pagination',
            clickable: true
        },
        navigation: {
            nextEl: '.events__swiper-button-next',
            prevEl: '.events__swiper-button-prev',
        },
    });
});


tippy('.js-tooltip', {
    theme: 'violet',
    maxWidth: 290,
});


document.addEventListener("DOMContentLoaded", () => {
    let projectsSlider = new Swiper(".projects__partners-swiper", {
        direction: 'horizontal',
        slidesPerGroup: 1,
        slidesPerView: 1,
        spaceBetween: 33,

        breakpoints: {
            1450: {
                spaceBetween: 50,
                slidesPerView: 3,
                slidesPerGroup: 3,
            },
            992: {
                slidesPerView: 2,
                slidesPerGroup: 2,
                spaceBetween: 50,
            },
            720: {
                slidesPerView: 2,
                slidesPerGroup: 2,
                spaceBetween: 33,
            }
        },
        navigation: {
            nextEl: '.partners-swiper-button-next',
            prevEl: '.partners-swiper-button-prev',
        },
    });
});
ymaps.ready(init);
function init() {
    const mapElem = document.querySelector('#map');
    const myMap = new ymaps.Map(
        "map",
        {
            center: [55.75846806898367, 37.60108849999989],
            zoom: 16,
            controls: ['geolocationControl', 'zoomControl']
        },
        {
            suppressMapOpenBlock: true,
            geolocationControlSize: "large",
            geolocationControlPosition: { top: "400px", right: "20px" },
            geolocationControlFloat: 'none',
            zoomControlSize: "small",
            zoomControlFloat: "none",
            zoomControlPosition: { top: "300px", right: "20px" }
        }
    );

    myMap.behaviors.disable('scrollZoom');

    const myPlacemark = new ymaps.Placemark(
        [55.75846806898367, 37.60108849999989],
        {},
        {
            iconLayout: "default#image",
            iconImageHref: "img/map.svg",
            iconImageSize: [20, 20],
            iconImageOffset: [-20, -40],
        }
    );

    myMap.geoObjects.add(myPlacemark);
    myMap.container.fitToViewport();
}


const selector = document.querySelector("input[type='tel']")
const im = new Inputmask("+7 (999) 999-99-99")
im.mask(selector);

const validation = new JustValidate('#form', {
    errorLabelStyle: {
        color: '#D11616',
        TextDecoder: 'underlined'
    },
});

validation
    .addField('#name', [
        {
            rule: 'required',
            errorMessage: 'Укажите ваше имя',
        },
        {
            rule: 'minLength',
            value: 2,
            errorMessage: 'Недопустимый формат',
        },
        {
            rule: 'maxLength',
            value: 30,
            errorMessage: 'Недопустимый формат',
        },
    ])

    .addField('#tel', [
        {
            rule: 'required',
            errorMessage: 'Укажите ваш телефон',
        },

        {
            validator: (value) => {
                const phone = selector.inputmask.unmaskedvalue()
                return Number(phone) && phone.length === 10;
            },
            errorMessage: 'Недопустимый формат',
        },
    ]);
