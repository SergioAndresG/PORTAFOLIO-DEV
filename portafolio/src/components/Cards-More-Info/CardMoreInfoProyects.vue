<script setup lang="ts">
import { computed } from 'vue';
import ProjectDetails_165 from './ProjectDetails_165.vue';
import ProjectDetails_APE from './ProjectDetails_APE.vue';

const props = defineProps<{
    show: boolean; 
    project: { 
        id: number; 
        title: string; 
        description: string;
        icon: string;
        technologies: string[];
        color: string;
        category: string;
        github: string;
    } | null; 
}>();

const emit = defineEmits(['close']);

// Mapeo de IDs a Componentes
const componentMap = {
    1: ProjectDetails_APE,  // Automatización APE
    2: ProjectDetails_165,  // Gestor F-165
};

// Componente dinámico basado en el ID
const dynamicComponent = computed(() => {
    const id = props.project?.id;
    const component = componentMap[id];
    return component || null;
});

const cerrarModal = () => {
    emit('close');
};
</script>

<template>
    <div v-if="show" @click="cerrarModal" class="modal-overlay">
        <div class="modal-content" @click.stop>
            <button class="modal-close" @click="cerrarModal">X</button>
            
            <!-- Componente dinámico -->
            <component 
                :is="dynamicComponent" 
                :project="project"
                v-if="dynamicComponent && project"
            />
            
            <!-- Mensaje de error si no encuentra el componente -->
            <div v-else style="padding: 20px; text-align: center;">
                <p style="color: red; font-weight: bold;">
                    ⚠️ No se encontró el componente para el proyecto ID: {{ project?.id }}
                </p>
                <p>Componentes disponibles: 1 (APE), 2 (F-165)</p>
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

</style>