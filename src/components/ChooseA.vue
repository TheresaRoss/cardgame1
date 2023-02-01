<template>
  <div class="">
    <div class="flex justify-center">
      <div class="grid grid-cols-3 grid-rows-1 gap-8 bg-white row-span-2">
        <div
          class="border-yellow-200 border-4 mr-4 p-4 bg-transparent text-3xl text-red-600 font-bold underline"
        >
          Avatar 1
        </div>
        <div
          class="border-yellow-200 border-4 mx-4 p-4 bg-transparent text-3xl text-red-600 font-bold underline"
        >
          Avatar 2
        </div>
        <button
          class="border-yellow-200 border-4 ml-4 p-4 bg-transparent text-3xl text-red-600 font-bold underline"
        >
          Avatar 3
        </button>
      </div>
    </div>
    <div class="grid place-items-center grid-cols-1 grid-rows-3">
      <div class="border-white border-4 my-5 p-3 bg-sky-200">
        <div class="bg-transparent text-3xl text-red-600 font-bold underline">
          CHOOSING
        </div>
      </div>

      <div class="border-white border-4 my-5 p-3 bg-sky-200">
        <button
          v-on:click="play"
          class="bg-transparent text-3xl text-red-600 font-bold underline"
        >
          Start
        </button>
      </div>

      <div class="border-white border-4 my-5 p-3 bg-sky-200">
        <button
          class="bg-transparent text-3xl text-red-600 font-bold underline"
        >
          Play a fucking sound (Real fucking sound)
        </button>
      </div>
    </div>
    <div class="flex justify-center mt-20">
      <div class="grid grid-cols-3 grid-rows-1 gap-8 bg-white row-span-2">
        <div
          class="border-yellow-200 border-4 mr-4 p-4 bg-transparent text-3xl text-red-600 font-bold underline"
        >
          Avatar 1
        </div>
        <div
          class="border-yellow-200 border-4 mx-4 p-4 bg-transparent text-3xl text-red-600 font-bold underline"
        >
          Avatar 2
        </div>
        <button
          class="border-yellow-200 border-4 ml-4 p-4 bg-transparent text-3xl text-red-600 font-bold underline"
        >
          Avatar 3
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
  },
  data() {},
  methods: {
    play() {
      console.log(this.gamestate);
      this.$emit("update", 1);
      console.log(this.gamestate);
    },
  },
};
</script>
