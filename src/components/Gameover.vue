<template>
  <div class="flex justify-center">
    <div class="grid place-items-center grid-cols-1 grid-rows-3">
      <div class="border-white border-4 my-5 p-3 bg-sky-200">
        <button
          class="bg-transparent text-3xl text-red-600 font-bold underline"
        >
          GAMEOVER
        </button>
      </div>
      <div class="border-white border-4 my-5 p-3 bg-sky-200">
        <button
          class="bg-transparent text-3xl text-red-600 font-bold underline"
        >
          {{ winner }} WIN!!!!
        </button>
      </div>
      <div class="border-white border-4 my-5 p-3 bg-sky-200">
        <button
          class="bg-transparent text-3xl text-red-600 font-bold underline"
          v-on:click="play"
        >
          Play again
        </button>
      </div>
      <div class="border-white border-4 my-5 p-3 bg-sky-200">
        <button
          class="bg-transparent text-3xl text-red-600 font-bold underline"
        >
          Play a fucking sound
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "?",
  props: {
    gamestate: Number,
    winner: String,
  },
  data() {},
  methods: {
    play() {
      console.log(this.gamestate);
      this.$emit("update", 0);
      console.log(this.gamestate);
    },
  },
};
</script>
