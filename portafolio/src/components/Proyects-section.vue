<script setup lang="ts">
import { icon } from '@fortawesome/fontawesome-svg-core'
import { ref, onMounted, onUnmounted } from 'vue'
import CardMoreInfoProyects from './Card-More-Info-Proyects.vue'

const svgReady = ref(false)
const lineWidth = ref(0)
const StackVisible = ref(false)

const modalAbierto = ref(false)

// Función para manejar el scroll y animar la línea
const handleScroll = () => {
const scrollPosition = window.scrollY
const windowHeight = window.innerHeight

// Calcular el ancho de la línea basado en el scroll
// La línea crece de 200px a 880px (55rem = 880px)
const maxScroll = windowHeight * 0.5 // Crece hasta la mitad de la primera pantalla
const progress = Math.min(scrollPosition / maxScroll, 1)
lineWidth.value = 200 + (680 * progress) // De 200px a 880px

// Detectar si la sección "Sobre Mi" está visible
const StackVisibleSection = document.querySelector('.tech-stack-section')
if (StackVisibleSection) {
    const rect = StackVisibleSection.getBoundingClientRect()
    StackVisible.value = rect.top < windowHeight * 0.8
}
}

onMounted(() => {
    svgReady.value = true
    window.addEventListener('scroll', handleScroll)
    handleScroll() // Llamar una vez al montar
    setTimeout(() => {
        visible.value = true
    }, 100)
})

onUnmounted(() => {
window.removeEventListener('scroll', handleScroll)
})
const visible = ref(false)


const projects = ref([
    {
        title: 'Automatización Web',
        description: 'Bot de automatización de ingreso repetitivo de usuarios a la APE (Agencia Publica de Empleo), con interfaz de escritorio. Proceso que redujo el tiempo manual en un 80%.',
        icon: "https://i.postimg.cc/8Cv9fJXG/atomatizacion.png",
        technologies: ['Python', 'Selenium', 'PyInstaller'],
        color: '#68a063',
        category: 'Backend',
        github: 'https://github.com/SergioAndresG/inscritos_sena_ape',

    },
        {
        title: 'Gestor de Formatos F-165',
        description:  'Aplicativo web encargado de generar y gestionar reportes f-165 (Etapa Productiva).',
        icon: "https://i.postimg.cc/26mgHG97/Captura-de-pantalla-2025-10-29-111936.png' border='0' alt='Captura-de-pantalla-2025-10-29-111936",
        technologies: ['Python', 'Vue.js', 'MySQL'],
        color: '#68a063',
        category: 'Full Stack',
        github: 'https://github.com/SergioAndresG/inscritos_sena_ape',
    },
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
            <div v-for="project in projects" class="project-card">
                <h3 class="project-title">{{ project.title }}</h3>
                  <div class="project-icon">
                    <img :src="project.icon" :alt="project.title" />
                  </div>
                <p class="project-description">{{ project.description }}</p>
                <button @click="modalAbierto = true">Mas información</button>

                <CardMoreInfoProyects v-model="modalAbierto"/>

            </div>
        </div>
      </div>


  </section>

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
  gap: 1rem;
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
  height: 250px;
  overflow: hidden;
  border-radius: 1rem 1rem 1rem 1rem;
  margin-bottom: 1rem;
}
.project-icon img{
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: all 0.7s cubic-bezier(0.25, 0.46, 0.45, 0.94);
  transform: scale(1);
  filter: brightness(0.9);
}
.project-card:hover .project-icon img {
  transform: scale(1.12) translateY(-5px);
  filter: brightness(1.05);
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
.project-card:hover .project-icon::after {
  left: 150%; /* ← El brillo cruza de izquierda a derecha */
}

/* Opcional: Borde brillante */
.project-icon::before {
  content: '';
  position: absolute;
  inset: 0;
  border: 2px solid transparent;
  border-radius: 1rem 1rem 0 0;
  background: linear-gradient(135deg, #3b82f6, #8b5cf6) border-box;
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
  border: #475569 solid 2px;
  border-radius: 1rem;
  padding: 1rem;
}
.project-title {
  font-size: 1.7rem;
  font-weight: 600;
  color: #44a2ff;
  margin-top: 1.5rem;
}
.project-description{
  font-size: 1rem;
  color: #cbd5e1;
  margin-top: 0.5rem;
}
</style>