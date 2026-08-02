/* ================================================
   FUNDACIÓN EN DEFENSA DEL ANCIANO "ANDA"
   app.js — JavaScript principal
   ================================================ */

document.addEventListener('DOMContentLoaded', () => {
    /* ---- Menú hamburguesa (mobile) ---- */
    const hamburger = document.getElementById('hamburger');
    const navLinks  = document.getElementById('nav-links');

    if (hamburger && navLinks) {
        hamburger.addEventListener('click', (e) => {
            e.stopPropagation();
            navLinks.classList.toggle('open');
            hamburger.classList.toggle('open');
        });

        // Cierra el menú al hacer clic en un link
        navLinks.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                navLinks.classList.remove('open');
                hamburger.classList.remove('open');
            });
        });

        // Cierra el menú al hacer clic fuera del header
        document.addEventListener('click', (e) => {
            if (navLinks.classList.contains('open')) {
                if (!hamburger.contains(e.target) && !navLinks.contains(e.target)) {
                    navLinks.classList.remove('open');
                    hamburger.classList.remove('open');
                }
            }
        });
    }

    /* ---- Resaltar el link activo en el navbar ---- */
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    document.querySelectorAll('.nav-links a').forEach(link => {
        const linkPage = link.getAttribute('href');
        if (linkPage === currentPage || (currentPage === '' && linkPage === 'index.html')) {
            link.classList.add('active');
        }
    });
});

/* ---- Ver más / Ver menos en secciones de contenido ---- */
function toggleContent(btn, sectionId) {
    const section = document.getElementById(sectionId);
    if (!section) return;

    const isHidden = section.classList.contains('hidden');

    if (isHidden) {
        section.classList.remove('hidden');
        btn.innerHTML = '<i class="fa-solid fa-chevron-up"></i> Ver menos';
    } else {
        section.classList.add('hidden');
        btn.innerHTML = '<i class="fa-solid fa-chevron-down"></i> Ver más';
    }
}