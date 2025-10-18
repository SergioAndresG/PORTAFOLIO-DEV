<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
import Header from '../components/Header.vue'
import { icon } from '@fortawesome/fontawesome-svg-core'
import { fab, faLinkedin } from '@fortawesome/free-brands-svg-icons'

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
          <div class="redes-container">
      <a href="https://www.linkedin.com/in/sergio-garcia-232b86335/">
        <font-awesome-icon :icon="['fab', 'linkedin']"  size="100px"/>      
      </a>
      <a href="https://www.instagram.com/dres.hp?utm_source=qr&igsh=ZmcydTV2a2E4aXBz">
        <font-awesome-icon :icon="['fab', 'instagram']"  />      
      </a> 
      <a href="https://github.com/SergioAndresG/">
        <font-awesome-icon :icon="['fab', 'github']"  />      
      </a> 
    </div>
    </div>




    <!-- Contenedor para la imagen -->
    <div class="imagen-container">
      <img src="../assets/images/ImagenPor.png" alt="Sergio Garcia" class="imagen">
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
        <p>
            Soy Sergio Andrés, Tecnólogo en Análisis y Desarrollo de Software, y me emociona la idea de que “Lo que se puede imaginar, se puede programar”. <br>
        </p>

        <p>
            Para mí, el desarrollo es mucho más que escribir código: es dar vida a soluciones que mejoran la vida de las personas. 
        </p>

        <p> 
            Tengo experiencia autónoma en desarrollo web Full Stack, creando proyectos donde la lógica y el diseño se 
            unen para lograr experiencias funcionales y atractivas.
            Fuera del código, soy una persona colaborativa, empática y 
            comprometida. 
        </p>

        <p>
            Disfruto trabajar en equipo, conocer a las 
            personas detrás de cada proyecto y aprender de ellas, porque 
            creo que las mejores soluciones nacen del entendimiento y la pasión compartida.
        </p>
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
  color: #1E90FF;
  letter-spacing: 2px;
  text-transform: uppercase;
  margin-top: -6rem;
  margin-left: 8.5rem;
  user-select: none;
  opacity: 0;
  transform: translateY(-20px);
  font-weight: 300;
  animation: 
        aparecer-dev 1.2s 3s ease-out forwards,
        flotar 2.3s ease-in-out infinite alternate;
  transition: all 0.3s ease-in-out;
}

.dev:hover{
  text-shadow: 0 0 5px #616161;
  color: #d0d0d0;
  scale: 1.03;
}

.redes-container {
  display: flex;
  margin-left: 16rem;
  padding: 1rem;
  margin-top: 1rem;
}

.redes-container svg {
  color: #d0d0d0;
  width: 50px;
}

.redes-container a svg {
  font-size: 30px;
  opacity: 0;
  transform: translateY(20px);
  animation: aparecer-redes 1.2s 3s ease-out forwards;
}

/* === IMAGEN === */
.imagen-container {
  flex-shrink: 0;
  position: relative;
  opacity: 0;
  transform: translateY(40px);
  animation: aparecer-imagen 1.5s 2.5s ease-out forwards;
}

.imagen {
  position: relative;
  left: -5rem;
  height: 390px;
  width: 395px;
  object-fit: cover;
  border-radius: 50%;
  border: 2px solid #616161;
  padding: 1px;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.imagen:hover {
  transform: scale(1.02);
  box-shadow: 0 15px 40px rgba(154, 154, 154, 0.4);
}

/* === SECCIÓN SOBRE MÍ === */
.about-me-container {
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
  font-size: clamp(3rem, 4vw, 5rem);
  font-weight: 900;
  margin-bottom: 4rem;
  letter-spacing: 1px;
}

.about-content {
  color: #adadad;
  font-size: clamp(1rem, 2vw, 1.2rem);
  line-height: 1.8;
  max-width: 800px;
  margin: 0 auto;
}

.about-content p {
  margin-bottom: 2rem;

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

@keyframes aparecer-redes {
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes flotar {
  0% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-3px);
  }
  100% {
    transform: translateY(0px);
  }
}

@keyframes aparecer-imagen {
  to {
    opacity: 1;
    transform: translateY(0);
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