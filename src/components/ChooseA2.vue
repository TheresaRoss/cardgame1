<script setup>
import Mainchabase from "../components/Mainchabase.vue";
import { useAllcha } from "../state/allcharec";
import { useCounterStore } from "../state/stateforbot";
import { stateDes } from "../state/statedes";
import { topPlayer } from "../state/statefortop";
</script>

<template>
  <div class="">
    <div class="items-center flex justify-center">
      <div
        class="bg-sky-200 p-4 mt-4 border-white border-4 flex justify-center text-3xl text-red-600 font-bold underline"
      >
        CHOOSING YOUR AVATAR (BOT PLAYER)
      </div>
    </div>
    <div class="flex justify-center">
      <div
        class="grid mt-10 grid-cols-3 grid-rows-2 gap-8 p-8 bg-white bg-opacity-10 rounded-xl row-span-2"
      >
        <div
          class="bg-transparent text-3xl hover:scale-[1.1] text-red-600 font-bold underline"
          v-on:click="setActivela(0)"
          v-on:mouseenter="setHoverdes(0)"
          v-on:mouseleave="resetHoverdes"
        >
          <Mainchabase pos="0" />
        </div>
        <div
          class="bg-transparent text-3xl hover:scale-[1.1] text-red-600 font-bold underline"
          v-on:click="setActivela(1)"
          v-on:mouseenter="setHoverdes(1)"
          v-on:mouseleave="resetHoverdes"
        >
          <Mainchabase pos="1" />
        </div>
        <div
          class="bg-transparent text-3xl hover:scale-[1.1] text-red-600 font-bold underline"
          v-on:click="setActivela(2)"
          v-on:mouseenter="setHoverdes(2)"
          v-on:mouseleave="resetHoverdes"
        >
          <Mainchabase pos="2" />
        </div>
        <div
          class="bg-transparent text-3xl hover:scale-[1.1] text-red-600 font-bold underline"
          v-on:click="setActivela(3)"
          v-on:mouseenter="setHoverdes(3)"
          v-on:mouseleave="resetHoverdes"
        >
          <Mainchabase pos="3" />
        </div>
        <div
          class="bg-transparent text-3xl hover:scale-[1.1] text-red-600 font-bold underline"
          v-on:click="setActivela(4)"
          v-on:mouseenter="setHoverdes(4)"
          v-on:mouseleave="resetHoverdes"
        >
          <Mainchabase pos="4" />
        </div>
      </div>
    </div>
    <div class="grid place-items-center grid-cols-1 grid-rows-2">
      <div class="border-white border-4 my-5 p-3 bg-sky-200">
        <button
          v-on:click="play"
          class="bg-transparent text-3xl text-red-600 font-bold underline"
        >
          Start
        </button>
      </div>
    </div>
    <div
      v-bind:class="{
        //on Active style
        visible: show,
        invisible: !show,
      }"
      class="bg-white bg-opacity-10 absolute top-[15%] inset-y-0 left-12 rounded-xl w-[20%] h-[60%]"
    >
      <div class="flex justify-center bg-transparent mx-3 my-2">
        {{ statedes.cardname }}
      </div>
      <div class="flex justify-center bg-transparent mx-2 my-2">
        {{ statedes.description }}
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
      statedes: stateDes(),
      infotop: topPlayer(),
      show: false,
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
      this.infotop.playerava = this.allcharec.picture[pos];
      this.$emit("update", 1); //change state to set avatar for bot
    },
    setActivela(pos) {
      var sound = new Audio(this.allcharec.voice[pos]);
      sound.play();
      this.allcharec.active.fill(false);
      this.allcharec.active[pos] = true;
    },
    setHoverdes(pos) {
      this.show = true;
      this.statedes.cardname = pos;
      this.statedes.description = this.allcharec.description[pos];
    },
    resetHoverdes() {
      this.show = false;
      this.statedes.cardname = "";
      this.statedes.description = "";
    },
  },
};
</script>
