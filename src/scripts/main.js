// ============================================================
// Apartado: Inicialización principal al cargar el documento
// ============================================================

document.addEventListener("DOMContentLoaded", () => {
    inicializarMenuResponsive();
    inicializarEnlaceActivoNavbar();
});


// ============================================================
// Apartado: Menú responsive fullscreen para móvil y tablet
// ============================================================

function inicializarMenuResponsive() {
    const menuToggle = document.getElementById("menuToggle");
    const navMenu = document.getElementById("navMenu");
    const body = document.body;

    if (!menuToggle || !navMenu) {
        return;
    }

    menuToggle.addEventListener("click", () => {
        const menuActivo = navMenu.classList.toggle("is-active");

        body.classList.toggle("menu-open", menuActivo);
        menuToggle.setAttribute("aria-expanded", menuActivo ? "true" : "false");
        menuToggle.textContent = menuActivo ? "✕" : "☰";
    });

    const navLinks = navMenu.querySelectorAll("a");

    navLinks.forEach((link) => {
        link.addEventListener("click", () => {
            navMenu.classList.remove("is-active");
            body.classList.remove("menu-open");
            menuToggle.setAttribute("aria-expanded", "false");
            menuToggle.textContent = "☰";
        });
    });

    window.addEventListener("resize", () => {
        if (window.innerWidth > 980) {
            navMenu.classList.remove("is-active");
            body.classList.remove("menu-open");
            menuToggle.setAttribute("aria-expanded", "false");
            menuToggle.textContent = "☰";
        }
    });
}


// ============================================================
// Apartado: Resaltar enlace activo en la navbar al hacer scroll
// ============================================================

function inicializarEnlaceActivoNavbar() {
    const sections = document.querySelectorAll("section[id]");
    const navLinks = document.querySelectorAll(".navbar__links a");

    if (!sections.length || !navLinks.length) {
        return;
    }

    window.addEventListener("scroll", () => {
        let currentSectionId = "";

        sections.forEach((section) => {
            const sectionTop = section.offsetTop - 120;
            const sectionHeight = section.offsetHeight;

            if (
                window.scrollY >= sectionTop &&
                window.scrollY < sectionTop + sectionHeight
            ) {
                currentSectionId = section.getAttribute("id");
            }
        });

        navLinks.forEach((link) => {
            link.classList.remove("is-active");

            const href = link.getAttribute("href");

            if (href === `#${currentSectionId}`) {
                link.classList.add("is-active");
            }
        });
    });
}