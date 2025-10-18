<script setup lang="ts">
import { ref } from 'vue'

// Estado para controlar si el menú está abierto o cerrado
const isMenuOpen = ref(false);


// Función para toggle (abrir/cerrar) el menú
const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value
}

// Función para cerrar el menú cuando se hace click en un link
const closeMenu = () => {
  isMenuOpen.value = false
}
</script>

<template>
  <header>
    <nav class="nav-container">
      <!-- Botón hamburguesa -->
      <button 
        class="hamburger-button"
        :class="{ 'active': isMenuOpen }"
        @click="toggleMenu"
        aria-label="Menu"
      >
        <span class="line"></span>
        <span class="line"></span>
        <span class="line"></span>
      </button>

      <!-- Menú (se muestra/oculta con la clase 'open') -->
      <ul 
        class="ul-container"
        :class="{ 'open': isMenuOpen }"
      >
        <li class="li-container">
          <router-link @click="closeMenu">Sobre Mi</router-link>
        </li>
        <li class="li-container">
          <router-link @click="closeMenu">Proyectos</router-link>
        </li>
        <li class="li-container">
          <router-link @click="closeMenu">Contacto</router-link>
        </li>
        <li class="li-container">
          <router-link @click="closeMenu">Experiencias</router-link>
        </li>
      </ul>

      <!-- Overlay oscuro cuando el menú está abierto -->
      <div 
        class="overlay"
        :class="{ 'show': isMenuOpen }"
        @click="closeMenu"
      ></div>
    </nav>
  </header>
</template>

<style scoped>

header {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 9998;
  background: rgba(0, 0, 0, 0.8);
  backdrop-filter: blur(10px);
}

.nav-container {
  justify-content: center;
  display: flex;
  align-items: center;
  max-width: 1200px;
  margin: 15px auto;
}

/* ========== BOTÓN HAMBURGUESA ========== */
.hamburger-button {
  display: none; /* Oculto en desktop por defecto */
  flex-direction: column;
  justify-content: space-around;
  width: 30px;
  height: 25px;
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 0;
  z-index: 10000;
  position: relative;
}

/* Las 3 líneas del hamburguesa */
.line {
  width: 100%;
  height: 3px;
  background: rgb(129, 129, 129);
  border-radius: 10px;
  transition: all 0.3s ease;
}

/* Animación cuando está activo (X) */
.hamburger-button.active .line:nth-child(1) {
  transform: rotate(45deg) translate(4px, 8px);
  background: #1E90FF;
}

.hamburger-button.active .line:nth-child(2) {
  opacity: 0;
  transform: translateX(-20px);
}

.hamburger-button.active .line:nth-child(3) {
  transform: rotate(-45deg) translate(4px, -8px);
  background:  #1E90FF;
;
}

/* Hover del botón */
.hamburger-button:hover .line {
  background: #1E90FF;
}

/* ========== MENÚ ========== */
.ul-container {
  padding: 5px;
  display: flex;
  align-items: center;
  margin: 0;
  list-style: none;
  transition: all 0.3s ease;
}
.li-container {
  list-style: none;
  display: inline-block;
  margin: 0 15px;
}
.li-container::after {
  content: "/";
  color: rgb(255, 255, 255);
  position: relative;
  left: 15px;
}
.li-container:last-child::after {
  content: "";
}
a {
  text-decoration: none;
  color: rgb(129, 129, 129);
  display: inline-block;
  transition: all 0.2s ease-in-out;
  font-size: 16px;
  padding: 20px;
}
a:hover {
  color: #1E90FF;
  transform: translateY(-5px);
}
/* Overlay oscuro */
.overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background: rgba(0, 0, 0, 0.7);
  opacity: 0;
  visibility: hidden;
  transition: all 0.3s ease;
  z-index: 9997;
}
.overlay.show {
  opacity: 1;
  visibility: visible;
}

/* ========== RESPONSIVE ========== */
@media (max-width: 768px) {
  /* Mostrar el botón hamburguesa en móviles */
  .hamburger-button {
    display: flex;
  }

  /* El menú se convierte en un panel lateral */
  .ul-container {
    position: fixed;
    top: 0;
    right: -100%; /* Empieza fuera de la pantalla */
    width: 70%;
    max-width: 300px;
    height: 100vh;
    background: rgba(15, 15, 25, 0.98);
    backdrop-filter: blur(20px);
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    padding: 60px 30px;
    box-shadow: -5px 0 20px rgba(0, 0, 0, 0.5);
    transition: right 0.4s cubic-bezier(0.68, -0.55, 0.265, 1.55);
    z-index: 9999;
  }

  /* Cuando está abierto */
  .ul-container.open {
    right: 0;
  }

  /* Items del menú en móvil */
  .li-container {
    margin: 20px 0;
    width: 100%;
    opacity: 0;
    transform: translateX(50px);
    transition: all 0.3s ease;
  }

  /* Animación de entrada de los items */
  .ul-container.open .li-container {
    opacity: 1;
    transform: translateX(0);
  }

  /* Delay escalonado para cada item */
  .ul-container.open .li-container:nth-child(1) {
    transition-delay: 0.1s;
  }
  .ul-container.open .li-container:nth-child(2) {
    transition-delay: 0.2s;
  }
  .ul-container.open .li-container:nth-child(3) {
    transition-delay: 0.3s;
  }
  .ul-container.open .li-container:nth-child(4) {
    transition-delay: 0.4s;
  }

  /* Quitamos el "/" en móvil */
  .li-container::after {
    content: "";
  }

  /* Links más grandes en móvil */
  a {
    font-size: 20px;
    display: block;
    padding: 10px 0;
  }
}
</style>