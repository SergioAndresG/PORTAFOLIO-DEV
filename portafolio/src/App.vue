<script setup lang="ts">
import { useRouter } from 'vue-router';
import Animation from './components/Animation.vue';

const route = useRouter()

</script>

<template>
    <Animation />
    <router-view/>
</template>

<style scoped>

</style>