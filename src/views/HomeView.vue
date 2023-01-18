<script setup>
import { useCounterStore } from '../stores/counter';
const counter = useCounterStore()
</script>

<template>
  <main>
     <h1 class="text-3xl text-red-600 font-bold underline">
      {{ counter.count }}
    </h1>
    <h1 class="text-3xl text-red-600 font-bold underline">
      {{ counter.name }}
    </h1>
    <div>
      <button @click="counter.increaseCount" class="px-4 py-2 bg-white">+</button>
      <button @click="counter.testman" class="px-4 py-2 bg-white">-</button>
    </div>
    <div>
      <p>This Counter is: {{ counter.oddorEven }}</p>
    </div>
    <div>
      <p>TEST:</p>
    </div>
    <div>
      <h1>
        <input v-model="counter.count" class="bg-white" type="number"/>
        <input v-model="counter.name" class="bg-white" type="text"/>
      </h1>
    </div>
  </main>
</template>
