<template>
  <main>
    <div class=" flex flex-col justify-center bg-gray-100" :class="pageActive != 3 ? 'sm:max-h-screen' : ''">
      <Navbar :active="pageActive" @add="(i) => pageActive = i" />

      <template v-if="pageActive == 0">
        <Landing data-aos="zoom-in" data-aos-duration="1500" />
      </template>  
      <template v-else-if="pageActive == 1">
          <Introduce data-aos="fade-up" data-aos-duration="1500" />
      </template>
      <template v-else-if="pageActive == 2">
        <Skills />
      </template>
      <template v-else-if="pageActive == 3">
        <Project/>
      </template>
      <template v-else-if="pageActive == 4">
        <Contact data-aos="zoom-in" data-aos-duration="1500" />
      </template>
      <div class="flex flex-row mx-auto mb-5">
        <template v-if="pageActive!=0">
          <PrevButton @click="prevPage" />
        </template>
        <template v-if="pageActive!=4">
          <NextButton @click="nextPage" />
        </template>
      </div>
    </div>
  </main>
</template>
<script>
import Navbar from '../components/Navbar.vue'
import Landing from './Landing.vue'
import Project from './Project.vue'
import Skills from './Skills.vue'
import Contact from './Contact.vue'
import Introduce from './Introduce.vue'
import PrevButton from '../components/PrevButton.vue'
import NextButton from '../components/NextButton.vue'

export default {
  components: {
    Navbar, Landing, PrevButton, NextButton, Introduce, Skills, Project, Contact
  },
  data() {
    return {
      pageActive:0,
      datahilang:null
    }
  },
  methods: {
    nextPage() {
      this.pageActive++
      window.scroll({
        top: 0, 
        left: 0, 
        behavior: 'smooth'
      });
      // this.datahilang = 'haha'
    },
    prevPage() {
      this.pageActive--;
      window.scroll({
        top: 0, 
        left: 0, 
        behavior: 'smooth'
      });
    }
  }
}
</script>
<style>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>