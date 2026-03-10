/* ========================================
   VTEX Dev Tools — Landing Page JS
   ======================================== */

document.addEventListener('DOMContentLoaded', () => {
  // -- i18n Translations --
  const translations = {
    es: {
      nav_tools: "Herramientas",
      nav_github: "GitHub",
      nav_downloads: "Descargas",
      hero_title: "Herramientas para desarrolladores <span class=\"hero__highlight\">VTEX IO</span>",
      hero_subtitle: "Un ecosistema de herramientas diseñadas para acelerar tu desarrollo, optimizar tu código y simplificar tus despliegues.",
      hero_btn_explore: "Explorar Herramientas",
      hero_btn_github: "Ver en GitHub",

      showcase_label: "Ecosistema",
      showcase_title: "Cuatro herramientas, un objetivo",
      showcase_init_title: "VTEX Init Helper",
      showcase_init_desc: "Inicializa tu entorno conectándose automáticamente con Jira y Bitbucket.",
      showcase_generator_title: "VTEX Landing Generator",
      showcase_generator_desc: "Generador visual drag & drop para construir estructuras de bloques VTEX IO y exportarlas como JSONC.",
      showcase_sanitizer_title: "VTEX CSS Sanitizer",
      showcase_sanitizer_desc: "Limpia y optimiza las hojas de estilo encontrando clases CSS huérfanas y blockClass sin uso.",
      showcase_deploy_title: "VTEX Deploy Helper",
      showcase_deploy_desc: "Automatiza los procesos de despliegue, publicación y actualización de versiones de custom apps.",
      showcase_link: "Ver destalles →",

      workflow_label: "Flujo de Trabajo",
      workflow_title: "Integración perfecta",
      workflow_init_title: "1. Inicializar",
      workflow_init_desc: "Prepara tu entorno, rama de Jira y linkea el workspace automáticamente.",
      workflow_build_title: "2. Construir",
      workflow_build_desc: "Crea layouts visualmente y exporta el código con el Landing Generator.",
      workflow_optimize_title: "3. Optimizar",
      workflow_optimize_desc: "Limpia tu CSS y asegura la calidad del código con el Sanitizer.",
      workflow_deploy_title: "4. Desplegar",
      workflow_deploy_desc: "Sube tus cambios a producción de forma segura con el Deploy Helper.",

      init_label: "CLI Tool",
      init_title: "VTEX Init Helper",
      init_desc_1: "Comienza tu tarea en segundos. Esta herramienta se conecta con Jira y Bitbucket para crear tu rama y workspace de prueba automáticamente resolviendo los links correspondientes.",
      init_desc_2: "Simplifica tu flujo inicial, asegurando que tu entorno esté correctamente linkeado y con las convenciones adecuadas listas para trabajar.",
      feat_init_1: "Generación automática de rama desde el ticket de Jira.",
      feat_init_2: "Creación y configuración del VTEX workspace de prueba.",
      feat_init_3: "Inclusión automática del link web en Jira.",

      generator_label: "Web App",
      generator_title: "VTEX Landing Generator",
      generator_desc_1: "Olvídate de escribir JSONC a mano. Construye tus landings de VTEX IO arrastrando y soltando componentes nativos en un canvas visual.",
      generator_desc_2: "Soporta flex-layout, responsive-layout, rich-text, imágenes y más. Configura las props interactivamente y copia el código listo para tu store-theme.",
      feat_gen_1: "Biblioteca de componentes nativos de VTEX IO.",
      feat_gen_2: "Editor de propiedades dinámico (propsSchema).",
      feat_gen_3: "Exportación a JSONC con un solo click.",
      btn_open_app: "Abrir Web App",

      sanitizer_label: "CLI + GUI",
      sanitizer_title: "VTEX CSS Sanitizer",
      sanitizer_desc_1: "Mantén tu proyecto limpio y performante. Analiza tu código para encontrar CSS huérfano y declaraciones blockClass sin uso real.",
      sanitizer_desc_2: "Disponible como herramienta de CLI para integrar en flujos continuos o como aplicación de escritorio con interfaz gráfica intuitiva.",
      feat_san_1: "Análisis bidireccional inteligente de estado (--isActive).",
      feat_san_2: "Limpieza interactiva guiada (CLI).",
      feat_san_3: "Generación de reportes Markdown detallados.",
      btn_dl_gui: "Descargar GUI App",

      deploy_label: "CLI Tool",
      deploy_title: "VTEX Deploy Helper",
      deploy_desc_1: "Una interfaz de línea de comandos diseñada para quitarle la fricción al proceso de publicación de nuevas custom apps y releases del store-theme.",
      deploy_desc_2: "Ejecuta de forma unificada patch releases, major releases (con migración de site-editor) y facilita la publicación de aplicaciones VTEX.",
      feat_dep_1: "Soporte para Patch y Major releases estables.",
      feat_dep_2: "Flujo simplificado para publicar nuevas custom apps.",
      feat_dep_3: "Verificaciones previas de manifest y directorios.",

      dl_label: "Descargas",
      dl_title: "Empieza a usarlas hoy",
      dl_desc: "Instala nuestras herramientas mediante npm o descarga los binarios de la GUI.",
      dl_npm: "Instala globalmente vía npm:",
      dl_gui_windows: "Aplicación de Escritorio - Windows",
      dl_gui_linux: "Aplicación de Escritorio - Linux",
      btn_dl_win: "Descargar .exe",
      btn_dl_linux: "Descargar .AppImage",
      dl_web: "Ejecutable desde el navegador en cualquier SO.",
      cta_label: "Open Source",
      cta_title: "Todo lo que necesitás para desarrollar en VTEX IO",
      cta_desc: "Cuatro herramientas, un objetivo. Todas de código abierto, sin costos y listas para usar.",
      cta_btn_github: "Ver en GitHub",
      cta_btn_tools: "Explorar herramientas",
    },
    en: {
      nav_tools: "Tools",
      nav_github: "GitHub",
      nav_downloads: "Downloads",
      hero_title: "Tools for <span class=\"hero__highlight\">VTEX IO</span> developers",
      hero_subtitle: "An ecosystem of tools designed to accelerate your development, optimize your code, and simplify your deployments.",
      hero_btn_explore: "Explore Tools",
      hero_btn_github: "View on GitHub",

      showcase_label: "Ecosystem",
      showcase_title: "Four tools, one goal",
      showcase_init_title: "VTEX Init Helper",
      showcase_init_desc: "Initialize your development environment by automatically connecting with Jira and Bitbucket.",
      showcase_generator_title: "VTEX Landing Generator",
      showcase_generator_desc: "Visual drag & drop generator to build VTEX IO block structures and export them as JSONC.",
      showcase_sanitizer_title: "VTEX CSS Sanitizer",
      showcase_sanitizer_desc: "Cleans and optimizes stylesheets by finding orphaned CSS classes and unused blockClasses.",
      showcase_deploy_title: "VTEX Deploy Helper",
      showcase_deploy_desc: "Automates deployment, publishing, and version updating processes for custom apps.",
      showcase_link: "View details →",

      workflow_label: "Workflow",
      workflow_title: "Seamless integration",
      workflow_init_title: "1. Initialize",
      workflow_init_desc: "Prepare your environment, Jira branch, and automatically link your workspace.",
      workflow_build_title: "2. Build",
      workflow_build_desc: "Create layouts visually and export the code with the Landing Generator.",
      workflow_optimize_title: "3. Optimize",
      workflow_optimize_desc: "Clean your CSS and ensure code quality with the Sanitizer.",
      workflow_deploy_title: "4. Deploy",
      workflow_deploy_desc: "Push your changes to production safely with the Deploy Helper.",

      init_label: "CLI Tool",
      init_title: "VTEX Init Helper",
      init_desc_1: "Start your task in seconds. This tool connects with Jira and Bitbucket to create your branch and test workspace automatically while resolving the corresponding links.",
      init_desc_2: "Simplify your initial workflow, ensuring your environment is properly linked and follows the right conventions ready for work.",
      feat_init_1: "Automatic branch generation from Jira ticket.",
      feat_init_2: "Creation and configuration of the VTEX test workspace.",
      feat_init_3: "Automatic inclusion of the web link in Jira.",

      generator_label: "Web App",
      generator_title: "VTEX Landing Generator",
      generator_desc_1: "Forget writing JSONC by hand. Build your VTEX IO landings by dragging and dropping native components onto a visual canvas.",
      generator_desc_2: "Supports flex-layout, responsive-layout, rich-text, images, and more. Configure props interactively and copy code ready for your store-theme.",
      feat_gen_1: "Native VTEX IO component library.",
      feat_gen_2: "Dynamic property editor (propsSchema).",
      feat_gen_3: "One-click JSONC export.",
      btn_open_app: "Open Web App",

      sanitizer_label: "CLI + GUI",
      sanitizer_title: "VTEX CSS Sanitizer",
      sanitizer_desc_1: "Keep your project clean and performant. Analyze your codebase to find orphaned CSS and blockClass declarations with no real usage.",
      sanitizer_desc_2: "Available as a CLI tool to integrate into continuous workflows or as a desktop application with an intuitive graphical interface.",
      feat_san_1: "Smart bidirectional state analysis (--isActive).",
      feat_san_2: "Guided interactive cleanup (CLI).",
      feat_san_3: "Detailed Markdown report generation.",
      btn_dl_gui: "Download GUI App",

      deploy_label: "CLI Tool",
      deploy_title: "VTEX Deploy Helper",
      deploy_desc_1: "A command-line interface designed to remove friction from the process of publishing new custom apps and store-theme releases.",
      deploy_desc_2: "Perform patch releases, major releases (with site-editor migration), and easily publish VTEX applications in a unified way.",
      feat_dep_1: "Support for stable Patch and Major releases.",
      feat_dep_2: "Simplified flow for publishing new custom apps.",
      feat_dep_3: "Pre-checks for manifest and directories.",

      dl_label: "Downloads",
      dl_title: "Start using them today",
      dl_desc: "Install our tools easily via npm or download the GUI binaries.",
      dl_npm: "Install globally via npm:",
      dl_gui_windows: "Desktop App - Windows",
      dl_gui_linux: "Desktop App - Linux",
      btn_dl_win: "Download .exe",
      btn_dl_linux: "Download .AppImage",
      dl_web: "Runnable from the browser on any OS.",
      cta_label: "Open Source",
      cta_title: "Everything you need to build on VTEX IO",
      cta_desc: "Four tools, one goal. All open source, free, and ready to use.",
      cta_btn_github: "View on GitHub",
      cta_btn_tools: "Explore tools",
    }
  };

  let currentLang = localStorage.getItem('vtex-dev-tools-lang') || 'es';
  const langToggleBtn = document.getElementById('langToggle');
  const langTextSpan = document.getElementById('langText');

  function applyLanguage(lang) {
    document.documentElement.lang = lang;
    document.querySelectorAll('[data-i18n]').forEach(el => {
      const key = el.getAttribute('data-i18n');
      if (translations[lang] && translations[lang][key]) {
        el.innerHTML = translations[lang][key];
      }
    });
    langTextSpan.textContent = lang === 'es' ? 'EN' : 'ES';
  }

  applyLanguage(currentLang);

  if (langToggleBtn) {
    langToggleBtn.addEventListener('click', () => {
      currentLang = currentLang === 'es' ? 'en' : 'es';
      localStorage.setItem('vtex-dev-tools-lang', currentLang);
      applyLanguage(currentLang);
    });
  }

  //npm versions
  function fetchNPMVersion(packetName, elId) {
    const el = document.getElementById(elId);
    if (!el) return;
    fetch(`https://registry.npmjs.org/${packetName}/latest`)
      .then(res => res.json())
      .then(data => {
        if (data && data.version) {
          el.textContent = `npm v${data.version}`;
        }
      })
      .catch(err => console.error(`Error fetching npm version for ${packetName}:`, err));
  }

  fetchNPMVersion('vtex-css-sanitizer-cli', 'npmVersionSanitizer');
  fetchNPMVersion('vtex-deploy-helper', 'npmVersionDeploy');
  fetchNPMVersion('vtex-init-helper', 'npmVersionInit');

  // Versión del landing generator (no está en npm, se lee del package.json del repo)
  const generatorVersionEl = document.getElementById('versionGenerator');
  if (generatorVersionEl) {
    fetch('https://raw.githubusercontent.com/emanueleelias/vtex-landing-generator/main/package.json')
      .then(res => res.json())
      .then(data => {
        if (data && data.version) {
          generatorVersionEl.textContent = `v${data.version}`;
        }
      })
      .catch(() => { generatorVersionEl.style.display = 'none'; });
  }

  // Copy buttons
  function setupCopyButton(blockId, btnId) {
    const block = document.getElementById(blockId);
    const btn = document.getElementById(btnId);
    if (!block || !btn) return;

    btn.addEventListener('click', () => {
      const code = block.querySelector('code');
      if (!code) return;

      const text = code.textContent.trim();
      navigator.clipboard.writeText(text).then(() => {
        block.classList.add('copied');
        setTimeout(() => block.classList.remove('copied'), 2000);
      });
    });
  }

  // Setup multiple copy blocks if present
  const copyBlocks = document.querySelectorAll('.copy-block');
  copyBlocks.forEach((block, index) => {
    const btnId = `copyBtn-${index}`;
    const blockId = `copyBlock-${index}`;
    block.id = blockId;
    const btn = block.querySelector('.copy-block__btn');
    if (btn) {
      btn.id = btnId;
      setupCopyButton(blockId, btnId);
    }
  });

  // Reveal
  const reveals = document.querySelectorAll('.reveal');
  if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15, rootMargin: '0px 0px -40px 0px' }
    );
    reveals.forEach((el) => observer.observe(el));
  } else {
    reveals.forEach((el) => el.classList.add('visible'));
  }

  // Smooth scroll
  document.querySelectorAll('a[href^="#"]').forEach((link) => {
    link.addEventListener('click', (e) => {
      const targetId = link.getAttribute('href');
      if (targetId === '#') return;

      const target = document.querySelector(targetId);
      if (target) {
        e.preventDefault();
        const navHeight = document.querySelector('.nav')?.offsetHeight || 64;
        const top = target.getBoundingClientRect().top + window.scrollY - navHeight;
        window.scrollTo({ top, behavior: 'smooth' });
      }
    });
  });

  // Carousel logic
  const carousels = document.querySelectorAll('.carousel');

  carousels.forEach(carousel => {
    const track = carousel.querySelector('.carousel__track');
    const slides = Array.from(track.children);
    const nextButton = carousel.querySelector('.carousel__btn--next');
    const prevButton = carousel.querySelector('.carousel__btn--prev');
    const dotsNav = carousel.querySelector('.carousel__dots');
    const dots = Array.from(dotsNav.children);

    let currentIndex = 0;

    const updateCarousel = (index) => {
      // Move track
      track.style.transform = `translateX(-${index * 100}%)`;

      // Update dots
      dots.forEach(dot => dot.classList.remove('active'));
      dots[index].classList.add('active');

      currentIndex = index;
    };

    nextButton.addEventListener('click', () => {
      let nextIndex = currentIndex + 1;
      if (nextIndex >= slides.length) nextIndex = 0;
      updateCarousel(nextIndex);
    });

    prevButton.addEventListener('click', () => {
      let prevIndex = currentIndex - 1;
      if (prevIndex < 0) prevIndex = slides.length - 1;
      updateCarousel(prevIndex);
    });

    dotsNav.addEventListener('click', e => {
      const targetDot = e.target.closest('button');
      if (!targetDot) return;

      const targetIndex = parseInt(targetDot.getAttribute('data-index'));
      updateCarousel(targetIndex);
    });
  });

  // Lightbox logic
  const lightbox = document.getElementById('lightbox');
  const lightboxTrack = document.getElementById('lightboxTrack');
  const lightboxDots = document.getElementById('lightboxDots');
  const lightboxClose = document.getElementById('lightboxClose');
  const lightboxPrev = document.getElementById('lightboxPrev');
  const lightboxNext = document.getElementById('lightboxNext');
  let lightboxIndex = 0;
  let lightboxSlides = [];

  function openLightbox(carousel, startIndex) {
    // Clone images from the clicked carousel
    const images = carousel.querySelectorAll('.carousel__slide');
    lightboxTrack.innerHTML = '';
    lightboxDots.innerHTML = '';
    lightboxSlides = [];

    images.forEach((img, i) => {
      const clone = document.createElement('img');
      clone.src = img.src;
      clone.alt = img.alt;
      lightboxTrack.appendChild(clone);
      lightboxSlides.push(clone);

      const dot = document.createElement('button');
      dot.className = 'carousel__dot' + (i === startIndex ? ' active' : '');
      dot.setAttribute('data-index', i);
      dot.setAttribute('aria-label', `Slide ${i + 1}`);
      lightboxDots.appendChild(dot);
    });

    lightboxIndex = startIndex;
    lightboxTrack.style.transform = `translateX(-${startIndex * 100}%)`;
    lightbox.classList.add('active');
    document.body.style.overflow = 'hidden';
  }

  function closeLightbox() {
    lightbox.classList.remove('active');
    document.body.style.overflow = '';
  }

  function updateLightbox(index) {
    lightboxTrack.style.transform = `translateX(-${index * 100}%)`;
    const dots = lightboxDots.querySelectorAll('.carousel__dot');
    dots.forEach(d => d.classList.remove('active'));
    if (dots[index]) dots[index].classList.add('active');
    lightboxIndex = index;
  }

  // Click on carousel slides to open lightbox
  carousels.forEach(carousel => {
    const slides = carousel.querySelectorAll('.carousel__slide');
    slides.forEach((slide, index) => {
      slide.addEventListener('click', () => {
        openLightbox(carousel, index);
      });
    });
  });

  // Lightbox controls
  lightboxClose.addEventListener('click', closeLightbox);

  lightbox.addEventListener('click', (e) => {
    if (e.target === lightbox) closeLightbox();
  });

  lightboxNext.addEventListener('click', () => {
    let next = lightboxIndex + 1;
    if (next >= lightboxSlides.length) next = 0;
    updateLightbox(next);
  });

  lightboxPrev.addEventListener('click', () => {
    let prev = lightboxIndex - 1;
    if (prev < 0) prev = lightboxSlides.length - 1;
    updateLightbox(prev);
  });

  lightboxDots.addEventListener('click', (e) => {
    const dot = e.target.closest('button');
    if (!dot) return;
    updateLightbox(parseInt(dot.getAttribute('data-index')));
  });

  // Keyboard navigation
  document.addEventListener('keydown', (e) => {
    if (!lightbox.classList.contains('active')) return;
    if (e.key === 'Escape') closeLightbox();
    if (e.key === 'ArrowRight') {
      let next = lightboxIndex + 1;
      if (next >= lightboxSlides.length) next = 0;
      updateLightbox(next);
    }
    if (e.key === 'ArrowLeft') {
      let prev = lightboxIndex - 1;
      if (prev < 0) prev = lightboxSlides.length - 1;
      updateLightbox(prev);
    }
  });
});
