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
});
