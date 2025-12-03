<script setup lang="ts">
import Header from '../components/Header.vue'
import AboutMe from '../components/AboutMe.vue'
import StackSection from '../components/StackSection.vue'
import ProjectsSection from '../components/ProjectSection.vue'
import WorkExperience from '../components/WorkExperience.vue'
import Achievements from '../components/Achievements.vue'
import ContactMe from '../components/ContactMe.vue'
import Home from '../components/Home.vue'
</script>

<template>
  <Header></Header>
  <Home id="home"/>
  <AboutMe  id="about-me" />
  <StackSection id="stack"/>
  <ProjectsSection id="projects"/>
  <WorkExperience id="experience"/> 
  <Achievements id="achievements"/>
  <ContactMe id="contact-me"/>
</template>

