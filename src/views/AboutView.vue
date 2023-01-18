<script setup>
import { useCounterStore } from '../stores/counter';
const counter = useCounterStore()
</script>

<template>
  <div class="about">
    <h1>This is an about page</h1>
    <h1 class="text-3xl text-red-600 font-bold underline">
      {{ counter.count }}
    </h1>
  </div>
</template>

