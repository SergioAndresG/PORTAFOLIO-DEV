<script setup lang="ts">
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
})

onUnmounted(() => {
window.removeEventListener('scroll', handleScroll)
})

const visible = ref(false)

onMounted(() => {
  setTimeout(() => {
    visible.value = true
  }, 100)
})

</script>


<template>
  <!-- Línea animada con scroll -->
  <div class="linea-container">
    <hr class="linea-scroll" :style="{ width: lineWidth + 'px' }">
  </div>

  <section class="experinece-section" :class="{'visible': StackVisible}">
    <div class="container">
        <!-- Header principal -->
      <div class="header" :class="{ visible }">
        <h2 class="title">Experiencia</h2>
        <p class="subtitle">
          Lugares en los que he crecido porfesionalmente y como persona
        </p>
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

.experience-section {
  position: relative;
  padding: 1rem 0;
  overflow: hidden;
  min-height: 100vh;
}
/* Container */
.container {
  max-width: 1280px;
  margin: 0 auto;
  padding: 0 1.4rem;
  position: relative;
  z-index: 10;
  text-align: center;
  
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
</style>