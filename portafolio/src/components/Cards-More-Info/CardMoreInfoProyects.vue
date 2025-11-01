<script setup lang="ts">
import { computed } from 'vue';
import ProjectDetails_165 from './ProjectDetails_165.vue';
import ProjectDetails_APE from './ProjectDetails_APE.vue';
import ProjectDetails_CoffeBike from './ProjectDetails_CoffeBike.vue';

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
    3: ProjectDetails_CoffeBike // CoffeBike
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
    <Transition name="modal">
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
                        No se encontró el componente para el proyecto ID: {{ project?.id }}
                    </p>
                    <p>Componentes disponibles: 1 (APE), 2 (F-165)</p>
                </div>
                
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
                        <span class="side top">¡Vamos!</span>
                    </div>
                </div>
                
                

            </div>
        </div>
    </Transition>
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
    background-color: #090909;
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
    color: #f87171; 
    transform: rotate(180deg);
}
.modal-content::-webkit-scrollbar {
    width: 5px;
}

.modal-content::-webkit-scrollbar-track {
    background: #1a1a1a;
    border-radius: 3rem; 
}

.modal-content::-webkit-scrollbar-thumb {
    background-color: #475569;
    border-radius: 20px; 
    border: 2px solid #1a1a1a;
}

.modal-enter-active{
    animation: fadeIn 0.3s ease;
}
.modal-enter-active .modal-content{
    animation: slideUp 0.3s ease;
}

.modal-leave-active{
    animation: fadeOut 0.3s ease;
}
.modal-leave-active .modal-content{
    animation: slideDown 0.3s ease;
}

@keyframes fadeIn {
    from { opacity: 0;}
    to {opacity: 1;}
}
@keyframes slideUp{
    from {
        opacity: 0;
        transform: translateY(0);
    }
    to {
        opacity: 1;
        transform: translateY(0);
    }
}
@keyframes fadeOut{
    from {opacity: 1;}
    to {opacity: 0;}
}
@keyframes slideDown{
    from {
        opacity: 1;
        transform: translateY(0);
    }
    to {
        opacity: 0;
        transform: translateY(50px);
    }
}

.button-icon {
  display: flex;
  border: 3px #fff solid;
  width: fit-content;
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