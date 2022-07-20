<template>
  <Navbar class="sticky top-0 z-50"/>
  <router-view class="relative z-10 w-screen"/>
  <Footer class="relative z-30"/>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Navbar from './components/Navbar.vue';
import Footer from './components/Footer.vue';

export default defineComponent({
  name: "Home",
  components: {
    Navbar,
    Footer
  },
});
</script>
