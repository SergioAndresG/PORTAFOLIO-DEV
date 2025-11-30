<script setup lang="ts">
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

            <h2>Extractor Automatizado de Empresas APE</h2>

            <div class="section">
                <h3>Contexto y Impacto</h3>
                <p>
                    <span class="resaltado">Problema Abordado:</span> La plataforma APE no cuenta con funcionalidad para generar reportes masivos de empresas registradas, obligando a copiar y pegar manualmente cada registro.
                </p>
                <p>
                    <span class="resaltado">Impacto Logrado:</span> Automatización completa de la extracción de empresas por municipio, reduciendo tiempos de 45 minutos a 2 minutos por municipio (~90% de eficiencia). Más de 1,000 empresas procesadas.
                </p>
            </div>

            <div class="section">
                <h3>🛠️ Stack Tecnológico (La Clave)</h3>
                <ul class="tech-list">
                    <li><span class="resaltado">Selenium</span> Para web scraping inteligente y navegación automatizada por la plataforma APE.</li>
                    <li><span class="resaltado">Pandas</span> Para procesamiento, limpieza y estructuración de datos empresariales.</li>
                    <li><span class="resaltado">CustomTkinter</span> Para interfaz gráfica moderna e intuitiva con selector de municipios.</li>
                    <li><span class="resaltado">openpyxl</span> Para generación automática de reportes Excel con formato profesional.</li>
                </ul>
            </div>

            <div class="section">
                <h3>🔄 Flujo de Proceso</h3>
                <ul class="detail-list">
                    <li>El usuario selecciona uno o múltiples municipios desde una interfaz gráfica intuitiva.</li>
                    <li>La aplicación inicia sesión automáticamente en APE y navega a cada municipio seleccionado.</li>
                    <li>Extrae información completa de todas las empresas (NIT, actividad económica, estado, fecha de inscripción).</li>
                    <li>Genera archivos Excel organizados automáticamente en carpetas por año y mes.</li>
                </ul>
            </div>

            <div class="section">
                <h3>✨ Características Destacadas</h3>
                <ul class="detail-list">
                    <li><strong>Organización Inteligente:</strong> Estructura automática de carpetas YYYY/MM para fácil gestión histórica.</li>
                    <li><strong>Validación de Datos:</strong> Eliminación de duplicados y verificación de campos críticos antes de exportar.</li>
                    <li><strong>Trazabilidad Completa:</strong> Sistema de logs detallado para auditoría y seguimiento de cada extracción.</li>
                    <li><strong>Escalabilidad:</strong> Procesamiento de múltiples municipios en una sola ejecución sin intervención manual.</li>
                    <li><strong>Arquitectura Modular:</strong> Diseño por capas (GUI, Orchestration, Core, Utils) para fácil mantenimiento.</li>
                </ul>
            </div>

            <div class="section">
                <h3>🎯 Alcance Actual y Visión</h3>
                <p>
                    <span class="resaltado">Versión 1.0:</span> Configurada específicamente para el Centro de Biotecnología Agropecuaria (CBA) - Mosquera, Cundinamarca.
                </p>
                <p>
                    <span class="resaltado">Roadmap v1.5:</span> Selector de centro SENA con carga dinámica de municipios para expansión nacional.
                </p>
            </div>

            <div v-if="project" class="section">
                <h3>🔗 Enlaces</h3>
                <div class="button-icon">
                    <div class="icon">
                        <svg viewBox="0 0 24 24">
                        <path
                            d="M12 0.296997C5.37 0.296997 0 5.67 0 12.297C0 17.6 3.438 22.097 8.205 23.682C8.805 23.795 9.025 23.424 9.025 23.105C9.025 22.82 9.015 22.065 9.01 21.065C5.672 21.789 4.968 19.455 4.968 19.455C4.422 18.07 3.633 17.7 3.633 17.7C2.546 16.956 3.717 16.971 3.717 16.971C4.922 17.055 5.555 18.207 5.555 18.207C6.625 20.042 8.364 19.512 9.05 19.205C9.158 18.429 9.467 17.9 9.81 17.6C7.145 17.3 4.344 16.268 4.344 11.67C4.344 10.36 4.809 9.29 5.579 8.45C5.444 8.147 5.039 6.927 5.684 5.274C5.684 5.274 6.689 4.952 8.984 6.504C9.944 6.237 10.964 6.105 11.984 6.099C13.004 6.105 14.024 6.237 14.984 6.504C17.264 4.952 18.269 5.274 18.269 5.274C18.914 6.927 18.509 8.147 18.389 8.45C19.154 9.29 19.619 10.36 19.619 11.67C19.619 16.28 16.814 17.295 14.144 17.59C14.564 17.95 14.954 18.686 14.954 19.81C14.954 21.416 14.939 22.706 14.939 23.096C14.939 23.411 15.149 23.786 15.764 23.666C20.565 22.092 24 17.592 24 12.297C24 5.67 18.627 0.296997 12 0.296997Z"
                            fill="#222229"
                        ></path>
                        </svg>
                    </div>
                    <a href="https://github.com/SergioAndresG/obtener_empresas" class="cube-link">
                    <div class="cube">
                        <span class="side front">Ver código en GitHub</span>
                        <span class="side top">¡Vamos!</span>
                    </div>
                    </a>
                </div>
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


.button-icon {
  display: flex;
  border: 3px #fff solid;
  width: 265px;
  height: fit-content;
  cursor: pointer;
  padding: 3px;
  margin-bottom: 1rem;
}

.icon {
  background-color: #fff;
  padding: 10px 10px 5px 10px;
}

.icon svg {
  width: 25px;
  height: 25px;
}

.cube {
  transition: all 0.4s;
  transform-style: preserve-3d;
  width: 220px;
  height: 20px;
}

.button-icon:hover {
  border-color: #1E90FF;
}

.button-icon:hover .cube {
  transform: rotateX(90deg);
}

.side {
  position: absolute;
  height: 43px;
  width: 220px;
  display: flex;
  font-size: 0.8em;
  justify-content: center;
  align-items: center;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  font-weight: bold;
}

.top {
  background: #1E90FF;
  color: #fff;
  transform: rotateX(-90deg) translate3d(0, 12px, 2em);
}

.front {
  background: #222229;
  color: #fff;
  transform: translate3d(0, 0, 1em);
}
@media (max-width: 768px) {
  .cube {
    width: min(180px, calc(100% - 50px));
  }
  
  .side {
    font-size: 0.7em;
  }
  
  .modal-content {
    margin: 1rem;
    max-width: calc(100% - 2rem);
  }
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