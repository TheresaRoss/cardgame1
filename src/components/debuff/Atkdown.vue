<template>
  <div class="w-5 mr-1 h-5 bg-transparent flex items-center justify-center">
    <div class="bg-transparent text-black mr-1">{{ duration }}</div>
    <img :src="'src/assets/picture/debuff/atkdown.png'" alt="atkdown" />
  </div>
</template>
<script>
export default {
  name: "card",
  props: {
    duration: String,
  },
};
</script>
