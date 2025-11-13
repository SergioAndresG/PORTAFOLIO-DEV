<script setup lang="ts">
    import { ref, onMounted, onUnmounted } from 'vue'

    const svgReady = ref(false)
    const lineWidth = ref(0)
    const aboutMeVisible = ref(false)

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
    const aboutMeSection = document.querySelector('.about-me-container')
    if (aboutMeSection) {
        const rect = aboutMeSection.getBoundingClientRect()
        aboutMeVisible.value = rect.top < windowHeight * 0.8
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
  <section class="about-me-container">
      <!-- Línea animada con scroll -->
      <div class="linea-container"  id="about-me">
          <hr class="linea-scroll" :style="{ width: lineWidth + 'px' }">
      </div>
      <!-- Header -->
      <div class="header" :class="{ 'visible': aboutMeVisible }">
        <h2 class="title enfasis-azul">Sobre Mi</h2>
      </div>

      <div class="about-content"  >
          <p>
              ¡Hola!, soy Sergio Andrés, Tecnólogo en Análisis y Desarrollo de Software.
          </p>
          <p>
              Para mí, el desarrollo es mucho más que escribir código, es dar vida a <span class="enfasis">soluciones que mejoran la vida de las personas.</span> 
          </p>
          <p> 
              Tengo experiencia en desarrollo web, <span class="enfasis">Full-Stack</span> creando proyectos donde la lógica y el diseño se 
              unen para lograr experiencias funcionales y atractivas.
              Fuera del código, soy una persona <span class="enfasis">colaborativa</span>, <span class="enfasis">empática</span> y 
              <span class="enfasis">aprendo rápido</span>.
          </p>
          <p>
              Me gusta trabajar en equipo, conocer a las 
              personas detrás de cada proyecto y aprender de ellas,
              creo que las mejores soluciones nacen del entendimiento y las ideas compartida.
          </p>
      </div>
  </section>
</template>

<style scoped>
/* === LÍNEAS DIVISORAS === */
.linea-container {
  display: flex;
  justify-content: center;
  margin-top: 10rem;
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
/* === HEADER === */
.header {
  text-align: center;
  margin-bottom: 5rem;
  opacity: 0;
  transform: translateY(-40px);
  transition: all 0.7s ease;
}

.header.visible {
  opacity: 1;
  transform: translateY(0);
}

.title {
  font-size: clamp(2rem, 5vw, 3rem);
  font-weight: 700;
  color: white;
  margin-bottom: 1rem;
}
/* === SECCIÓN SOBRE MÍ === */
.about-me-container {
  text-align: left;
  transition: opacity 1s ease, transform 1s ease;
}

.about-me-container.visible {
  opacity: 1;
  transform: translateY(0);
}

.about-me {
  color: #ffffff;
  font-size: clamp(3rem, 4vw, 5rem);
  font-weight: 900;
  letter-spacing: 1px;
  text-align: center;
  overflow-wrap: break-word;
  word-wrap: break-word;
}

.about-content {
  color: #D0D0D0;
  font-size: clamp(1rem, 2vw, 1.2rem);
  line-height: 1.4;
  max-width: 800px;
  margin: 0 auto;
}

.enfasis-azul {
  color: #59acff;
}

.enfasis {
  color: #e8e8e8;
  font-weight: bolder;
}

.about-content p {
  margin-bottom: 2rem;
}

@media (max-width: 768px) {
  .about-me-container{
    max-width: 100%;
    padding: 0 1rem;
  }
}
</style>