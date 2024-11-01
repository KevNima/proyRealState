const header = document.querySelector("header");
const footer = document.querySelector("footer");

header.innerHTML = `
    <div>
        <a href="index.html">
            <img class="logo" src="images/ktm borde blanco.webp" alt="">
        </a>
    </div>
    <input type="checkbox" id="check">
    <label for="check" class="mostrar-menu">&#8801</label>
    <nav class="menu">
        <a href="index.html">Inicio</a>
        <a href="nosotros.html">Nosotros</a>
        <a href="cotizar.html">Cotizar</a>
        <a href="proyectos.html">Proyectos</a>
        <a href="contacto.html">Contáctanos</a>
        <label for="check" class="esconder-menu">&#215</label>
    </nav>
`;

footer.innerHTML = `
        <div class="footer-container">
            <div class="footer-section about">
                <h2><span>KTM</span> Inmobiliaria y Constructora</h2>
                <p>
                    Sumérgete en un mundo de oportunidades inmobiliarias. Descubre terrenos estratégicamente ubicados, cerca de las playas y de la ciudad, en un entorno campestre ideal para construir tu hogar o hacer una inversión. ¡Tu futuro comienza aquí!
                </p>
                <div class="social-icons">
                    <a href="https://facebook.com/KTMInmobiliariaPiura" target="_blank"><i
                            class="fa fa-facebook"></i></a>
                    <a href="https://www.instagram.com/ktminmobiliariapiura/" target="_blank"><i
                            class="fa fa-instagram"></i></a>
                    <a href="https://www.youtube.com/@KTMInmobiliariaConstructora" target="_blank"><i
                            class="fa fa-youtube-play"></i></a>
                    <!-- <a href="#" target="_blank"><i class="fa fa-envelope"></i></a> -->
                    <a href="https://www.tiktok.com/@ktminmobiliaria" target="_blank"><i class="fa fa-tiktok"></i></a>
                    <a href="https://www.linkedin.com/in/ktm-inmobiliaria-y-constructora-6629512a9/" target="_blank"><i class="fa fa-linkedin"></i></a>
                </div>
            </div>
            <div class="footer-section links">
                <h2>Páginas</h2>
                <ul>
                    <li><a href="index.html">Inicio</a></li>
                    <li><a href="nosotros.html">Nosotros</a></li>
                    <li><a href="cotizar.html">Cotizar</a></li>
                    <li><a href="proyectos.html">Proyectos</a></li>
                    <li><a href="contacto.html">Contáctanos</a></li>
                </ul>
            </div>
            <div class="footer-section links">
                <h2>Estilos de vida</h2>
                <ul>
                    <li><a href="#">Casas de campo</a></li>
                    <li><a href="#">Villas cerca al mar</a></li>
                    <li><a href="#">Zonas rústicas</a></li>
                    <li><a href="#">Terrenos campestres</a></li>
                </ul>
            </div>
            <div class="footer-section contact">
                <h2>Contáctanos</h2>
                <p>Dirección:</p>
                <p>AV. Chulucanas-Urb. Educadores Mz B lote 23 (Cerca a la UCV)</p>
                <p>Teléfono:</p>
                <p>+51 907 994 032</p>
                <p>Email:</p>
                <p>ktm-inmobiliaria@gmail.com</p>
            </div>
        </div>
`;


var swiper1 = new Swiper(".mySwiper-1", {
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    autoplay: {
        delay: 3000, // Cambia de diapositiva cada 3 segundos
        disableOnInteraction: false, // Permite que continúe el autoplay incluso después de interactuar con el carrusel
    },
});

var swiper2 = new Swiper(".mySwiper-2", {
    slidesPerView: 3,
    spaceBetween: 20,
    loop: true,
    loopFillGroupWithBlank: true,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    breakpoints: {
        0: {
            slidesPerView: 1,
        },
        520: {
            slidesPerView: 2,
        },
        950: {
            slidesPerView: 3,
        }
    },
    autoplay: {
        delay: 3000, // Cambia de diapositiva cada 3 segundos
        disableOnInteraction: false,
    },
});


//BANNER
const bg1 = document.querySelector('.banner-background.bg1');
const bg2 = document.querySelector('.banner-background.bg2');
const images = [
    'renders/1.webp',
    'renders/2.webp',
    'renders/imagen3.webp',
    'renders/imagen1.webp',
    'renders/imagen5.webp'
];
let currentImageIndex = 0;
let showingBg1 = true;

function changeBackground() {
    const nextImage = images[(currentImageIndex + 1) % images.length];
    
    if (showingBg1) {
        bg2.style.backgroundImage = `url(${nextImage})`;
        bg2.style.opacity = 1;     // Fade in bg2
        bg1.style.opacity = 0;     // Fade out bg1
    } else {
        bg1.style.backgroundImage = `url(${nextImage})`;
        bg1.style.opacity = 1;     // Fade in bg1
        bg2.style.opacity = 0;     // Fade out bg2
    }

    currentImageIndex = (currentImageIndex + 1) % images.length;
    showingBg1 = !showingBg1; // Alterna entre bg1 y bg2
}

// Cambia la imagen cada 3 segundos
setInterval(changeBackground, 3000);



// Títulos
const title1 = document.querySelector('.title1'); // Título actual
const title2 = document.querySelector('.title2'); // Título siguiente
const titles = [
    'Bienvenido a KTM',
    'Construyendo tus sueños',
    'Tu hogar, nuestra pasión',
    'Inversiones inteligentes',
    'Calidad y confianza'
]; // Array de títulos

let currentTitleIndex = 0;

function changeTitle() {
    const nextTitleIndex = (currentTitleIndex + 1) % titles.length; // Índice del siguiente título

    // Cambia el texto del segundo título
    title2.textContent = titles[nextTitleIndex]; 
    title2.classList.remove('hidden'); // Muestra el siguiente título

    // Fade out del título actual
    title1.style.opacity = 0; // Comienza el desvanecimiento del título actual

    // Espera el tiempo necesario para desvanecer y luego cambia el título
    setTimeout(() => {
        title1.textContent = titles[nextTitleIndex]; // Cambia el contenido del título actual
        title1.style.opacity = 1; // Vuelve a mostrar el título actual
        title2.classList.add('hidden'); // Oculta el título siguiente
    }, 2000); // Tiempo de espera para permitir que el título se desvanezca

    currentTitleIndex = nextTitleIndex; // Actualiza el índice actual
}

// Cambia el título cada 3 segundos
setInterval(changeTitle, 3000);