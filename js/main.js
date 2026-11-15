/**
 * ValoVibes - Landing Page Scripts
 * Desarrollo de Sistemas Web (Front End) - IFTS29
 * Team: Héroes del Código (CodeHeroes)
 */

document.addEventListener('DOMContentLoaded', () => {
  console.log('ValoVibes Landing Page iniciada con éxito.');

  // Inicialización de Mermaid para renderizar diagramas de flujo con la paleta de ValoVibes
  if (window.mermaid) {
    mermaid.initialize({
      startOnLoad: true,
      theme: 'base',
      themeVariables: {
        darkMode: true,
        background: 'transparent',
        fontFamily: "'Segoe UI', Roboto, -apple-system, sans-serif",
        fontSize: '13px',
        primaryColor: '#1c2b38',
        primaryTextColor: '#ece8e1',
        primaryBorderColor: '#00f0ff',
        lineColor: '#00f0ff',
        secondaryColor: '#172430',
        tertiaryColor: '#0f1923',
        edgeLabelBackground: '#0f1923',
        textColor: '#ece8e1',
        mainBkg: '#1c2b38',
        nodeBorder: '#00f0ff',
        arrowheadColor: '#00f0ff'
      },
      flowchart: {
        useMaxWidth: true,
        htmlLabels: true,
        curve: 'basis',
        nodeSpacing: 18,
        rankSpacing: 28,
        padding: 8
      }
    });
  }

  // Smooth scroll para enlaces internos de navegación
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      const targetId = this.getAttribute('href');
      if (targetId === '#') return;
      
      const targetElement = document.querySelector(targetId);
      if (targetElement) {
        e.preventDefault();
        targetElement.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    });
  });

  // Manejo de detalles desplegables (opcional: cerrar otros al abrir uno)
  const detailElements = document.querySelectorAll('.custom-details');
  detailElements.forEach(detail => {
    detail.addEventListener('toggle', () => {
      if (detail.open) {
        // Efecto sutil al abrir
        detail.style.borderColor = 'rgba(255, 70, 85, 0.6)';
      } else {
        detail.style.borderColor = '';
      }
    });
  });

  // Modal README (carga README.md)
  const readmeModal = document.getElementById('readme-modal');
  const openReadmeBtn = document.getElementById('open-readme');

  if (readmeModal && openReadmeBtn) {
    const closeButtons = readmeModal.querySelectorAll('[data-close-modal]');
    const closeBtn = readmeModal.querySelector('.modal-close');
    const content = document.getElementById('readme-content');
    let loaded = false;

    const loadReadme = async () => {
      if (loaded) return;
      try {
        const res = await fetch('assets/README.md');
        if (!res.ok) throw new Error(`HTTP ${res.status}`);
        const text = await res.text();
        content.innerHTML = marked.parse(text);

        content.querySelectorAll('a[href^="http"]').forEach(a => {
          a.target = '_blank';
          a.rel = 'noopener noreferrer';
        });
        loaded = true;
      } catch (err) {
        console.error('No se pudo cargar el README:', err);
        content.textContent = 'No se pudo cargar el README. Si abriste el HTML con doble clic, probalo con Live Server o desde Vercel.';
      }
    };

    const openModal = (e) => {
      e.preventDefault();
      readmeModal.hidden = false;
      document.body.classList.add('modal-open');
      closeBtn.focus();
      loadReadme();
    };

    const closeModal = () => {
      readmeModal.hidden = true;
      document.body.classList.remove('modal-open');
      openReadmeBtn.focus();
    };

    openReadmeBtn.addEventListener('click', openModal);
    closeButtons.forEach(btn => btn.addEventListener('click', closeModal));

    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && !readmeModal.hidden) closeModal();
    });
  }

  // =========================================================================
  // Cursor Personalizado: Mira de Valorant de Alto Rendimiento (60 / 120 FPS)
  // =========================================================================
  const crosshair = document.getElementById('valorant-crosshair');
  if (crosshair && window.matchMedia('(pointer: fine)').matches) {
    let mouseX = -100;
    let mouseY = -100;
    let isVisible = false;

    // Captura continua y pasiva de coordenadas del ratón (sin recalcular layout)
    window.addEventListener('mousemove', (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      if (!isVisible) {
        isVisible = true;
        crosshair.style.opacity = '1';
      }
    }, { passive: true });

    // Ocultar si el puntero abandona la ventana
    document.addEventListener('mouseleave', () => {
      crosshair.style.opacity = '0';
      isVisible = false;
    });

    document.addEventListener('mouseenter', () => {
      crosshair.style.opacity = '1';
      isVisible = true;
    });

    // Bucle acelerado por GPU con requestAnimationFrame
    function renderCrosshair() {
      if (isVisible) {
        crosshair.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0)`;
      }
      requestAnimationFrame(renderCrosshair);
    }
    requestAnimationFrame(renderCrosshair);

    // Animación de disparo/retroceso al hacer clic
    window.addEventListener('mousedown', () => {
      crosshair.classList.add('crosshair-click');
    });

    window.addEventListener('mouseup', () => {
      crosshair.classList.remove('crosshair-click');
    });

    // Feedback táctico sobre elementos interactivos
    const interactiveElements = document.querySelectorAll('a, button, input, textarea, select, .custom-summary, .team-card, .btn, .modal-close');
    interactiveElements.forEach(el => {
      el.addEventListener('mouseenter', () => crosshair.classList.add('crosshair-hover'));
      el.addEventListener('mouseleave', () => crosshair.classList.remove('crosshair-hover'));
    });
  }
});

const navLinks = document.querySelector('.nav-links');
const navScroll = document.querySelector('.nav-scroll');

if (navLinks && navScroll) {
  const updateNavArrow = () => {
    const sinScroll = navLinks.scrollWidth <= navLinks.clientWidth;
    const alFinal = navLinks.scrollLeft + navLinks.clientWidth >= navLinks.scrollWidth - 2;
    navScroll.classList.toggle('at-end', sinScroll || alFinal);
  };

  navLinks.addEventListener('scroll', updateNavArrow, { passive: true });
  window.addEventListener('resize', updateNavArrow);
  updateNavArrow();
}
