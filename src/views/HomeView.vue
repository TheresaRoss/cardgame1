<script setup>

import Couter from '@/components/Couter.vue';
import Cardbase from '../components/Cardbase.vue';
import Deck from '../components/Deck.vue';
import { defineComponent } from 'vue'
import { useCounterStore } from '../state/stateforbot'
import { useAllcard } from '../state/allcard'




</script>
<script>
export default defineComponent({
  setup() {


  },
  data() {
    return {
      currentComponent: null,
      currentComponent2: null,
      currentComponent3: null,
      currentComponent4: null,
      currentComponent5: null,
      allnumber: [0, 1, 2, 3, 4],
      infobot: useCounterStore(),
      allcard: useAllcard(),

      obj0: {
        pos: 0,
        picture: "/src/assets/picture/hothead.jpg"
      },
      obj1: {
        pos: 1,
        picture: "/src/assets/picture/hothead.jpg"
      },
      obj2: {
        pos: 2,
        picture: "/src/assets/picture/hothead.jpg"
      },
      obj3: {
        pos: 3,
        picture: "/src/assets/picture/hothead.jpg"
      },
      obj4: {
        pos: 4,
        picture: "/src/assets/picture/hothead.jpg"
      }

    }
  },
  methods: {
    createNewComponent() {
      if (this.currentComponent) {
       
        this.createNewComponent2()

        return
      }
      //random card from deck
      const rand = Math.floor(Math.random() * this.allnumber.length)
      //console.log('random num: ', rand)
      //remove that number from deck
      const realinfo = this.allnumber[rand]
      this.allnumber.splice(rand, 1)
      //console.log('num: ',this.allnumber)

      //assign data
      this.infobot.cardname[0] = this.allcard.cardname[realinfo]
      this.infobot.cardatk[0] = this.allcard.cardatk[realinfo]
      this.infobot.cardhp[0] = this.allcard.cardhp[realinfo]
      this.infobot.cardpassive[0] = this.allcard.cardpassive[realinfo]
      this.infobot.picture[0] = this.allcard.picture[realinfo]


      this.currentComponent = Cardbase
    },
    createNewComponent2() {
      if (this.currentComponent2) {

        this.createNewComponent3()
        return
      }


      const rand = Math.floor(Math.random() * this.allnumber.length)
      const realinfo = this.allnumber[rand]

      this.allnumber.splice(rand, 1)
      //console.log('random num: ', rand)
//console.log('num: ',this.allnumber)

      this.infobot.cardname[1] = this.allcard.cardname[realinfo]
      this.infobot.cardatk[1] = this.allcard.cardatk[realinfo]
      this.infobot.cardhp[1] = this.allcard.cardhp[realinfo]
      this.infobot.cardpassive[1] = this.allcard.cardpassive[realinfo]
      this.infobot.picture[1] = this.allcard.picture[realinfo]




      this.currentComponent2 = Cardbase
    },
    createNewComponent3() {
      //console.log(this.allnumber, ' ddddddddddddddd')
      if (this.currentComponent3) {


        this.createNewComponent4()
        return
      }

      const rand = Math.floor(Math.random() * this.allnumber.length)
      const realinfo = this.allnumber[rand]

      this.allnumber.splice(rand, 1)
      //console.log('random num: ', rand)
//console.log('num: ',this.allnumber)

      this.infobot.cardatk[2] = this.allcard.cardatk[realinfo]
      this.infobot.cardname[2] = this.allcard.cardname[realinfo]
      this.infobot.cardhp[2] = this.allcard.cardhp[realinfo]
      this.infobot.cardpassive[2] = this.allcard.cardpassive[realinfo]
      this.infobot.picture[2] = this.allcard.picture[realinfo]


      this.currentComponent3 = Cardbase
    }, createNewComponent4() {
      if (this.currentComponent4) {

        this.createNewComponent5()
        return
      }

      const rand = Math.floor(Math.random() * this.allnumber.length)
      const realinfo = this.allnumber[rand]

      this.allnumber.splice(rand, 1)
      //console.log('random num: ', rand)
//console.log('num: ',this.allnumber)

      this.infobot.cardatk[3] = this.allcard.cardatk[realinfo]
      this.infobot.cardname[3] = this.allcard.cardname[realinfo]
      this.infobot.cardhp[3] = this.allcard.cardhp[realinfo]
      this.infobot.cardpassive[3] = this.allcard.cardpassive[realinfo]
      this.infobot.picture[3] = this.allcard.picture[realinfo]

      this.currentComponent4 = Cardbase
    },
    createNewComponent5() {


      const rand = Math.floor(Math.random() * this.allnumber.length)
      const realinfo = this.allnumber[rand]

      this.allnumber.splice(rand, 1)
      //console.log('random num: ', rand)
//console.log('num: ',this.allnumber)

      this.infobot.cardname[4] = this.allcard.cardname[realinfo]
      this.infobot.cardatk[4] = this.allcard.cardatk[realinfo]
      this.infobot.cardhp[4] = this.allcard.cardhp[realinfo]
      this.infobot.cardpassive[4] = this.allcard.cardpassive[realinfo]
      this.infobot.picture[4] = this.allcard.picture[realinfo]


      this.currentComponent5 = Cardbase
    }

  }
})



</script>


<template>
  <main>

    <div class="flex justify-center absolute bottom-[-1rem] scale-[0.7]     inset-x-0">
      <div class=" flex justify-center ">

        <component v-bind="obj0" :is="currentComponent" />
        <component v-bind="obj1" :is="currentComponent2" />
        <component v-bind="obj2" :is="currentComponent3" />
        <component v-bind="obj3" :is="currentComponent4" />
        <component v-bind="obj4" :is="currentComponent5" />
      </div>

    </div>


    <div class="absolute bottom-0 right-5 ">
      <div v-on:click="createNewComponent" class=" w-28 h-40  m-5">
        <Deck />
      </div>
    </div>

  </main>
</template>
