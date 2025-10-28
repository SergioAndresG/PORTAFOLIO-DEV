<script setup lang="ts">
import { icon } from '@fortawesome/fontawesome-svg-core'
import { ref, onMounted, onUnmounted } from 'vue'

const svgReady = ref(false)
const lineWidth = ref(0)
const StackVisible = ref(false)

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


const proyects = ref([
    {
        title: 'Automatización Web',
        description: 'Bot de automatización de ingreso repetitivo de usuarios a la APE (Agencia Publica de Empleo), con interfaz de escritorio. Proceso que redujo el tiempo manual en un 80%.',
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg",
        technologies: ['Python', 'Selenium', 'PyInstaller'],
        color: '#68a063',
        category: 'Backend',
        github: 'https://github.com/SergioAndresG/inscritos_sena_ape',

    },
        {
        title: 'Gestor de Formatos F-165',
        description: 'Bot de automatización de ingreso repetitivo de usuarios a la APE (Agencia Publica de Empleo), con interfaz de escritorio. Proceso que redujo el tiempo manual en un 80%.',
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg",
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
        <div class="proyect-grid">
            <div v-for="proyect in proyects" class="proyect-card">
                <h3 class="proyect-title">{{ proyect.title }}</h3>
                <p class="proyect-description">{{ proyect.description }}</p>
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
.proyect-grid {
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
.proyect-card {
    position: relative;
    border: #475569 solid 2px;
    border-radius: 1rem;
}
.proyect-title {
  font-size: 1.7rem;
  font-weight: 600;
  color: #44a2ff;
  margin-top: 1.5rem;
}
.proyect-description{
  font-size: 1rem;
  color: #cbd5e1;
  margin-top: 0.5rem;
}



</style>