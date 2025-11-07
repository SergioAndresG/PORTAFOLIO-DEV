<script setup lang="ts">
import Header from '../components/Header.vue'
import AboutMe from '../components/AboutMe.vue'
import StackSection from '../components/StackSection.vue'
import ProyectsSection from '../components/ProyectSection.vue'
import WorkExperience from '../components/WorkExperience.vue'
import Achievements from '../components/Achievements.vue'
import ContactMe from '../components/ContactMe.vue'


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
          <font-awesome-icon :icon="['fab', 'linkedin']" />      
        </a>
        <a href="https://www.instagram.com/dres.hp?utm_source=qr&igsh=ZmcydTV2a2E4aXBz" class="social-link instagram">
          <font-awesome-icon :icon="['fab', 'instagram']" />      
        </a> 
        <a href="https://github.com/SergioAndresG/" class="social-link github">
          <font-awesome-icon :icon="['fab', 'github']" />      
        </a> 
      </div>
    </div>


    <!-- Contenedor para la imagen -->
    <div class="imagen-container">
      <img src="../assets/images/ImagenPor.png" alt="Sergio Garcia" class="imagen">
    </div>
  </div>

  <AboutMe />
  <StackSection />
  <ProyectsSection />
  <WorkExperience /> 
  <Achievements />
  <ContactMe />


</template>

<style scoped>
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
  color: #44a2ff;
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
  margin-left: 15rem;
  padding: 1rem;
  margin-top: 1rem;
}

.redes-container svg {
  color: #d0d0d0;
  width: 65px;
}

.redes-container a {
  position:  relative;
  text-decoration: none;
  display: inline-block;
  padding-bottom: 5px;
}

.redes-container a svg {
  font-size: 30px;
  opacity: 0;
  transform: translateY(20px);
  animation: aparecer-redes 1.2s 3s ease-out forwards;
  transition: all 0.3s ease-in-out;
}

.redes-container a svg:hover {
  scale: 1.1;
  text-shadow: rgba(255, 255, 255, 0.25) 0px 25px 50px -12px;
}

/* Estado NORMAL: Línea invisible y con escala horizontal a cero */
.redes-container a::after {
  content: ""; /* Obligatorio */
  position: absolute; /* Para posicionarla */
  bottom: -5px; /* Coloca la línea en la parte inferior del enlace */
  left: 0; /* Empieza desde la izquierda */
  right: 0; /* Y termina en la derecha */
  height: 2px; /* Grosor de la línea */
  background-color: white; /* Color de la línea */
  /* CLAVE PARA EL EFECTO: */
  transform: scaleX(0); /* Inicialmente, la escala horizontal es CERO (invisible) */
  transform-origin: center; /* La transformación parte del CENTRO */
  transition: transform 0.3s ease-out; /* Animación suave solo para el 'transform' */
}
/* Muestra y anima la línea */
.redes-container a:hover::after {
  transform: scaleX(0.5);
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