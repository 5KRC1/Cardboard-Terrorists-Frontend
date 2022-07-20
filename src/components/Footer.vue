<template>
  <div class="h-20 w-screen">
    <div class="bg-gray-100 h-16 w-screen flex justify-evenly items-center text-xl">
      <ion-icon class="hover:text-my-yellow transition-colors duration-75" name="logo-instagram"></ion-icon>
      <ion-icon class="hover:text-my-yellow transition-colors duration-75" name="logo-twitter"></ion-icon>
      <ion-icon class="hover:text-my-yellow transition-colors duration-75" name="logo-youtube"></ion-icon>
      <ion-icon class="hover:text-my-yellow transition-colors duration-75" name="logo-twitch"></ion-icon>
    </div>
    <div class="h-4 w-screen flex items-center justify-center">
      <p>Cardboard Terrorists | Copyright 2022</p>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: "Footer",
});
</script>
