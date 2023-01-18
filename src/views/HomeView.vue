<script setup>
import { useCounterStore } from '../stores/counter';
import Couter from '@/components/Couter.vue';
import Cardbase from '../components/Cardbase.vue';
import Deck from '../components/Deck.vue';
import { defineComponent } from 'vue'
const counter = useCounterStore()

</script>
<script>
export default defineComponent ({

  data() {
    return {
      currentComponent: null,
      currentComponent2: null,
      currentComponent3: null,
      currentComponent4: null,
      currentComponent5: null,
      
      obj: {
        name: 'PARTYMAN',
        atk: 20,
        hp: 100,
        picture: "/src/assets/picture/hothead.jpg"
      },
    }
  },
  methods: {
    createNewComponent() {
      if(this.currentComponent){
        console.log('aa')
        this.createNewComponent2()
        return
      }
      this.currentComponent = Cardbase
    },
    createNewComponent2(){ 
      if(this.currentComponent2){
        console.log('aa')
        this.createNewComponent3()
        return
      }
      console.log('qq')
      this.currentComponent2 = Cardbase
    },
    createNewComponent3(){ 
      if(this.currentComponent3){
        console.log('aa')
        this.createNewComponent4()
        return
      }
      console.log('qq3')
      this.currentComponent3 = Cardbase
    }, createNewComponent4(){ 
      if(this.currentComponent4){
        console.log('aa')
        this.createNewComponent5()
        return
      }
      console.log('qq4')
      this.currentComponent4 = Cardbase
    },
    createNewComponent5(){ 
   
      console.log('qq5')
      this.currentComponent5 = Cardbase
    }

  }
})



</script>


<template>
  <main>
    <Couter />
    <div class="flex justify-center relative top-40">
      <div  class="w-36 flex justify-center ">
        <component v-bind="obj" :is="currentComponent"/>
        <component v-bind="obj" :is="currentComponent2"/>
        <component v-bind="obj" :is="currentComponent3"/>
        <component v-bind="obj" :is="currentComponent4"/>
        <component v-bind="obj" :is="currentComponent5"/>
      </div>
      
    </div>
   
   
    <div class="absolute bottom-0 right-5 ">
      <div v-on:click="createNewComponent" class=" w-28 h-40  m-5">
      <Deck />
      </div>
    </div>
   
  </main>
</template>
