<template>
  <section class="flex flex-col">
    <img class="hidden sm:block shrink-0" src="../assets/banner.png" alt="">
    <img class="block sm:hidden shrink-0" src="../assets/banner_mobile.png" alt="">
  </section>
  <section class="bg-white flex flex-col px-8 pt-16 items-center gap-8 sm:flex-row sm:justify-center max-w-6xl">
    <div class="w-[50%]">
      <h2 class="text-my-yellow font-bold text-2xl">About</h2>
      <p>usuua</p>
    </div>
    <div>
      <img src="../assets/pfps/5krc1.svg" alt="">
    </div>
  </section>
  <section class="bg-white flex flex-col items-center pt-16 px-8">
    <h2 class="text-my-yellow text-2xl font-bold">Content</h2>
  </section>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: "About",
});
</script>
