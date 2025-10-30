<script setup lang="ts">
import { stop } from 'vue';

const modelValue = defineModel<boolean>()

const cerrarModal = () => {
    modelValue.value = false
}

</script>

<template>
    <div v-if="modelValue"  @click="cerrarModal" class="modal-overlay">
        <div class="modal-content" @click.stop>
            <button @click="cerrarModal">X</button>
            <h2>Gestor Formatos F-165</h2>
            <h3>Contexto del Problema</h3>
            <p>
                Problema Abordado: Digitalización y gestión segura de los reportes 
                F-165 (Etapa Productiva), eliminando la dependencia 
                de formatos físicos y procesos manuales de registro.
            </p>
            <p>
                Impacto Logrado: Proporcionó trazabilidad y acceso inmediato a la documentación, permitiendo 
                la digitalización del 100% del flujo de trabajo de la Etapa Productiva.
            </p>
            <p>
                Stack Tecnológico (La Clave)
                Backend & APIs: Python 🐍 con FastAPI (para rendimiento y APIs REST robustas).
                Frontend: Vue.js (para una interfaz de usuario dinámica y reactiva).
                Base de Datos: MySQL (para almacenamiento estructurado).
                Procesamiento de Datos: Uso de Pandas y Polars para la manipulación y generación de reportes .xls y .xlsx.
            </p>
            <p>
                Seguridad y Arquitectura Destacadas
                Implementación de un sistema de Autenticación JWT (JSON Web Tokens) con sesiones basadas en Cookies para seguridad de la API.
                Desarrollo de un Middleware customizado para la prevención activa de ataques XSS (Cross-Site Scripting) e Inyección SQL, asegurando la integridad de los datos.
                Gestión de Roles y Permisos (Instructor y Administrador) a nivel de backend.
            </p>
            <p>
                Funcionalidades Avanzadas
                Firmas Digitales: Permite la firma en tiempo real dentro de la aplicación, integrando las firmas a los formatos descargables automáticamente.
                Manejo de Ciclo de Vida del Dato: Automatización de la eliminación periódica de fichas y reportes que ya no están en uso, manteniendo la base de datos limpia y optimizada.
            </p>

        </div>
    </div>
</template>


<style scoped>
.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 99;
}

.modal-content {
  background-color: rgb(0, 0, 0);
  margin-top: 50px;
  padding: 17px;
  width: 600px;
  height: 350px;
  max-width: 1000px;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
}
</style>