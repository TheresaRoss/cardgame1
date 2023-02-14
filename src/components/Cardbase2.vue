<template>
  <div
    v-bind:class="{
      //on Active style
      'scale-[1.2]': infotop.active[pos],
      'scale-[1]': !infotop.active[pos],
    }"
    class="card mx-2 p-2 w-full h-full rounded-xl bg-gradient-to-tr from-purple-500 via-red-500 to-yellow-500"
  >
    <div class="pt-2 px-5 pb-5 bg-white w-full h-full rounded-xl">
      <div
        class="absolute right-[-5%] top-[-5%] rounded-full text-xs w-8 h-8 bg-yellow-400 text-black justify-center flex items-center"
      >
        {{ infotop.cardcost[pos] }}
      </div>
      <div class="flex justify-center bg-white">
        <h1 class="text-black text-xl bg-white">{{ infotop.cardname[pos] }}</h1>
      </div>
      <img class="w-[6rem]" :src="infotop.picture[pos]" />
      <div class="flex relative pt-1 bg-white">
        <img class="bg-white w-[1rem]" src="@/assets/picture/swordatk.png" />
        <p class="text-xs text-black bg-white ml-1">
          {{ infotop.cardatk[pos] }}
        </p>
        <div class="absolute top-0 pt-1 right-0 bg-white flex">
          <img class="bg-white w-[1rem]" src="@/assets/picture/hearthp.png" />
          <p class="text-xs text-black bg-white ml-1">
            {{ infotop.cardhp[pos] }}
          </p>
        </div>
      </div>
      <div class="bg-transparent absolute top-[20%] left-[5%]">
        <Atkup
          v-bind:class="{
            //on Active style invisible:
            invisible: !infotop.buff[pos].get('Increaseatk'),
            visible: infotop.buff[pos].get('Increaseatk'),
          }"
          v-bind:duration="infotop.buff[pos].get('Increaseatk')"
        />
      </div>

      <!-- Place for debuff in card -->
      <div class="bg-transparent absolute top-[20%] right-[5%]">
        <Atkdown
          class="mb-2"
          v-bind:class="{
            //on Active style invisible:
            invisible: !infotop.debuff[pos].get('Decreaseatk'),
            visible: infotop.debuff[pos].get('Decreaseatk'),
          }"
          v-bind:duration="infotop.debuff[pos].get('Decreaseatk')"
        />
      </div>
    </div>
  </div>
</template>
<script setup>
import { useCounterStore } from "../state/stateforbot";
import { topPlayer } from "../state/statefortop";
import Atkup from "./buff/Atkup.vue";
import Atkdown from "./debuff/Atkdown.vue";
const infotop = topPlayer();
</script>
<script>
export default {
  name: "card",
  props: {
    pos: String,
  },
};
</script>
