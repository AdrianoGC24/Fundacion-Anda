/* ================================================
   FUNDACIÓN EN DEFENSA DEL ANCIANO "ANDA"
   script.js — JavaScript principal
   ================================================ */

/* ---- Menú hamburguesa (mobile) ---- */
const hamburger = document.getElementById('hamburger');
const navLinks  = document.getElementById('nav-links');

if (hamburger && navLinks) {
    hamburger.addEventListener('click', () => {
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
}

/* ---- Ver más / Ver menos en secciones de contenido ---- */
// Esta función se puede usar en cualquier página.
// Cómo usarla en el HTML:
//   <button class="btn-toggle" onclick="toggleContent(this, 'mi-seccion')">
//     <i class="fa-solid fa-chevron-down"></i> Ver más
//   </button>
//   <div id="mi-seccion" class="hidden">...contenido extra...</div>

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

/* ---- Resaltar el link activo en el navbar ---- */
// Compara la URL de cada link con la página actual y agrega la clase "active"
document.querySelectorAll('.nav-links a').forEach(link => {
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    const linkPage    = link.getAttribute('href');

    if (linkPage === currentPage) {
        link.classList.add('active');
    }

    // Caso especial: si estamos en la raíz, marcar "Inicio"
    if ((currentPage === '' || currentPage === '/') && linkPage === 'index.html') {
        link.classList.add('active');
    }
});