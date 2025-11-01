<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
import CardMoreInfoProyects from './Cards-More-Info/CardMoreInfoProyects.vue'

const svgReady = ref(false)
const lineWidth = ref(0)
const StackVisible = ref(false)

// Variable para controlar si el modal está visible o no
const isModalOpen = ref(false); 

// Variable para almacenar el objeto completo del proyecto seleccionado
const activeProject = ref(null); 

// Función para abrir el modal
const openModal = (project) => {
    activeProject.value = project;
    isModalOpen.value = true;
};

// Función para cerrar el modal
const closeModal = () => {
    isModalOpen.value = false;
    activeProject.value = null;
};

// Función para manejar el scroll y animar la línea
const handleScroll = () => {
    const scrollPosition = window.scrollY
    const windowHeight = window.innerHeight

    const maxScroll = windowHeight * 0.5
    const progress = Math.min(scrollPosition / maxScroll, 1)
    lineWidth.value = 200 + (680 * progress)

    const StackVisibleSection = document.querySelector('.tech-stack-section')
    if (StackVisibleSection) {
        const rect = StackVisibleSection.getBoundingClientRect()
        StackVisible.value = rect.top < windowHeight * 0.8
    }
}

onMounted(() => {
    svgReady.value = true
    window.addEventListener('scroll', handleScroll)
    handleScroll()
    setTimeout(() => {
        visible.value = true
    }, 100)
})

onUnmounted(() => {
    window.removeEventListener('scroll', handleScroll)
})

const visible = ref(false)

const projectsIcons = ref({
    iconPython: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg",
    iconFatApi: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/fastapi/fastapi-original.svg',
    iconJavaScript: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg',
    iconVueJs: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vuejs/vuejs-original.svg',
    iconReact: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg',
    iconMySQL: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original.svg',
    iconGit: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg',
    iconGithub: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg',
    iconDocker: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-original.svg',
    iconVite: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vitejs/vitejs-original.svg',
    iconSelenium: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/selenium/selenium-original.svg'
});

const projects = ref([
    {
        id: 1,
        title: 'Automatización Masiva de Inscripciones',
        description: 'Bot de automatización de ingreso repetitivo de usuarios a la APE (Agencia Publica de Empleo), con interfaz de escritorio.',
        icon: "https://i.postimg.cc/8Cv9fJXG/atomatizacion.png",
        techs: ['iconPython', 'iconSelenium'],
        color: '#68a063',
        category: 'Backend',
        github: 'https://github.com/SergioAndresG/inscritos_sena_ape',
    },
    {
        id: 2,
        title: 'Gestor de Formatos F-165',
        description: 'Aplicativo web encargado de generar y gestionar reportes f-165 (Etapa Productiva).',
        icon: "https://i.postimg.cc/26mgHG97/Captura-de-pantalla-2025-10-29-111936.png",
        techs: ['iconPython', 'iconVueJs', 'iconMySQL'],
        color: '#68a063',
        category: 'Full Stack',
        github: 'https://github.com/SergioAndresG/gestor-f165',
    },
    {
      id: 3,
      title: 'CoffeBike - Sistema POS para Cafetería',
      description: 'Aplicación full-stack para gestión de inventario, pedidos de los clientes y ventas',
      icon: 'https://i.postimg.cc/zvjWwxsB/Captura-de-pantalla-2025-10-30-171308.png',
      techs: ['iconPython', 'iconFatApi', 'iconVueJs', 'iconMySQL'],
      color: '#68a063',
      category: 'Full Stack',
      github: 'primeroorganizo el readme.com'
    }
]);
</script>

<template>
    <!-- Línea animada con scroll -->
    <div class="linea-container">
        <hr class="linea-scroll" :style="{ width: lineWidth + 'px' }">
    </div>

    <section class="tech-stack-section" :class="{'visible': StackVisible}"> 
        <!-- Header principal -->
        <div class="header" :class="{ visible }">
            <h2 class="title">Proyectos</h2>
            <p class="subtitle">
                Algunos proyectos en los que he trabajado
            </p>
        </div>

        <div class="container">
            <div class="project-grid">
                <div v-for="project in projects" :key="project.id" class="project-card">
                    <h3 class="project-title">{{ project.title }}</h3>
                    <div class="project-icon">
                        <img :src="project.icon" :alt="project.title" />
                    </div>
                    <p class="project-description">{{ project.description }}</p>
                    <div class="container-techs">
                        <img
                          v-for="tech in project.techs"
                          :key="tech"
                          :src="projectsIcons[tech]"
                          :alt="tech"
                          :title="tech.replace('icon', '')"
                          class="tech-icon">
                    </div>
                      
                    <div class="card-overlay">
                      <button class="buttom-modal" @click="openModal(project)">Más información</button>
                    </div>
                    
                </div>
            </div>
        </div>
    </section>

    <CardMoreInfoProyects 
        :show="isModalOpen" 
        :project="activeProject" 
        @close="closeModal"
    />
</template>

<style scoped>
.linea-superior {
  width: 200px;
  height: 2px;
  background-color: #fefff04d;
  border: none;
  margin: 17px auto 0 2rem;
  transition: width 0.3s ease;
}

.linea-container {
  display: flex;
  justify-content: center;
  margin-top: 5rem;
  padding: 0 2rem;
}

.linea-scroll {
  height: 2px;
  background: linear-gradient(90deg, 
    rgba(154, 154, 154, 0.2) 0%, 
    rgba(240, 248, 255, 0.6) 50%, 
    rgba(154, 154, 154, 0.2) 100%
  );
  border: none;
  transition: width 0.5s cubic-bezier(0.4, 0, 0.2, 1);
  max-width: 880px;
}

/* Header */
.header {
  text-align: center;
  margin-bottom: 4rem;
  opacity: 0;
  transform: translateY(-40px);
  transition: all 0.7s ease;
}

.header.visible {
  opacity: 1;
  transform: translateY(0);
}

.title {
  font-size: 3rem;
  font-weight: 700;
  color: white;
  margin-bottom: 1rem;
}

.subtitle {
  font-size: 1.25rem;
  color: #cbd5e1;
  transition-delay: 150ms;
}
.project-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr); 
  gap: 2rem;
  padding: 1.5rem;
  margin-bottom: 0;
  transition: border-color 0.3s ease;
}
.container {
  max-width: 1280px;
  margin: 0 auto;
  padding: 0 1.4rem;
  position: relative;
  z-index: 10;
  text-align: center;
}
.project-icon {
  position: relative;
  width: 100%;
  height: 280px;
  overflow: hidden;
  border-radius: 0.75rem;
  margin-bottom: 1.25rem;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2); 
}
.project-icon img{
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: all 0.7s cubic-bezier(0.25, 0.46, 0.45, 0.94);
  transform: scale(1);
  filter: brightness(0.85) contrast(1.05);
}
.project-card:hover .project-icon img {
  transform: scale(1.1) ;
  filter: brightness(1.05) contrast(1.1);
}
/* Brillo diagonal animado */
.project-icon::after {
  content: '';
  position: absolute;
  top: -50%;
  left: -100%;
  width: 50%;
  height: 200%;
  background: linear-gradient(
    90deg,
    transparent,
    rgba(255, 255, 255, 0.15),
    transparent
  );
  transform: skewX(-25deg);
  transition: left 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94);
}

/* Opcional: Borde brillante */
.project-icon::before {
  content: '';
  position: absolute;
  inset: 0;
  border: 2px solid transparent;
  border-radius: 1rem 1rem 0 0;
  background: linear-gradient(135deg, #44a2ff, #7d4af5) border-box;
  -webkit-mask: 
    linear-gradient(#fff 0 0) padding-box, 
    linear-gradient(#fff 0 0);
  -webkit-mask-composite: xor;
  mask-composite: exclude;
  opacity: 0;
  transition: opacity 0.3s ease;
}
.project-card:hover .project-icon::before {
  opacity: 1;
}
.project-card {
  position: relative;
  overflow: hidden;
  border: #475569 solid 2px;
  background: rgba(30, 41, 59, 0.5);
  border-radius: 1rem;
  padding: 1.5rem;
  transition: transform 0.3s ease-in-out;
}
.project-card:hover {
  transform: translateY(-8px);
}
.project-card:hover .card-overlay {
    opacity: 1;
  pointer-events: auto;
}
.project-card:hover .project-icon::after {
  left: 150%; /* ← El brillo cruza de izquierda a derecha */
}
.project-title {
  font-size: 1.5rem;
  font-weight: 600;
  color: #44a2ff;
  margin-top: 1.5rem;
}
.project-card:hover .project-title {
  color: #60b5ff;             
}

.project-description{
  font-size: 1rem;
  color: #cbd5e1;
  margin-top: 0.5rem;
  margin-bottom: 2rem;
  border-bottom: solid #475569 1px;
  padding-bottom: 1.5rem;
  min-height: 3.5rem;
}
.container-techs{
  width: 300px;
  display: flex;
  justify-content:left;
  margin-bottom: 1rem;
}
.tech-icon {
  width: 2rem;
  height: 2rem;
  margin: 0.5rem;
}
.card-overlay {
  inset: 0;
  opacity: 0;
  transition: opacity 0.3s ease;
  pointer-events: none;
  pointer-events: none;
}
.buttom-modal{
  font-weight: bold;
  border: none;
  position: relative;
  width: 150px;
  height: 50px;
  border-radius: 45px;
  border: none;
  background-color: #44a2ff;
  color: white;
  box-shadow: 0px 10px 10px rgb(60, 158, 255) inset,
  0px 5px 10px rgba(5, 5, 5, 0.212),
  0px -10px 10px rgb(58, 124, 255) inset;
  cursor: pointer;
  transform: translateY(10px);
  transition: all 0.3s ease 0.1s;
}
.project-card:hover .buttom-modal{
  transform: translateY(0);
}
.buttom-modal:hover{
  background-color: #4892f3;
  animation: jello-horizontal 0.9s both;
}
.buttom-modal::before {
  width: 70%;
  height: 2px;
  position: absolute;
  background-color: rgba(250, 250, 250, 0.678);
  content: "";
  filter: blur(1px);
  top: 7px;
  border-radius: 50%;
}
.buttom-modal::after {
  width: 70%;
  height: 2px;
  position: absolute;
  content: "";
  filter: blur(1px);
  bottom: 7px;
  border-radius: 50%;
}

@keyframes jello-horizontal {
  0% {
    transform: scale3d(1, 1, 1);
  }

  30% {
    transform: scale3d(1.25, 0.75, 1);
  }

  40% {
    transform: scale3d(0.75, 1.25, 1);
  }

  50% {
    transform: scale3d(1.15, 0.85, 1);
  }

  65% {
    transform: scale3d(0.95, 1.05, 1);
  }

  75% {
    transform: scale3d(1.05, 0.95, 1);
  }

  100% {
    transform: scale3d(1, 1, 1);
  }
}


@media (max-width: 1024px) {
  .project-grid {
    grid-template-columns: 1fr; /* ← 1 columna en tablet */
    gap: 1.5rem;
  }
}

@media (max-width: 768px) {
  .project-grid {
    grid-template-columns: 1fr;
  }
  
  .project-icon {
    height: 200px;              /* ← Imagen más pequeña en móvil */
  }
  
  .project-title {
    font-size: 1.25rem;
  }
  
  .container-techs {
    justify-content: center;    /* ← Centrar en móvil */
  }
}

</style>