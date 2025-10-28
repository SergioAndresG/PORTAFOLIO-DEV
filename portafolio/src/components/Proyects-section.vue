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
})

onUnmounted(() => {
window.removeEventListener('scroll', handleScroll)
})
</script>

<template>
      <!-- Línea animada con scroll -->
  <div class="linea-container">
    <hr class="linea-scroll" :style="{ width: lineWidth + 'px' }">
  </div>
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
</style>