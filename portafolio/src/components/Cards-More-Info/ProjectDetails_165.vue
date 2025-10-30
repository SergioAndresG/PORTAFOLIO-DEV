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
    <!-- SIN modal-overlay, SIN v-if, SOLO el contenido -->
    <div class="project-detail-content">
        <h2>Gestor de Formatos F-165</h2>

        <div class="section">
            <h3>Contexto y Impacto</h3>
            <p>
                <span class="resaltado">Problema Abordado:</span> Digitalización y gestión segura de los reportes F-165 (Etapa Productiva), eliminando la dependencia de formatos físicos y procesos manuales de registro.
            </p>
            <p>
                <span class="resaltado">Impacto Logrado:</span> Proporcionó trazabilidad y acceso inmediato a la documentación, permitiendo la <strong>digitalización del 100%</strong> del flujo de trabajo de la Etapa Productiva.
            </p>
        </div>

        <div class="section">
            <h3>🛠️ Stack Tecnológico (La Clave)</h3>
            <ul class="tech-list">
                <li><span class="resaltado">Backend & APIs:</span> Python con FastAPI (para rendimiento y APIs REST robustas).</li>
                <li><span class="resaltado">Frontend:</span> Vue.js (para una interfaz de usuario dinámica y reactiva).</li>
                <li><span class="resaltado">Base de Datos:</span> MySQL (para almacenamiento estructurado).</li>
                <li><span class="resaltado">Procesamiento de Datos:</span> Uso de Pandas y Polars para la manipulación y generación de reportes .xls y .xlsx.</li>
            </ul>
        </div>

        <div class="section">
            <h3>🔒 Seguridad y Arquitectura Destacadas</h3>
            <ul class="detail-list">
                <li>Implementación de <strong>Autenticación JWT</strong> (JSON Web Tokens) con sesiones basadas en Cookies.</li>
                <li>Desarrollo de un Middleware customizado para la prevención activa de ataques XSS e Inyección SQL.</li>
                <li>Gestión de Roles y Permisos (Instructor y Administrador) a nivel de backend.</li>
            </ul>
        </div>

        <div class="section">
            <h3>✨ Funcionalidades Clave</h3>
            <ul class="detail-list">
                <li><span class="resaltado">Firmas Digitales:</span> Permite la firma en tiempo real, integrando las firmas a los formatos descargables automáticamente.</li>
                <li><span class="resaltado">Ciclo de Vida del Dato:</span> Automatización de la eliminación periódica de fichas y reportes obsoletos, manteniendo la base de datos limpia.</li>
            </ul>
        </div>

        <!-- Opcional: Usar datos de la prop si los necesitas -->
        <div v-if="project" class="section">
            <h3>🔗 Enlaces</h3>
            <a :href="project.github" target="_blank" class="github-link">
                Ver código en GitHub →
            </a>
        </div>
    </div>
</template>


<style scoped>

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