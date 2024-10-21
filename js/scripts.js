/*!
* Start Bootstrap - Agency v7.0.12 (https://startbootstrap.com/theme/agency)
* Copyright 2013-2023 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-agency/blob/master/LICENSE)
*/
//
// Scripts
// 
document.getElementById('input').addEventListener('change',()=>{
    const sections = document.querySelectorAll('.page-section');
    const footer = document.querySelector('footer');
    sections.forEach(section=>{
        if(section.className.indexOf('dark')===-1){
            section.classList.add('dark');
        }
        else{
            section.classList.remove('dark');
        }
        // Cambia el color y fondo de los h2 y h3 dentro de las secciones
        const headingsH2 = section.querySelectorAll('h2');
        const headingsH3 = section.querySelectorAll('h3');
        
        headingsH2.forEach(h2 => {
            if (section.classList.contains('dark')) {
                h2.style.color = 'white';  // Cambia el texto a blanco
                h2.style.backgroundColor = 'black';  // Cambia el fondo a negro
            } else {
                h2.style.color = 'black';  // Vuelve al color original
                h2.style.backgroundColor = 'white';  // Vuelve al fondo original
            }
        });
        
        headingsH3.forEach(h3 => {
            if (section.classList.contains('dark')) {
                h3.style.color = 'white';  // Cambia el texto a blanco
                h3.style.backgroundColor = 'black';  // Cambia el fondo a negro
            } else {
                h3.style.color = 'black';  // Vuelve al color original
                h3.style.backgroundColor = 'white';  // Vuelve al fondo original
            }
        });
    })
    // Cambia el fondo y texto del footer
    if (footer.className.indexOf('dark') === -1) {
        footer.classList.add('dark');
    } else {
        footer.classList.remove('dark');
    }
})

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

    //  Activate Bootstrap scrollspy on the main nav element
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
