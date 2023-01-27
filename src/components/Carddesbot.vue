<template>
  <div
    class="card mx-2 p-2 w-full h-full rounded-xl bg-gradient-to-tr from-purple-500 via-red-500 to-yellow-500"
  >
    <div class="pt-2 px-5 pb-5 bg-white w-full h-full rounded-xl">
      <div
        class="absolute right-[-5%] top-[-5%] rounded-full text-xs w-8 h-8 bg-yellow-400 text-black justify-center flex items-center"
      >
        {{ infobot.cardcost[pos] }}
      </div>
      <div class="flex justify-center bg-white">
        <h1 class="text-black text-xl bg-white">{{ infobot.cardname[pos] }}</h1>
      </div>
      <img class="w-[6rem]" :src="infobot.picture[pos]" />
      <div class="flex relative pt-1 bg-white">
        <img class="bg-white w-[1rem]" src="@/assets/picture/swordatk.png" />
        <p class="text-xs text-black bg-white ml-1">
          {{ infobot.cardatk[pos] }}
        </p>
        <div class="absolute top-0 pt-1 right-0 bg-white flex">
          <img class="bg-white w-[1rem]" src="@/assets/picture/hearthp.png" />
          <p class="text-xs text-black bg-white ml-1">
            {{ infobot.cardhp[pos] }}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import { useCounterStore } from "../state/stateforbot";
const infobot = useCounterStore();
</script>
<script>
export default {
  name: "card",
  props: {
    pos: String,
  },
};
</script>
