<template>
  <div class="w-5 ml-1 h-5 bg-red-300 flex items-center justify-center">
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
