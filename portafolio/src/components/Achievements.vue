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

        <div class="container">
            <div class="achievements-card">
                <div class="container-trophy">
                <svg class="svg-icon" height="100" preserveAspectRatio="xMidYMid meet" viewBox="0 0 100 100" width="100" x="0" xmlns="http://www.w3.org/2000/svg" y="0">
                    <path d="M62.11,53.93c22.582-3.125,22.304-23.471,18.152-29.929-4.166-6.444-10.36-2.153-10.36-2.153v-4.166H30.099v4.166s-6.194-4.291-10.36,2.153c-4.152,6.458-4.43,26.804,18.152,29.929l5.236,7.777v8.249s-.944,4.597-4.833,4.986c-3.903,.389-7.791,4.028-7.791,7.374h38.997c0-3.347-3.889-6.986-7.791-7.374-3.889-.389-4.833-4.986-4.833-4.986v-8.249l5.236-7.777Zm7.388-24.818s2.833-3.097,5.111-1.347c2.292,1.75,2.292,15.86-8.999,18.138l3.889-16.791Zm-44.108-1.347c2.278-1.75,5.111,1.347,5.111,1.347l3.889,16.791c-11.291-2.278-11.291-16.388-8.999-18.138Z">
                    </path>
                </svg>  
                <div class="container__star">
                    
                    <div class="star-eight"></div>
                </div>
                
                <div></div></div>
                <h3 class="title-card">SENA Soft 2024</h3>
                <p class="subtitle-card">Gracias a la divulagacion de la competencia, puede presentar un cuestionario para participar en la categoria de desarrollo integral, en el cual tuve un resuktado favorable y cumpli requisitos para poarticipar en la categoria, dentro de la misma, forme equipo con dos personas maravillosas, con quienes nos adaptamos para desarrollar la solución que teniamos plateada, fue una competencia con duración de una semana, en donde implemetamos todas nuestras habilidades, como desarrolladores, luego, fuimos a la sede de globant en Cali, valle del cauca en donde presentamos nuestra solución al jurado de la empresa, gracias a nuestros conocimientos, esfuerzo y dedicación, ocupamos el primer lugar en la categoria</p>
            </div>
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
.container { 
   width: 800px;
   margin: 0 auto;
}
.achievements-card {
  position: relative;
  border: 2px solid #475569;
  background: rgba(30, 41, 59, 0.5);
  backdrop-filter: blur(10px);
  border-radius: 1rem;
  padding: 1.25rem;
  text-align: center;
}
.title-card{
    color: white;
    font-size: 1.5rem;
    padding-bottom: 1.5rem;
    border-bottom: 1px solid #475569;
}
.subtitle-card{
    color: rgb(187, 187, 187);
}

/* From Uiverse.io by Javierrocadev */ 
.container-trophy {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: 5em;
  font-weight: 900;
  color: #e10600;
  position: relative;
  transition: all 1s ease;
  text-align: center;
}

.container__star {
  transition: all .7s ease-in-out;
}

.first {
  position: absolute;
  top: 20px;
  left: 50px;
  transition: all .7s ease-in-out;
}

.svg-icon {
  position: absolute;
  fill: #e94822;
  z-index: 1;
}

.star-eight {
  background: #efd510;
  width: 150px;
  height: 150px;
  position: relative;
  text-align: center;
  animation: rot 3s  infinite;
}

.star-eight::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  height: 150px;
  width: 150px;
  background: #efd510;
  transform: rotate(135deg);
}

.container-trophy:hover .container__star {
  transform: rotateX(70deg) translateY(250px);
  box-shadow: 0px 0px 120px -100px #e4e727;
}

.container-trophy:hover .svg-icon {
  animation: grow 1s linear infinite;
}

@keyframes rot {
  0% {
    transform: rotate(0deg);
  }

  50% {
    transform: rotate(340deg);
  }

  100% {
    transform: rotate(0deg);
  }
}

@keyframes grow {
  0% {
    transform: rotate(0deg);
  }

  25% {
    transform: rotate(-5deg);
  }

  75% {
    transform: rotate(5deg);
  }

  100% {
    transform: scale(1) rotate(0deg);
  }
}
</style>