<template>
  <div class="flex justify-center">
    <div class="grid place-items-center grid-cols-1 grid-rows-3">
      <div class="border-white border-4 my-5 py-3 px-5 bg-sky-200">
        <button class="button-class">CARD GAME NA JA</button>
      </div>
      <div class="border-white bg-sky-200 rounded-full border-4 my-5 py-3 px-5">
        <button v-on:click="play" class="button-class">Start</button>
      </div>
      <div class="border-white rounded-full border-4 my-5 py-3 px-5 bg-sky-200">
        <button class="button-class">Rule</button>
      </div>
      <div class="border-white rounded-full border-4 my-5 py-3 px-5 bg-sky-200">
        <button class="button-class" v-on:click="turnonmusic">
          Play a fucking sound (Real fucking sound)
        </button>
      </div>
    </div>
  </div>
</template>

<style>
/* cleaner css code */
.button-class {
  @apply bg-transparent text-3xl text-red-600 font-bold underline;
}
</style>

<script>
export default {
  name: "?",
  props: {
    gamestate: Number,
  },
  data() {},
  methods: {
    play() {
      console.log(this.gamestate);
      this.$emit("update", -1);
      console.log(this.gamestate);
    },
    turnonmusic() {
      //stupid audio play for fun
      var sound = new Audio("/src/assets/sound/crazylaugh.mp3");
      var sound1 = new Audio("/src/assets/sound/crazylaugh.mp3");
      var sound2 = new Audio("/src/assets/sound/crazylaugh.mp3");
      var sound3 = new Audio("/src/assets/sound/crazylaugh.mp3");
      sound.loop = true;
      sound1.loop = true;
      sound2.loop = true;
      sound3.loop = true;
      sound.play();
      setTimeout(() => {
        sound1.play();
      }, 300);
      setTimeout(() => {
        sound2.play();
      }, 600);
      setTimeout(() => {
        sound3.play();
      }, 900);
    },
  },
};
</script>
