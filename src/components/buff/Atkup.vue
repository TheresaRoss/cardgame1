<template>
  <div class="w-5 h-5 bg-transparent flex items-center justify-center">
    <img :src="'src/assets/picture/buff/atkup.png'" alt="atkup" />
    <div class="bg-transparent text-black">{{ duration }}</div>
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
