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
</style>