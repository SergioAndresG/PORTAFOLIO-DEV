<script setup lang="ts">
// Recibir la prop project (aunque no la uses ahora, es buena práctica)
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
        <h2>CoffeBike - Sistema POS para Cafetería</h2>

        <div class="section">
            <h3>📋 Contexto del Proyecto</h3>
            <p>
                <span class="resaltado">Tipo:</span> Proyecto de grado desarrollado 
                en equipo para una cafetería local.
            </p>
            <p>
                <span class="resaltado">Objetivo:</span> Crear un sistema completo 
                de punto de venta que automatice la gestión de inventario, pedidos 
                y reportes, eliminando procesos manuales propensos a errores.
            </p>
            <p>
                <span class="resaltado">Mi Rol:</span> Full Stack Developer - 
                Implementación del backend (FastAPI), sistema de autenticación, 
                y desarrollo de componentes frontend clave.
            </p>
        </div>

        <div class="section">
            <h3>🛠️ Stack Tecnológico (La Clave)</h3>
            <ul class="tech-list">
                <li><span class="resaltado">Backend & APIs:</span> Python con FastAPI (para rendimiento y APIs REST robustas).</li>
                <li><span class="resaltado">Frontend:</span> Vue.js (para una interfaz de usuario dinámica y reactiva).</li>
                <li><span class="resaltado">Base de Datos:</span> MySQL (para almacenamiento estructurado).</li>
                <li><span class="resaltado">DevOps:</span> Docker (Despliegue con NGINX), Railway (DB Hosting)</li>
            </ul>
        </div>

        <div class="section">
            <h3>✨ Funcionalidades Implementadas</h3>
            <ul class="detail-list">
                <li>
                    <span class="resaltado">🔐 Sistema de Autenticación:</span>
                    JWT con 3 niveles de roles (Jefe, Administrador, Empleado), 
                    control de acceso basado en permisos y recuperación de contraseña.
                </li>
                <li>
                    <span class="resaltado">📦 Gestión de Inventario:</span>
                    Control de productos "hechos" con recetas que descuentan 
                    automáticamente materias primas, tracking de fechas de 
                    vencimiento y alertas de stock bajo.
                </li>
                <li>
                    <span class="resaltado">🛒 Sistema de Pedidos:</span>
                    Creación y seguimiento de pedidos con estados, generación 
                    de facturas al completar pedidos.
                </li>
                <li>
                    <span class="resaltado">📊 Reportes Automatizados:</span>
                    Generación de reportes Excel con múltiples hojas (inventario, 
                    ventas, alertas), envío automático por email mediante Gmail API.
                </li>
                <li>
                    <span class="resaltado">⏰ Tareas Programadas:</span>
                    Verificación periódica de vencimientos y stock, alertas por 
                    email configurables según el rol de usuario.
                </li>
            </ul>
        </div>

        <div class="section">
            <h3>💡 Aprendizajes Clave</h3>
            <ul class="detail-list">
                <li>Primera experiencia implementando autenticación JWT desde cero</li>
                <li>Manejo de relaciones complejas en ORMs (SQLAlchemy)</li>
                <li>Integración de servicios externos (Gmail API)</li>
                <li>Containerización con Docker para deployment</li>
                <li>Trabajo en equipo con metodología ágil</li>
            </ul>
        </div>

        <div class="section status-note">
            <h3>📌 Estado del Proyecto</h3>
            <p>
                Proyecto académico completado en Enero 2025. MVP funcional 
                presentado como proyecto de grado.
            </p>
            <p class="honest-note">
                <em>Si lo retomara hoy, me enfocaría en implementar pruebas automatizadas robustas y mejoraría la 
                    arquitectura del despliegue para tener un proceso de entrega y actualización mucho más ágil.</em>
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
                    <div class="cube">
                        <span class="side front">Ver código en GitHub</span>
                        <span class="side top"><a href="https://github.com/SergioAndresG/inscritos_sena_ape" style="text-decoration: none; color: aliceblue;">¡Vamos!</a></span>
                    </div>
                </div>
        </div>
    </div>
</template>



<style scoped>

.modal-content h2 {
    color: #60a5fa; 
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

</style>