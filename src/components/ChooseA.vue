<script setup>
import Mainchabase from "../components/Mainchabase.vue";
import { useAllcha } from "../state/allcharec";
import { useCounterStore } from "../state/stateforbot";

import { topPlayer } from "../state/statefortop";
</script>

<template>
  <div class="">
    <div class="flex justify-center">
      <div
        class="grid mt-10 grid-cols-3 grid-rows-2 gap-8 p-8 bg-white bg-opacity-10 rounded-xl row-span-2"
      >
        <div
          class="bg-transparent text-3xl text-red-600 font-bold underline"
          v-on:click="setActivela(0)"
        >
          <Mainchabase pos="0" />
        </div>
        <div
          class="bg-transparent text-3xl text-red-600 font-bold underline"
          v-on:click="setActivela(1)"
        >
          <Mainchabase pos="1" />
        </div>
        <div
          class="bg-transparent text-3xl text-red-600 font-bold underline"
          v-on:click="setActivela(2)"
        >
          <Mainchabase pos="2" />
        </div>
        <div
          class="bg-transparent text-3xl text-red-600 font-bold underline"
          v-on:click="setActivela(3)"
        >
          <Mainchabase pos="3" />
        </div>
        <div
          class="bg-transparent text-3xl text-red-600 font-bold underline"
          v-on:click="setActivela(4)"
        >
          <Mainchabase pos="4" />
        </div>
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
    </div>
  </div>
</template>

<script>
export default {
  name: "?",
  props: {
    gamestate: Number,
  },
  data() {
    return {
      allcharec: useAllcha(),
      infobot: useCounterStore(),

      infotop: topPlayer(),
    };
  },
  methods: {
    play() {
      var pos = -1;
      var begin = 0;
      this.allcharec.active.forEach((element) => {
        if (element === true) {
          pos = begin;
        }
        begin++;
      });
      if (pos === -1) {
        return;
      }
      this.infobot.platerava = pos;
      this.$emit("update", 1);
    },
    setActivela(pos) {
      var sound = new Audio(this.allcharec.voice[pos]);
      sound.play();
      this.allcharec.active.fill(false);
      this.allcharec.active[pos] = true;
    },
  },
};
</script>
