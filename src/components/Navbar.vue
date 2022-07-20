<template>
  <nav class="sticky top-0 h-20 flex bg-white px-4 gap-16 transition-all items-center justify-between sm:justify-start z-50">
    <img class="h-full" src="../assets/Logo.png" alt="Cardboard-Terrorist's logo">
    <ul class="sm:flex items-center list-none gap-4 hidden">
      <li class="text-my-yellow"><router-link class="decoration-none text-lg" activeClass="font-bold" to="/">HOME</router-link></li>
      <li class="text-my-yellow"><router-link class="decoration-none text-lg" activeClass="font-bold" to="/about">ABOUT</router-link></li>
    </ul>
    <div class="w-14 h-14 relative sm:hidden" @click="this.hamburger()">
      <div id="hamburger" class="transition-all ease-linear before:transition-all before:ease-linear w-full h-[2px] bg-black absolute top-[18%] translate-y-[-50%] after:w-full after:h-[2px] after:bg-black after:absolute after:top-5 before:w-full before:h-[2px] before:bg-black before:absolute before:top-10"></div>
    </div>
  </nav>
  <div>
    <ul id="slider" class="flex flex-col items-center justify-center bg-white list-none gap-4 w-screen h-screen fixed translate-x-full z-40 top-0 transition-transform ease-in-out sm:hidden">
      <li class="text-my-yellow"><router-link class="decoration-none text-lg" activeClass="font-bold" to="/">HOME</router-link></li>
      <li class="text-my-yellow"><router-link class="decoration-none text-lg" activeClass="font-bold" to="/about">ABOUT</router-link></li>
    </ul>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'Navbar',
  methods: {
    hamburger(){
      let hamburger = document.querySelector("#hamburger");
      let slider = document.querySelector("#slider");
      let body = document.querySelector("body");
      //make slider move
      console.log(slider);
      if (slider?.classList.contains("translate-x-full")) {
        slider.classList.remove("translate-x-full");
        slider.classList.add("translate-x-0");
        body.style.overflow = "hidden";
        hamburger?.classList.add("after:hidden");
        hamburger?.classList.add("before:-rotate-90", "before:top-0");
        hamburger?.classList.remove("top-[18%]");
        hamburger?.classList.add("rotate-45", "top-[50%]");
      } else {
        slider?.classList.add("translate-x-full");
        slider?.classList.remove("translate-x-0");
        body.style.overflow = "initial";
        hamburger?.classList.remove("after:hidden");
        hamburger?.classList.remove("before:-rotate-90", "before:top-0");
        hamburger?.classList.add("top-[18%]");
        hamburger?.classList.remove("rotate-45", "top-[50%]");
      }
    }
  }
});
</script>
