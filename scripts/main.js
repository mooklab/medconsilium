new Swiper('section.services div.swiper', {
    slidesPerView: 1,
    spaceBetween: '10px',
    autoHeight: true,
    watchSlidesProgress: true,
    navigation: {
        prevEl: 'section.services div.swiper-navigation div.arrow:first-child',
        nextEl: 'section.services div.swiper-navigation div.arrow:last-child',
    },
    pagination: {
        el: 'section.services div.swiper-pagination-custom',
        clickable: true
    },
    breakpoints: {
        640: {
            slidesPerView: 2,
            spaceBetween: '15px',
            autoHeight: false,
        },
        1080: {
            slidesPerView: 3,
            spaceBetween: '30px',
            autoHeight: false,
        }
    }
})

new Swiper('section.doctors div.swiper', {
    slidesPerView: 1,
    spaceBetween: '10px',
    autoHeight: true,
    watchSlidesProgress: true,
    navigation: {
        prevEl: 'section.doctors div.swiper-navigation div.arrow:first-child',
        nextEl: 'section.doctors div.swiper-navigation div.arrow:last-child',
    },
    pagination: {
        el: 'section.doctors div.swiper-pagination-custom',
        clickable: true
    },
    breakpoints: {
        640: {
            slidesPerView: 2,
            spaceBetween: '15px',
            autoHeight: false,
        },
        960: {
            slidesPerView: 3,
            spaceBetween: '30px',
            autoHeight: false,
        },
        1280: {
            slidesPerView: 4,
            spaceBetween: '30px',
            autoHeight: false,
        }
    }
})

new Swiper('section.another div.swiper', {
    slidesPerView: 1,
    spaceBetween: '10px',
    autoHeight: true,
    watchSlidesProgress: true,
    navigation: {
        prevEl: 'section.another div.swiper-navigation div.arrow:first-child',
        nextEl: 'section.another div.swiper-navigation div.arrow:last-child',
    },
    pagination: {
        el: 'section.another div.swiper-pagination-custom',
        clickable: true
    },
    breakpoints: {
        640: {
            slidesPerView: 2,
            spaceBetween: '15px',
            autoHeight: false,
        },
        960: {
            slidesPerView: 3,
            spaceBetween: '30px',
            autoHeight: false,
        },
        1280: {
            slidesPerView: 4,
            spaceBetween: '30px',
            autoHeight: false,
        }
    },
    on: {
        init ( swiper ) {
            640 > window.innerWidth ? swiper.disable() : swiper.enable()
        },
        resize ( swiper ) {
            640 > window.innerWidth ? swiper.disable() : swiper.enable()
        }
    }
})