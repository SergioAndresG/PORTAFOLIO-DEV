<template>
  <div class="container">
    <div class="floating-elements">
      <!-- Burbujas originales mejoradas -->
      <span v-for="n in 12" :key="'bubble-'+n" class="bubble" :style="`--i:${n}; --size:${Math.random() * 20 + 5}px`"></span>
      
      <!-- Imágenes/iconos flotantes que giran -->
      <div v-for="n in 8" :key="'icon-'+n" class="floating-icon" :style="`--delay:${n * 2}s; --duration:${15 + n * 3}s; --left:${n * 12}%`">
        <img :src="getIcon(n)" :alt="'tech-'+n" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
// Función para obtener iconos de tecnologías
const getIcon = (index: number): string => {
  const icons = [
    'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg',
    'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg',
    'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg',
    'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg',
    'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg',
    'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg',
    'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/fastapi/fastapi-original.svg',
    'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg',
  ]
  return icons[(index - 1) % icons.length]
}
</script>

<style scoped>
.container {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  z-index: -1;
  pointer-events: none;
}

.floating-elements {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}

/* === BURBUJAS MEJORADAS === */
.bubble {
  position: absolute;
  bottom: -50px;
  width: var(--size);
  height: var(--size);
  background: radial-gradient(
    circle at 30% 30%,
    rgba(68, 162, 255, 0.4),
    rgba(125, 74, 245, 0.2)
  );
  border-radius: 50%;
  animation: floatUp 20s linear infinite;
  animation-delay: calc(var(--i) * -2s);
  left: calc(var(--i) * 8%);
  opacity: 0.6;
  filter: blur(1px);
}

.bubble::before {
  content: '';
  position: absolute;
  top: 20%;
  left: 20%;
  width: 30%;
  height: 30%;
  background: rgba(255, 255, 255, 0.4);
  border-radius: 50%;
}

@keyframes floatUp {
  0% {
    transform: translateY(100vh) translateX(0) scale(0.5);
    opacity: 0;
  }
  10% {
    opacity: 0.6;
  }
  90% {
    opacity: 0.6;
  }
  100% {
    transform: translateY(-100px) translateX(50px) scale(1);
    opacity: 0;
  }
}

/* === ICONOS FLOTANTES CON ROTACIÓN === */
.floating-icon {
  position: absolute;
  bottom: -80px;
  width: 60px;
  height: 60px;
  left: var(--left);
  animation: 
    floatUpIcon var(--duration) linear infinite,
    spin 15s linear infinite;
  animation-delay: var(--delay);
  opacity: 0.90;
  transition: opacity 0.3s ease;
}

/* Alternativa: siluetas brillantes sutiles */
.floating-icon.glow {
  filter: brightness(1.2) saturate(0);
  opacity: 0.06;
  box-shadow: 0 0 10px rgba(68, 162, 255, 0.1);
}

.floating-icon img {
  width: 100%;
  height: 100%;
  object-fit: contain;
}

@keyframes floatUpIcon {
  0% {
    transform: translateY(100vh) translateX(0);
    opacity: 0;
  }
  5% {
    opacity: 0.15;
  }
  50% {
    transform: translateY(50vh) translateX(30px);
  }
  95% {
    opacity: 0.15;
  }
  100% {
    transform: translateY(-100px) translateX(-20px);
    opacity: 0;
  }
}

@keyframes spin {
  from {
    rotate: 0deg;
  }
  to {
    rotate: 360deg;
  }
}

/* === RESPONSIVE === */
@media (max-width: 768px) {
  .floating-icon {
    width: 25px;
    height: 25px;
    opacity: 0.1;
  }
  
  .bubble {
    opacity: 0.4;
  }
}
</style>