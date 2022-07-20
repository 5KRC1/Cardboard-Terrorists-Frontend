<template>
  <main class="flex flex-col items-center gap-16 pb-8 bg-white">
    <section class="h-[calc(100vh-5rem)] relative flex items-center sm:h-full sm:w-full bg-gray-100">
      <div class="overflow-hidden w-screen h-full flex items-center">
        <ion-icon name="arrow-dropleft" class="absolute top-[50%] left-2 z-20 text-2xl" @click="manualCarouselBackwards()"></ion-icon>
        <div class="flex transition-transform ease-in-out items-center" id="carousel">
          <img class="w-screen hidden shrink-0 sm:block" v-for="img in this.images.desktop" :key="img" :data-url="img" alt="banner">
          <img class="w-screen shrink-0 sm:hidden block" v-for="img in this.images.mobile" :key="img" :data-url="img" alt="banner_mobile">
        </div>
        <ion-icon name="arrow-dropright" class="absolute top-[50%] right-2 z-20 text-2xl" @click="manualCarouselForwards()"></ion-icon>
        <div class="absolute bottom-0 left-[50%] translate-x-[-50%]">
          <ion-icon name="remove" v-for="img in this.getNumOfImg" :key="img"></ion-icon>
        </div>
      </div>
    </section>
    <section class="flex flex-col items-center justify-between gap-16 pt-16 max-w-6xl px-8 sm:flex-row">
      <div class="w-1/2">
        <h2 class="text-my-yellow font-bold text-2xl">About</h2>
        <p class="leading-snug">We are terrorists made from cardboard. We are based in Slovenia. We are friends who like playing CS:GO and trying to imporve our game.</p>
      </div>
      <div>
        <img src="../assets/Logo.png" alt="Cardboard-Terrorrists' logo">
      </div>
    </section>
    <section class="h-[50vh] flex flex-col gap-12 max-w-6xl mt-32 sm:flex-row">
      <div class="flex px-8 py-4 gap-8 border-b-2 sm:border-r-2 sm:border-b-0 sm:flex-col sm:justify-center sm:w-[30%] sm:items-center" id="rosters">
        <h3 @click="this.changeRoster(roster)" :id="roster" class="font-bold cursor-pointer text-xl first:text-my-yellow" v-for="roster in Object.keys(this.rosters)" :key="roster">{{ roster }}</h3>
      </div>
      <div class="flex flex-col items-center gap-8 px-8 sm:justify-center w-full">
        <h3 class="text-my-yellow font-bold text-2xl" id="rosterName">{{ Object.keys(this.rosters)[0] }}</h3>
        <p class="text-center sm:text-left" id="rosterInfo">{{ this.rosters[Object.keys(this.rosters)[0]].info }}</p>
      </div>
    </section>
    <section class="w-screen overflow-hidden flex flex-col gap-28 pt-24 items-center">
      <div class="flex flex-col items-center">
        <h2 class="text-my-yellow text-2xl font-bold">Roster of the week</h2>
        <p>CS:GO Roster</p>
      </div>
      <div class="flex flex-col sm:flex-row sm:justify-center sm:items-center flex-wrap items-center justify-evenly text-center px-4 gap-6 max-w-6xl">
        <div>
          <img class="w-40 hover:scale-110 transition-transform ease-in-out" src="../assets/pfps/5krc1.svg" alt="player image"/>
          <p class="hidden">5krc1</p>
        </div>
        <div>
          <img class="w-40 hover:scale-110 transition-transform ease-in-out" src="../assets/pfps/Antouanij.svg" alt="player image"/>
          <p class='hidden'>Antouanij</p>
        </div>
        <div>
          <img class="w-40 hover:scale-110 transition-transform ease-in-out" src="../assets/pfps/Jason.svg" alt="player image"/>
          <p class="hidden">Jasonpotato</p>
        </div>
        <div>
          <img class="w-40 hover:scale-110 transition-transform ease-in-out" src="../assets/pfps/Krmo.svg" alt="player image"/>
          <p class="hidden">Krmometer</p>
        </div>
        <div>
          <img class="w-40 hover:scale-110 transition-transform ease-in-out" src="../assets/pfps/Goodsister.svg" alt="player image"/>
          <p class="hidden">Goodsister</p>
        </div>
        <div>
          <img class="w-40 hover:scale-110 transition-transform ease-in-out" src="../assets/pfps/Scemer.svg" alt="player image"/>
          <p class="hidden">Scemer</p>
        </div>
      </div>
    </section>
    <section class="w-full max-w-6xl flex flex-col gap-16 pt-32 text-center">
      <div>
        <h2 class="text-my-yellow text-2xl  font-bold">Content</h2>
      </div>
      <div>
        <div class="tagembed-container max-w-6xl px-4">
          <div class="tagembed-socialwall" data-wall-id="44693" view-url="https://widget.tagembed.com/44693?view"></div>
        </div>
      </div>
    </section>
  </main>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: "Home",
  data(){
    return {
      images: {
        mobile: [
          '@/assets/banner_mobile.png',
          '@/assets/banner_mobile.png',
          '@/assets/banner_mobile.png',
        ],
        desktop: [
          '@/assets/banner.png',
          '@/assets/banner.png',
        ]
      },
      carouselInterval: "" as any,
      rosters: { 
        "CS:GO": {
          info: "Great roster, consisting of five highschool friends. They fell in love with this game and came up with an idea for this organization."
        } as { info: string },
        "LOL": {
          info: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis imperdiet in purus vitae imperdiet. Nulla pellentesque risus mi, vel vulputate massa dictum ac. Donec iaculis venenatis massa nec tincidunt. Nulla pulvinar orci tristique eleifend blandit. In euismod eros a nunc pulvinar, nec consectetur sapien convallis. Nam id turpis quis mauris."
        } as {info: string},
        "Rainbow 6": {
          info: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam euismod feugiat lorem, sed pellentesque nulla interdum faucibus. Proin blandit tempor ipsum sed porttitor. Proin congue ante risus. Integer a convallis diam. Vestibulum sed dignissim sem. Aliquam a metus ante. Vestibulum vel mauris ac justo euismod viverra. Donec euismod a urna."
        } as {info: string},
      } as {[key: string]: {info: string}},
      interval: 0 as number,
    }
  },
  computed: {
    getNumOfImg(): number{
      let numOfImg: number = (window.screen.width < 640) ? this.images.desktop.length : this.images.mobile.length;
      return numOfImg
    },
  },
  methods: {
    changeRoster(roster: string) {
      // Changing text color of selected roster
      let active = document.querySelector("#rosters") as HTMLElement;
      Object.keys(active.children).forEach(key => {
        let item = (active as any)[key];
        item.classList.remove("first:text-my-yellow");
        if (item.innerHTML === roster) {
          item.classList.add("text-my-yellow");
        } else {
          item.classList.remove("text-my-yellow");
        }
      });
      // Change data displayed to selected roster's one
      let rosterData: any = this.rosters[roster].info;
      let name = document.querySelector("#rosterName") as HTMLElement;
      let info = document.querySelector("#rosterInfo") as HTMLElement;
      name.innerHTML = roster;
      info.innerHTML = rosterData;
    },
    manualCarouselForwards(){
      let carousel = document.querySelector("#carousel") as HTMLElement;
      clearInterval(this.carouselInterval);
      //show next photo
      this.interval++;
      let numOfImg: number = this.getNumOfImg;
      if (this.interval >= numOfImg){
        this.interval = 0;
        carousel.style.transform = 'translate(0)';
      } else {
        carousel.style.transform = `translate(-${this.interval}00vw)`;
      }
      console.log("forward");
      this.carouselInterval = setInterval(() => {this.interval++; this.moveCarousel();}, 5000);
    },
    manualCarouselBackwards(){
      let carousel = document.querySelector("#carousel") as HTMLElement;
      clearInterval(this.carouselInterval);
      //show next photo
      this.interval--;
      if (this.interval <= 0){
        this.interval = this.getNumOfImg;
        carousel.style.transform = 'translate(0)';
      } else {
        carousel.style.transform = `translate(-${this.interval}00vw)`;
      }
      this.carouselInterval = setInterval(() => {this.interval++; this.moveCarousel();}, 5000);
      console.log("backwards");
    },
    moveCarousel(){
      //get div with images to move it around
      let carousel = document.querySelector("#carousel") as HTMLElement;
      /* let bars = document.querySelectorAll("#imgIndicator"); */
      //move div accordingly
      let numOfImg = this.getNumOfImg;
      if (this.interval >= numOfImg){
        this.interval = 0;
        carousel.style.transform = 'translate(0)';
      } else {
        carousel.style.transform = `translate(-${this.interval}00vw)`;
      }
      //color the bottom bars accordingly
      /* bars.forEach((bar) => {bar.classList.remove('text-my-yellow')}); */
      /* bars[this.interval + 1].classList.add("text-my-yellow"); */
    }
  },
  mounted(){
    this.carouselInterval = setInterval(() => {this.interval++; this.moveCarousel();}, 5000);
  },
});
</script>
