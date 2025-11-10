<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'


const svgReady = ref(false)
const lineWidth = ref(0)
const ExperienceVisible = ref(false)

const experiences = ref([
  {
    position: 'Desarrollador Full Stack',
    company: 'SENA - Centro de Biotecnología Agropecuaria',
    location: ' 📍Mosquera Cundinamarca, Colombia',
    period: '04/2025 - 10/2025',
    type: 'project',
    typeLabel: 'Presencial',
    logo: 'https://senaterritorium.com/wp-content/uploads/logo-sena-verde-complementario.webp', 
    description: 'Desarrollo de aplicación web para la gestión de formatos F-165 de etapa productiva, digitalizando el 100% del proceso.',
    achievements: [
      'Implementé sistema de autenticación JWT con roles de usuario',
      'Desarrollé middleware personalizado para prevenir XSS e inyección SQL',
      'Integré firma digital en tiempo real dentro de la aplicación',
      'Automaticé la limpieza de datos obsoletos mediante jobs programados'
    ],
    technologies: ['Vue.js', 'FastAPI', 'MySQL', 'Docker', 'JWT']
  },
])

// Función para manejar el scroll y animar la línea
const handleScroll = () => {
  const offStart = 100
  const windowHeight = window.innerHeight

  // Detectar si la sección "Stack" está visible
  const experienceSection = document.querySelector('.experience-section')

  if (experienceSection) {
    const rect = experienceSection.getBoundingClientRect()

    ExperienceVisible.value = rect.top < windowHeight * 0.8


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
  <section class="experience-section">
    <!-- Línea divisora -->
    <div class="linea-container">
      <hr class="linea-scroll" :style="{ width: lineWidth + 'px' }">
    </div>

    <!-- Header -->
    <div class="header" :class="{ 'visible': ExperienceVisible }">
      <h2 class="title">Experiencia Laboral</h2>
      <p class="subtitle">
        Mi trayectoria profesional
      </p>
    </div>

    <!-- Efectos de fondo -->
    <div class="background-effects">
      <div class="blob blob-1"></div>
      <div class="blob blob-2"></div>
    </div>

    <div class="container">
      <!-- Timeline -->
      <div class="timeline">
        <div 
          v-for="(exp, index) in experiences" 
          :key="index"
          class="timeline-item"
          :class="{ 'right': index % 2 === 0, 'left': index % 2 !== 0 }"
        >
          <!-- Punto en la línea -->
          <div class="timeline-dot"></div>

          <!-- Contenido -->
          <div class="timeline-content">
            <!-- Fecha -->
            <span class="timeline-date">{{ exp.period }}</span>

            <!-- Card de experiencia -->
            <div class="experience-card">
              <!-- Logo de la empresa (opcional) -->
              <div class="company-logo" v-if="exp.logo">
                <img :src="exp.logo" :alt="exp.company" />
              </div>

              <!-- Puesto -->
              <h3 class="job-title">{{ exp.position }}</h3>

              <!-- Empresa + Ubicación -->
              <div class="company-info">
                <span class="company-name">
                  {{ exp.company }}
                </span>
                <span class="location" v-if="exp.location">
                  {{ exp.location }}
                </span>
              </div>

              <!-- Tipo de empleo -->
              <span class="job-type" :class="exp.type">
                {{ exp.typeLabel }}
              </span>

              <!-- Descripción -->
              <p class="job-description">{{ exp.description }}</p>

              <!-- Logros -->
              <ul class="achievements" v-if="exp.achievements">
                <li v-for="achievement in exp.achievements" :key="achievement">
                   {{ achievement }}
                </li>
              </ul>

              <!-- Tecnologías usadas -->
              <div class="tech-stack">
                <span 
                  v-for="tech in exp.technologies" 
                  :key="tech"
                  class="tech-badge"
                >
                  {{ tech }}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
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
/* Efectos de fondo */
.background-effects {
  position: absolute;
  inset: 0;
  opacity: 0.2;
  pointer-events: none;
}

.blob {
  position: absolute;
  border-radius: 50%;
  filter: blur(80px);
}
.blob-1 {
  top: 10rem;
  left: 7rem;
  width: 18rem;
  height: 18rem;
  background: #a855f7;
  animation: float 8s ease-in-out infinite;
}
.blob-2 {
  bottom: 5rem;
  right: 2.5rem;
  width: 24rem;
  height: 24rem;
  background: #3b82f6;
  animation: float 10s ease-in-out infinite reverse;
}
@keyframes float {
  0%, 100% { transform: translate(0, 0) scale(1); }
  50% { transform: translate(30px, -30px) scale(1.1); }
}
.experience-section {
  position: relative;
  padding: 5rem 0;
  min-height: 100vh;
}
.container {
  max-width: 1000px;
  margin: 0 auto;
  padding: 0 2rem;
  position: relative;
}
/* Header */
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
  font-size: 3rem;
  font-weight: 700;
  color: white;
  margin-bottom: 1rem;
}
.subtitle {
  font-size: 1.25rem;
  color: #cbd5e1;
}
/* Timeline */
.timeline {
  position: relative;
  padding: 2rem 0;
  transform: translateX(22%);
}
/* Timeline */
.timeline {
  position: relative;
  padding: 2rem 0;
}
/* Línea vertical central */
.timeline::before {
  content: '';
  position: absolute;
  top: 0;
  bottom: 0;
  left: 50%;
  width: 1.5px;
  background: linear-gradient(
    180deg,
    transparent,
    #44a2ff 10%,
    #44a2ff 70%,
    transparent
  );
  transform: translateX(-50%);
}
/* Item de timeline */
.timeline-item {
  position: relative;
  margin-bottom: 4rem;
  width: 100%;
}
/* Punto en la línea */
.timeline-dot {
  position: absolute;
  top: 30px;
  width: 20px;
  height: 20px;
  background: linear-gradient(135deg, #44a2ff, #7d4af5);
  border: 4px solid #1e293b;
  border-radius: 50%;
  transform: translateX(-50%);
  z-index: 10;
  box-shadow: 0 0 0 4px rgba(68, 162, 255, 0.2);
  animation: pulse 2s infinite;
}
@keyframes pulse {
  0%, 100% {
    box-shadow: 0 0 0 4px rgba(68, 162, 255, 0.2);
  }
  50% {
    box-shadow: 0 0 0 8px rgba(68, 162, 255, 0.1);
  }
}
/* Contenido del timeline */
.timeline-content {
  width: 50%;
  position: relative;
}
/* Items a la izquierda */
.timeline-item.left .timeline-content {
  margin-left: 0;
  text-align: right;
}
/* Items a la derecha */
.timeline-item.right .timeline-content {
  margin-left: 6.5%;
  text-align: left;
}
/* Fecha */
.timeline-date {
  display: inline-block;
  padding: 0.5rem 1rem;
  background: rgba(68, 162, 255, 0.1);
  border: 1px solid rgba(68, 162, 255, 0.3);
  border-radius: 9999px;
  color: #60a5fa;
  font-size: 0.875rem;
  font-weight: 600;
  margin-bottom: 1rem;
}
/* Card de experiencia */
.experience-card {
  background: rgba(30, 41, 59, 0.5);
  backdrop-filter: blur(10px);
  border: 2px solid #475569;
  border-radius: 1rem;
  padding: 1.75rem;
  margin-top: 0.75rem;
  transition: all 0.4s ease;
  position: relative;
  overflow: hidden;
}
.experience-card::before {
  content: '';
  position: absolute;
  inset: 0;
  background: linear-gradient(135deg, rgba(68, 162, 255, 0.05), transparent);
  opacity: 0;
  transition: opacity 0.4s ease;
}
.experience-card:hover {
  border-color: #64748b;
  transform: translateY(-5px);
  box-shadow: 0 15px 35px rgba(0, 0, 0, 0.3);
}
.experience-card:hover::before {
  opacity: 1;
}
/* Logo de empresa (opcional) */
.company-logo {
  width: 60px;
  height: 60px;
  padding: 0.5rem;
  background: white;
  border-radius: 0.5rem;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 1rem;
}
.company-logo img {
  width: 100%;
  height: 100%;
  object-fit: contain;
}
/* Título del puesto */
.job-title {
  font-size: 1.5rem;
  font-weight: 700;
  color: #44a2ff;
  margin-bottom: 1rem;

}
/* Info de la empresa */
.company-info {
  justify-content: flex-end;
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  margin-bottom: 1rem;
  color: #cbd5e1;
  font-size: 0.9375rem;
  margin-bottom: 2rem;
}
.company-name,
.location {
  display: flex;
  align-items: center;
  gap: 0.375rem;

}
/* Tipo de empleo */
.job-type {
  display: inline-block;
  padding: 0.375rem 0.875rem;
  border-radius: 0.375rem;
  font-size: 0.75rem;
  font-weight: 600;
  text-transform: uppercase;
  margin-bottom: 1rem;
}
.job-type.project {
  background: rgba(59, 130, 246, 0.1);
  border: 1px solid rgba(59, 130, 246, 0.3);
  color: #3b82f6;
}
/* Descripción */
.job-description {
  color: #cbd5e1;
  line-height: 1.7;
  margin-bottom: 1rem;
}
/* Logros */
.achievements {
  list-style: none;
  padding: 0;
  margin: 1.25rem 0;
}

.achievements li {
  color: #cbd5e1;
  padding: 0.5rem 0;
  padding-left: 1.5rem;
  position: relative;
  line-height: 1.6;
}
.achievements li::before {
  content: '✓';
  position: absolute;
  left: 0;
  color: #4ade80;
  font-weight: bold;
}
/* Tech stack */
.tech-stack {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-top: 1.25rem;
  padding-top: 1.25rem;
  border-top: 1px solid rgba(71, 85, 105, 0.5);
}

.tech-badge {
  padding: 0.375rem 0.75rem;
  background: rgba(68, 162, 255, 0.1);
  border: 1px solid rgba(68, 162, 255, 0.3);
  border-radius: 0.375rem;
  color: #60a5fa;
  font-size: 0.8125rem;
  font-weight: 500;
  transition: all 0.3s ease;
}

.tech-badge:hover {
  background: rgba(68, 162, 255, 0.2);
  transform: translateY(-2px);
}

/* Responsive */
@media (max-width: 768px) {
  .timeline::before {
    left: 20px;
  }

  .timeline-dot {
    left: 20px;
  }

  .timeline-item.left .timeline-content,
  .timeline-item.right .timeline-content {
    width: calc(100% - 60px);
    margin-left: 60px;
    text-align: left;
  }

  .timeline-date {
    font-size: 0.75rem;
  }

  .job-title {
    font-size: 1.25rem;
  }
}
</style>