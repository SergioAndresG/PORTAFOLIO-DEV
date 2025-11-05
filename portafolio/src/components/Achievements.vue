<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'

const svgReady = ref(false)
const lineWidth = ref(0)
const achievementVisible = ref(false)


// Función para manejar el scroll y animar la línea
const handleScroll = () => {
  const offStart = 100
  const windowHeight = window.innerHeight

  // Detectar si la sección "Stack" está visible
  const stackSection = document.querySelector('.achivemnets-section')

  if (stackSection) {
    const rect = stackSection.getBoundingClientRect()

    achievementVisible.value = rect.top < windowHeight * 0.8


    if ((rect.top + offStart) < windowHeight && rect.bottom > 0) {
      // La seccion esta visible
      const sectionProgress = Math.max(0, Math.min(1,
        (windowHeight - rect.top) / (windowHeight * 0.5)
      ))

      lineWidth.value = 200 + ( 680 * sectionProgress )
    } else if (rect.top >= windowHeight){
      lineWidth.value = 0
    } else {
      lineWidth.value = 800
    }
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
    <section class="achivemnets-section">
        <!--Linea divisora-->
        <div class="linea-container">
            <hr class="linea-scroll" :style="{ width:lineWidth + 'px'  }">
        </div>

        <div class="header" :class="{ 'visible': achievementVisible }">
            <h2 class="title">Logros</h2>
            <p class="subtitle">
                 Logros en mi carrera como Dev
            </p>
        </div>



    </section>

</template>

<style scoped>
.linea-container{
    display: flex;
    justify-content: center;
    padding: 0 2rem;
}
.linea-scroll{
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