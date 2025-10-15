<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
import Header from '../components/Header.vue'

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
  <Header></Header>
  
  <!-- Línea divisora superior -->
  <hr class="linea-superior">

  <!-- Hero Section -->
  <div class="hero-container">
    <!-- Contenedor para el texto -->
    <div class="texto-container">
      <svg class="nombre-outline-svg" viewBox="0 0 900 220" xmlns="http://www.w3.org/2000/svg">
        <text x="50%" y="50%" text-anchor="middle" dominant-baseline="middle">
          SERGIO
        </text>
      </svg>
      
      <h2 class="nombre-solido">GARCIA</h2>
      <p class="dev">Desarrollador de Software</p>
    </div>

    <!-- Contenedor para la imagen -->
    <div class="imagen-container">
      <img src="../assets/images/ImagenPortafolio.jpg" alt="Sergio Garcia" class="imagen">
    </div>
  </div>

  <!-- Línea animada con scroll -->
  <div class="linea-container">
    <hr class="linea-scroll" :style="{ width: lineWidth + 'px' }">
  </div>

  <!-- Sección Sobre Mi -->
  <section class="about-me-container" :class="{ 'visible': aboutMeVisible }">
    <h2 class="about-me">Sobre Mí</h2>
    <div class="about-content">
      <p>Aquí va tu descripción personal...</p>
    </div>
  </section>
</template>

<style scoped>
/* === LÍNEAS DIVISORAS === */
.linea-superior {
  width: 200px;
  height: 2px;
  background-color: rgba(240, 248, 255, 0.3);
  border: none;
  margin: 17px auto 0 2rem;
  transition: width 0.3s ease;
}

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

/* === HERO SECTION === */
.hero-container {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  gap: 4rem;
  margin-top: 8rem;
  padding: 0 2rem;
  max-width: 1400px;
  margin-left: auto;
  margin-right: auto;
}

.texto-container {
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  min-width: 0;
  position: relative;
}

.nombre-outline-svg {
  width: 100%;
  max-width: 700px;
  height: auto;
  overflow: visible;
}

.nombre-outline-svg text {
  font-size: 174px;
  font-weight: 900;
  fill: none;
  stroke: rgba(154, 154, 154, 0.6);
  stroke-width: 3;
  letter-spacing: -7px;
  stroke-dasharray: 2000;
  stroke-dashoffset: 2000;
  animation: dibujar-trazo 4s ease-in-out forwards;
}

.nombre-solido {
  font-size: clamp(4rem, 10vw, 10rem);
  background: linear-gradient(10deg, #616161, #ffffff);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  letter-spacing: 1px;
  margin-top: -6rem;
  margin-left: 3rem;
  user-select: none;
  opacity: 0;
  transform: translateX(100px);
  font-weight: 900;
  animation: aparecer-solido 1.8s 1.8s ease-out forwards;
}

.dev {
  font-size: clamp(1.1rem, 1.5vw, 1.8rem);
  color: #adadad;
  letter-spacing: 2px;
  text-transform: uppercase;
  margin-top: -6rem;
  margin-left: 3.5rem;
  user-select: none;
  opacity: 0;
  transform: translateY(-20px);
  font-weight: 300;
  animation: aparecer-dev 1.2s 3s ease-out forwards;
}

/* === IMAGEN === */
.imagen-container {
  flex-shrink: 0;
  opacity: 0;
  transform: translateX(50px);
  animation: aparecer-imagen 1.5s 2.5s ease-out forwards;
}

.imagen {
  height: 500px;
  width: 500px;
  object-fit: cover;
  border-radius: 20%;
  border: 2px solid #616161;
  padding: 3px;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.imagen:hover {
  transform: scale(1.02);
  box-shadow: 0 15px 40px rgba(154, 154, 154, 0.4);
}

/* === SECCIÓN SOBRE MÍ === */
.about-me-container {
  margin-top: 15rem;
  padding: 4rem 2rem;
  max-width: 1200px;
  margin-left: auto;
  margin-right: auto;
  text-align: center;
  opacity: 0;
  transform: translateY(50px);
  transition: opacity 1s ease, transform 1s ease;
}

.about-me-container.visible {
  opacity: 1;
  transform: translateY(0);
}

.about-me {
  color: #ffffff;
  font-size: clamp(3rem, 5vw, 5rem);
  font-weight: 900;
  margin-bottom: 2rem;
  letter-spacing: -1px;
}

.about-content {
  color: #adadad;
  font-size: clamp(1rem, 2vw, 1.2rem);
  line-height: 1.8;
  max-width: 800px;
  margin: 0 auto;
}

/* === ANIMACIONES === */
@keyframes dibujar-trazo {
  to {
    stroke-dashoffset: 0;
  }
}

@keyframes aparecer-solido {
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

@keyframes aparecer-dev {
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes aparecer-imagen {
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

/* === RESPONSIVE === */
@media (max-width: 1200px) {
  .hero-container {
    gap: 2rem;
  }
  
  .imagen {
    height: 400px;
    width: 400px;
  }
  
  .linea-scroll {
    max-width: 600px;
  }
}

@media (max-width: 992px) {
  .hero-container {
    flex-direction: column;
    align-items: center;
    margin-top: 4rem;
  }
  
  .texto-container {
    align-items: center;
  }
  
  .nombre-solido,
  .dev {
    margin-left: 0;
    text-align: center;
  }
  
  .nombre-solido {
    margin-top: -4rem;
  }
  
  .imagen {
    height: 400px;
    width: 400px;
    margin-top: 2rem;
  }
  
  .linea-scroll {
    max-width: 90%;
  }
}

@media (max-width: 576px) {
  .nombre-outline-svg text {
    font-size: 80px;
  }
  
  .nombre-solido {
    font-size: 3rem;
  }
  
  .dev {
    font-size: 1rem;
  }
  
  .imagen {
    height: 300px;
    width: 300px;
  }
  
  .linea-superior,
  .linea-scroll {
    width: 150px;
    max-width: 80%;
  }
}
</style>