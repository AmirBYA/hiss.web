/*!
* Start Bootstrap - Grayscale v7.0.6 (https://startbootstrap.com/theme/grayscale)
* Copyright 2013-2023 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-grayscale/blob/master/LICENSE)
*/
//
// Scripts
// 

window.addEventListener('DOMContentLoaded', event => {

    // Navbar shrink function
    var navbarShrink = function () {
        const navbarCollapsible = document.body.querySelector('#mainNav');
        if (!navbarCollapsible) {
            return;
        }
        if (window.scrollY === 0) {
            navbarCollapsible.classList.remove('navbar-shrink')
        } else {
            navbarCollapsible.classList.add('navbar-shrink')
        }

    };

    // Shrink the navbar 
    navbarShrink();

    // Shrink the navbar when page is scrolled
    document.addEventListener('scroll', navbarShrink);

    // Activate Bootstrap scrollspy on the main nav element
    const mainNav = document.body.querySelector('#mainNav');
    if (mainNav) {
        new bootstrap.ScrollSpy(document.body, {
            target: '#mainNav',
            rootMargin: '0px 0px -40%',
        });
    };

    // Collapse responsive navbar when toggler is visible
    const navbarToggler = document.body.querySelector('.navbar-toggler');
    const responsiveNavItems = [].slice.call(
        document.querySelectorAll('#navbarResponsive .nav-link')
    );
    responsiveNavItems.map(function (responsiveNavItem) {
        responsiveNavItem.addEventListener('click', () => {
            if (window.getComputedStyle(navbarToggler).display !== 'none') {
                navbarToggler.click();
            }
        });
    });

});

document.addEventListener('DOMContentLoaded', function() {
    // انتخاب المان‌ها با پیشوند اختصاصی
    const gallery = document.querySelector('.custom-gallery-2023');
    const slides = gallery.querySelectorAll('.cg-slide-2023');
    const prevBtn = gallery.querySelector('.cg-prev-2023');
    const nextBtn = gallery.querySelector('.cg-next-2023');
    const dots = gallery.querySelectorAll('.cg-dot-2023');
    
    let currentIndex = 0;
    
    // تابع نمایش اسلاید
    function showSlide(index) {
        // بررسی محدوده معتبر
        if (index < 0) index = slides.length - 1;
        if (index >= slides.length) index = 0;
        
        // مخفی کردن همه اسلایدها
        slides.forEach(slide => {
            slide.classList.remove('active');
        });
        
        // غیرفعال کردن همه نقاط
        dots.forEach(dot => {
            dot.classList.remove('active');
        });
        
        // نمایش اسلاید جدید
        slides[index].classList.add('active');
        dots[index].classList.add('active');
        currentIndex = index;
    }
    
    // رویدادهای کلیک
    nextBtn.addEventListener('click', () => showSlide(currentIndex + 1));
    prevBtn.addEventListener('click', () => showSlide(currentIndex - 1));
    
    // رویداد کلیک برای نقاط
    dots.forEach(dot => {
        dot.addEventListener('click', () => {
            const index = parseInt(dot.getAttribute('data-cg-index'));
            showSlide(index);
        });
    });
    
    // شروع با اسلاید اول
    showSlide(0);
});

document.addEventListener('DOMContentLoaded', function() {
    const track = document.querySelector('.gallery-track');
    const items = document.querySelectorAll('.gallery-item');
    const prevBtn = document.querySelector('.prev-btn');
    const nextBtn = document.querySelector('.next-btn');
    
    let currentIndex = 0;
    const itemWidth = items[0].offsetWidth + 20; // عرض آیتم + گپ
    
    // تابع برای اسکرول به آیتم خاص
    function scrollToItem(index) {
        if (index < 0) index = 0;
        if (index > items.length - 1) index = items.length - 1;
        
        currentIndex = index;
        const scrollAmount = currentIndex * itemWidth;
        track.style.transform = `translateX(-${scrollAmount}px)`;
        
        // غیرفعال کردن دکمه‌ها در ابتدا و انتها
        prevBtn.disabled = currentIndex === 0;
        nextBtn.disabled = currentIndex >= items.length - Math.floor(track.offsetWidth / itemWidth);
    }
    
    // رویداد کلیک برای دکمه بعدی
    nextBtn.addEventListener('click', function() {
        scrollToItem(currentIndex + 1);
    });
    
    // رویداد کلیک برای دکمه قبلی
    prevBtn.addEventListener('click', function() {
        scrollToItem(currentIndex - 1);
    });
    
    // اسکرول با موس
    let isDown = false;
    let startX;
    let scrollLeft;
    
    track.addEventListener('mousedown', (e) => {
        isDown = true;
        startX = e.pageX - track.offsetLeft;
        scrollLeft = track.scrollLeft;
    });
    
    track.addEventListener('mouseleave', () => {
        isDown = false;
    });
    
    track.addEventListener('mouseup', () => {
        isDown = false;
    });
    
    track.addEventListener('mousemove', (e) => {
        if(!isDown) return;
        e.preventDefault();
        const x = e.pageX - track.offsetLeft;
        const walk = (x - startX) * 2;
        track.scrollLeft = scrollLeft - walk;
    });
    
    // اسکرول لمسی برای دستگاه‌های لمسی
    track.addEventListener('touchstart', (e) => {
        isDown = true;
        startX = e.touches[0].pageX - track.offsetLeft;
        scrollLeft = track.scrollLeft;
    });
    
    track.addEventListener('touchend', () => {
        isDown = false;
    });
    
    track.addEventListener('touchmove', (e) => {
        if(!isDown) return;
        const x = e.touches[0].pageX - track.offsetLeft;
        const walk = (x - startX) * 2;
        track.scrollLeft = scrollLeft - walk;
    });
    
    // مقداردهی اولیه
    scrollToItem(0);
});

