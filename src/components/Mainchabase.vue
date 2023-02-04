<template>
  <div
    v-bind:class="{
      //on Active style
      'scale-[1.2]': allcharec.active[pos],
      'scale-[1]': !allcharec.active[pos],
    }"
    class="card p-2 w-full h-full rounded-xl bg-gradient-to-tr from-purple-500 via-red-500 to-yellow-500"
  >
    <div class="bg-white w-full h-full rounded-xl">
      <img
        class="object-none w-32 h-44 rounded-xl"
        :src="allcharec.picture[pos]"
      />
    </div>
  </div>
</template>
<script setup>
import { useAllcha } from "../state/allcharec";

const allcharec = useAllcha();
</script>
<script>
export default {
  name: "card",
  props: {
    pos: String,
  },
};
</script>
