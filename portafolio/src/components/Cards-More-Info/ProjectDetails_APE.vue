<script setup lang="ts">
import { stop } from 'vue';

const props = defineProps<{
    project?: {
        id: number;
        title: string;
        description: string;
        icon: string;
        technologies: string[];
        color: string;
        category: string;
        github: string;
    };
}>();

</script>

<template>
    <div class="project-detail-content">

            <h2>Automatización Masiva de Inscripciones</h2>

            <div class="section">
                <h3>Contexto y Impacto</h3>
                <p>
                    <span class="resaltado">Problema Abordado:</span> Entrada manual de aprendices a la plataforma
                </p>
                <p>
                    <span class="resaltado">Impacto Logrado:</span> Automatización
                     la inscripción de cientos de aprendices, eliminando la necesidad de entrada manual de datos en el portal de registro.
                </p>
            </div>

            <div class="section">
                <h3>🛠️ Stack Tecnológico (La Clave)</h3>
                <ul class="tech-list">
                    <li><span class="resaltado">Python</span> Pandas para la ingestión y procesamiento de datos del archivo Excel.</li>
                    <li><span class="resaltado">Selenium</span> Para la navegación y manipulación de la interfaz web.</li>
                </ul>
            </div>

            <div class="section">
                <h3>Flujo de Proceso</h3>
                <ul class="detail-list">
                    <li>El script lee la información de los aprendices desde un archivo Excel (.xls/.xlsx). El robot se autentica en el sistema, navega al formulario de registro de candidatos y realiza una búsqueda de validación por documento.</li>
                </ul>
            </div>

            <div class="section">
                <h3>✨ Visualización y Reporte</h3>
                <ul class="detail-list">
                    <li>Implementación de un sistema de semáforo de estado en el archivo Excel: 🚦 Marca la fila en Azul mientras procesa, en Verde si la inscripción es exitosa, en Amarillo si el candidato ya existía (omitido) y en Rojo si se produce un error de registro.</li>
                </ul>
            </div>
            <div v-if="project" class="section">
                <h3>🔗 Enlaces</h3>
            </div>
            
            </div>
</template>


<style scoped>
.modal-overlay {
    position: fixed;
    inset: 0;
    background-color: rgba(0, 0, 0, 0.7); 
    backdrop-filter: blur(6px); 
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 99;
    animation: fadeIn 0.3s ease;
}

.modal-content {
    position: relative;
    background-color: #1a1a1a;
    color: #e2e8f0; 
    margin-top: 6rem;
    padding: 2rem; 
    max-width: 700px;
    max-height: 72vh; 
    border-radius:  1rem  0.5rem  0.5rem 1rem; 
    border: 1px solid #334155; 
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.7);
    animation: slideUp 0.3s ease;
    overflow-y: auto;
}

/* CIERRE */
.modal-close {
    position: absolute;
    top: 1rem;
    right: 1rem;
    background: transparent;
    border: none;
    color: #94a3b8; 
    font-size: 1.5rem;
    cursor: pointer;
    transition: color 0.2s ease, transform 0.2s ease;
}

.modal-close:hover {
    color: #f87171; /* Rojo suave en hover */
    transform: rotate(180deg);
}
.modal-content::-webkit-scrollbar {
    width: 5px; /* Hazla más estrecha */
}

.modal-content::-webkit-scrollbar-track {
    background: #1a1a1a;
    border-radius: 3rem; /* Ajustar el radio para que coincida con el modal */
}

.modal-content::-webkit-scrollbar-thumb {
    background-color: #475569;
    border-radius: 20px; 
    border: 2px solid #1a1a1a;
}

.modal-content h2 {
    color: #60a5fa; /* Color azul brillante */
    font-size: 2rem;
    font-weight: 700;
    margin-bottom: 1.5rem;
    border-bottom: 2px solid #334155; /* Línea de separación */
    padding-bottom: 0.5rem;
}

.modal-content h3 {
    color: #93c5fd;
    font-size: 1.25rem;
    font-weight: 600;
    margin-top: 1.5rem;
    margin-bottom: 0.5rem;
}

.modal-content p, 
.modal-content li {
    color: #cbd5e1;
    line-height: 1.7;
    margin-bottom: 0.5rem;
    font-size: 1rem;
}

/* SECCIONES Y LISTAS PERSONALIZADAS */
.section {
    padding-top: 0.5rem;
    margin-bottom: 1.5rem;
}

.tech-list,
.detail-list {
    list-style-type: none; /* Quita viñetas por defecto */
    padding-left: 0;
}

.tech-list li::before,
.detail-list li::before {
    content: '→'; /* Símbolo moderno */
    color: #60a5fa; /* Color del bullet */
    font-weight: bold;
    display: inline-block;
    width: 1em;
    margin-left: -1em;
}

.resaltado {
    font-weight: bold;
    color: #a78bfa; /* Morado sutil para títulos dentro de p/li */
}

/* ANIMACIONES (Mantenidas) */
@keyframes fadeIn {
    from { opacity: 0; }
    to { opacity: 1; }
}
@keyframes slideUp {
    from {
        opacity: 0;
        transform: translateY(50px);
    }
    to {
        opacity: 1;
        transform: translateY(0);
    }
}
</style>