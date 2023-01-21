<script setup>
import Couter from "@/components/Couter.vue";
import Cardbase from "../components/Cardbase.vue";
import Deck from "../components/Deck.vue";
import { defineComponent } from "vue";
import { useCounterStore } from "../state/stateforbot";
import { useAllcard } from "../state/allcard";
import { topPlayer } from "../state/statefortop";
import Cardbase2 from "../components/Cardbase2.vue";
</script>

<script>
export default defineComponent({
  setup() {},
  data() {
    return {
      currentComponent: null,
      currentComponent2: null,
      currentComponent3: null,
      currentComponent4: null,
      currentComponent5: null,
      activeCard1: null,
      activeCard2: null,
      activeCard3: null,
      activeCard4: null,
      activeCard5: null,
      allnumber: [0, 1, 2, 3, 4],
      numDeckTop: [0, 1, 2, 3, 4],
      infobot: useCounterStore(),
      allcard: useAllcard(),
      infotop: topPlayer(),
      topOnhand1: null,
      topOnhand2: null,
      topOnhand3: null,
      topOnhand4: null,
      topOnhand5: null,
      activetopCard1: null,
      activetopCard2: null,
      activetopCard3: null,
      activetopCard4: null,
      activetopCard5: null,
    };
  },
  methods: {
    drawTop() {
      const sound = new Audio("/src/assets/sound/wargoddaimubai.mp3");
      sound.play();
      if (this.topOnhand1) {
        this.drawTop2();

        return;
      }
      //random card from deck
      const rand = Math.floor(Math.random() * this.numDeckTop.length);
      //console.log('random num: ', rand)
      //remove that number from deck
      const realinfo = this.numDeckTop[rand];
      this.numDeckTop.splice(rand, 1);
      //console.log('num: ',this.allnumber)

      //assign data
      this.infotop.cardname[0] = this.allcard.cardname[realinfo];
      this.infotop.cardatk[0] = this.allcard.cardatk[realinfo];
      this.infotop.cardhp[0] = this.allcard.cardhp[realinfo];
      this.infotop.cardpassive[0] = this.allcard.cardpassive[realinfo];
      this.infotop.picture[0] = this.allcard.picture[realinfo];

      this.topOnhand1 = Cardbase2;
    },
    drawTop2() {
      if (this.topOnhand2) {
        this.drawTop3();
        return;
      }

      const rand = Math.floor(Math.random() * this.numDeckTop.length);

      const realinfo = this.numDeckTop[rand];
      this.numDeckTop.splice(rand, 1);

      //assign data
      this.infotop.cardname[1] = this.allcard.cardname[realinfo];
      this.infotop.cardatk[1] = this.allcard.cardatk[realinfo];
      this.infotop.cardhp[1] = this.allcard.cardhp[realinfo];
      this.infotop.cardpassive[1] = this.allcard.cardpassive[realinfo];
      this.infotop.picture[1] = this.allcard.picture[realinfo];

      this.topOnhand2 = Cardbase2;
    },
    drawTop3() {
      if (this.topOnhand3) {
        this.drawTop4();
        return;
      }

      const rand = Math.floor(Math.random() * this.numDeckTop.length);

      const realinfo = this.numDeckTop[rand];
      this.numDeckTop.splice(rand, 1);

      //assign data
      this.infotop.cardname[2] = this.allcard.cardname[realinfo];
      this.infotop.cardatk[2] = this.allcard.cardatk[realinfo];
      this.infotop.cardhp[2] = this.allcard.cardhp[realinfo];
      this.infotop.cardpassive[2] = this.allcard.cardpassive[realinfo];
      this.infotop.picture[2] = this.allcard.picture[realinfo];

      this.topOnhand3 = Cardbase2;
    },
    drawTop4() {
      if (this.topOnhand4) {
        this.drawTop5();
        return;
      }

      const rand = Math.floor(Math.random() * this.numDeckTop.length);

      const realinfo = this.numDeckTop[rand];
      this.numDeckTop.splice(rand, 1);

      //assign data
      this.infotop.cardname[3] = this.allcard.cardname[realinfo];
      this.infotop.cardatk[3] = this.allcard.cardatk[realinfo];
      this.infotop.cardhp[3] = this.allcard.cardhp[realinfo];
      this.infotop.cardpassive[3] = this.allcard.cardpassive[realinfo];
      this.infotop.picture[3] = this.allcard.picture[realinfo];

      this.topOnhand4 = Cardbase2;
    },
    drawTop5() {
      const rand = Math.floor(Math.random() * this.numDeckTop.length);

      const realinfo = this.numDeckTop[rand];
      this.numDeckTop.splice(rand, 1);

      //assign data
      this.infotop.cardname[4] = this.allcard.cardname[realinfo];
      this.infotop.cardatk[4] = this.allcard.cardatk[realinfo];
      this.infotop.cardhp[4] = this.allcard.cardhp[realinfo];
      this.infotop.cardpassive[4] = this.allcard.cardpassive[realinfo];
      this.infotop.picture[4] = this.allcard.picture[realinfo];

      this.topOnhand5 = Cardbase2;
    },
    createNewComponent() {
      const sound = new Audio("/src/assets/sound/wargoddaimubai.mp3");
      sound.play();
      if (this.currentComponent) {
        this.createNewComponent2();

        return;
      }
      //random card from deck
      const rand = Math.floor(Math.random() * this.allnumber.length);
      //console.log('random num: ', rand)
      //remove that number from deck
      const realinfo = this.allnumber[rand];
      this.allnumber.splice(rand, 1);
      //console.log('num: ',this.allnumber)

      //assign data
      this.infobot.cardname[0] = this.allcard.cardname[realinfo];
      this.infobot.cardatk[0] = this.allcard.cardatk[realinfo];
      this.infobot.cardhp[0] = this.allcard.cardhp[realinfo];
      this.infobot.cardpassive[0] = this.allcard.cardpassive[realinfo];
      this.infobot.picture[0] = this.allcard.picture[realinfo];

      this.currentComponent = Cardbase;
    },
    createNewComponent2() {
      if (this.currentComponent2) {
        this.createNewComponent3();
        return;
      }

      const rand = Math.floor(Math.random() * this.allnumber.length);
      const realinfo = this.allnumber[rand];

      this.allnumber.splice(rand, 1);
      //console.log('random num: ', rand)
      //console.log('num: ',this.allnumber)

      this.infobot.cardname[1] = this.allcard.cardname[realinfo];
      this.infobot.cardatk[1] = this.allcard.cardatk[realinfo];
      this.infobot.cardhp[1] = this.allcard.cardhp[realinfo];
      this.infobot.cardpassive[1] = this.allcard.cardpassive[realinfo];
      this.infobot.picture[1] = this.allcard.picture[realinfo];

      this.currentComponent2 = Cardbase;
    },
    createNewComponent3() {
      //console.log(this.allnumber, ' ddddddddddddddd')
      if (this.currentComponent3) {
        this.createNewComponent4();
        return;
      }

      const rand = Math.floor(Math.random() * this.allnumber.length);
      const realinfo = this.allnumber[rand];

      this.allnumber.splice(rand, 1);
      //console.log('random num: ', rand)
      //console.log('num: ',this.allnumber)

      this.infobot.cardatk[2] = this.allcard.cardatk[realinfo];
      this.infobot.cardname[2] = this.allcard.cardname[realinfo];
      this.infobot.cardhp[2] = this.allcard.cardhp[realinfo];
      this.infobot.cardpassive[2] = this.allcard.cardpassive[realinfo];
      this.infobot.picture[2] = this.allcard.picture[realinfo];

      this.currentComponent3 = Cardbase;
    },
    createNewComponent4() {
      if (this.currentComponent4) {
        this.createNewComponent5();
        return;
      }

      const rand = Math.floor(Math.random() * this.allnumber.length);
      const realinfo = this.allnumber[rand];

      this.allnumber.splice(rand, 1);
      //console.log('random num: ', rand)
      //console.log('num: ',this.allnumber)

      this.infobot.cardatk[3] = this.allcard.cardatk[realinfo];
      this.infobot.cardname[3] = this.allcard.cardname[realinfo];
      this.infobot.cardhp[3] = this.allcard.cardhp[realinfo];
      this.infobot.cardpassive[3] = this.allcard.cardpassive[realinfo];
      this.infobot.picture[3] = this.allcard.picture[realinfo];

      this.currentComponent4 = Cardbase;
    },
    createNewComponent5() {
      const rand = Math.floor(Math.random() * this.allnumber.length);
      const realinfo = this.allnumber[rand];

      this.allnumber.splice(rand, 1);
      //console.log('random num: ', rand)
      //console.log('num: ',this.allnumber)

      this.infobot.cardname[4] = this.allcard.cardname[realinfo];
      this.infobot.cardatk[4] = this.allcard.cardatk[realinfo];
      this.infobot.cardhp[4] = this.allcard.cardhp[realinfo];
      this.infobot.cardpassive[4] = this.allcard.cardpassive[realinfo];
      this.infobot.picture[4] = this.allcard.picture[realinfo];

      this.currentComponent5 = Cardbase;
    },

    animateElement(pos) {
      console.log(pos);
      const posq = parseInt(pos);
      const sound = new Audio("/src/assets/sound/youdumb.mp3");
      sound.play();

      if (this.activeCard1) {
        if (this.activeCard2) {
          if (this.activeCard3) {
            if (this.activeCard4) {
              //relocate data
              this.infobot.cardatk[9] = this.infobot.cardatk[posq];
              this.infobot.cardname[9] = this.infobot.cardname[posq];
              this.infobot.cardhp[9] = this.infobot.cardhp[posq];
              this.infobot.cardpassive[9] = this.infobot.cardpassive[posq];
              this.infobot.picture[9] = this.infobot.picture[posq];
              switch (posq) {
                case 0:
                  this.currentComponent = null;
                  break;
                case 1:
                  this.currentComponent2 = null;
                  break;
                case 2:
                  this.currentComponent3 = null;
                  break;
                case 3:
                  this.currentComponent4 = null;
                  break;
                case 4:
                  this.currentComponent5 = null;
                  break;
                default:
                  break;
              }

              this.activeCard5 = Cardbase;
              return;
            }
            //relocate data
            this.infobot.cardatk[8] = this.infobot.cardatk[posq];
            this.infobot.cardname[8] = this.infobot.cardname[posq];
            this.infobot.cardhp[8] = this.infobot.cardhp[posq];
            this.infobot.cardpassive[8] = this.infobot.cardpassive[posq];
            this.infobot.picture[8] = this.infobot.picture[posq];
            switch (posq) {
              case 0:
                this.currentComponent = null;
                break;
              case 1:
                this.currentComponent2 = null;
                break;
              case 2:
                this.currentComponent3 = null;
                break;
              case 3:
                this.currentComponent4 = null;
                break;
              case 4:
                this.currentComponent5 = null;
                break;
              default:
                break;
            }

            this.activeCard4 = Cardbase;
            return;
          }
          //relocate data
          this.infobot.cardatk[7] = this.infobot.cardatk[posq];
          this.infobot.cardname[7] = this.infobot.cardname[posq];
          this.infobot.cardhp[7] = this.infobot.cardhp[posq];
          this.infobot.cardpassive[7] = this.infobot.cardpassive[posq];
          this.infobot.picture[7] = this.infobot.picture[posq];

          switch (posq) {
            case 0:
              this.currentComponent = null;
              break;
            case 1:
              this.currentComponent2 = null;
              break;
            case 2:
              this.currentComponent3 = null;
              break;
            case 3:
              this.currentComponent4 = null;
              break;
            case 4:
              this.currentComponent5 = null;
              break;
            default:
              break;
          }

          this.activeCard3 = Cardbase;
          return;
        }
        //relocate data
        this.infobot.cardatk[6] = this.infobot.cardatk[posq];
        this.infobot.cardname[6] = this.infobot.cardname[posq];
        this.infobot.cardhp[6] = this.infobot.cardhp[posq];
        this.infobot.cardpassive[6] = this.infobot.cardpassive[posq];
        this.infobot.picture[6] = this.infobot.picture[posq];

        switch (posq) {
          case 0:
            this.currentComponent = null;
            break;
          case 1:
            this.currentComponent2 = null;
            break;
          case 2:
            this.currentComponent3 = null;
            break;
          case 3:
            this.currentComponent4 = null;
            break;
          case 4:
            this.currentComponent5 = null;
            break;
          default:
            break;
        }

        this.activeCard2 = Cardbase;
        return;
      }
      //relocate data
      this.infobot.cardatk[5] = this.infobot.cardatk[posq];
      this.infobot.cardname[5] = this.infobot.cardname[posq];
      this.infobot.cardhp[5] = this.infobot.cardhp[posq];
      this.infobot.cardpassive[5] = this.infobot.cardpassive[posq];
      this.infobot.picture[5] = this.infobot.picture[posq];
      switch (posq) {
        case 0:
          this.currentComponent = null;
          break;
        case 1:
          this.currentComponent2 = null;
          break;
        case 2:
          this.currentComponent3 = null;
          break;
        case 3:
          this.currentComponent4 = null;
          break;
        case 4:
          this.currentComponent5 = null;
          break;
        default:
          break;
      }

      this.activeCard1 = Cardbase;
      return;
    },

    useCardtop(pos) {
      console.log(pos);
      const posq = parseInt(pos);
      const sound = new Audio("/src/assets/sound/youdumb.mp3");
      sound.play();

      if (this.activetopCard1) {
        if (this.activetopCard2) {
          if (this.activetopCard3) {
            if (this.activetopCard4) {
              //relocate data
              this.infotop.cardatk[9] = this.infotop.cardatk[posq];
              this.infotop.cardname[9] = this.infotop.cardname[posq];
              this.infotop.cardhp[9] = this.infotop.cardhp[posq];
              this.infotop.cardpassive[9] = this.infotop.cardpassive[posq];
              this.infotop.picture[9] = this.infotop.picture[posq];
              switch (posq) {
                case 0:
                  this.topOnhand1 = null;
                  break;
                case 1:
                  this.topOnhand2 = null;
                  break;
                case 2:
                  this.topOnhand3 = null;
                  break;
                case 3:
                  this.topOnhand4 = null;
                  break;
                case 4:
                  this.topOnhand5 = null;
                  break;
                default:
                  break;
              }

              this.activetopCard5 = Cardbase2;
              return;
            }
            //relocate data
            this.infotop.cardatk[8] = this.infotop.cardatk[posq];
            this.infotop.cardname[8] = this.infotop.cardname[posq];
            this.infotop.cardhp[8] = this.infotop.cardhp[posq];
            this.infotop.cardpassive[8] = this.infotop.cardpassive[posq];
            this.infotop.picture[8] = this.infotop.picture[posq];
            switch (posq) {
              case 0:
                this.topOnhand1 = null;
                break;
              case 1:
                this.topOnhand2 = null;
                break;
              case 2:
                this.topOnhand3 = null;
                break;
              case 3:
                this.topOnhand4 = null;
                break;
              case 4:
                this.topOnhand5 = null;
                break;
              default:
                break;
            }

            this.activetopCard4 = Cardbase2;
            return;
          }
          //relocate data
          this.infotop.cardatk[7] = this.infotop.cardatk[posq];
          this.infotop.cardname[7] = this.infotop.cardname[posq];
          this.infotop.cardhp[7] = this.infotop.cardhp[posq];
          this.infotop.cardpassive[7] = this.infotop.cardpassive[posq];
          this.infotop.picture[7] = this.infotop.picture[posq];
          switch (posq) {
            case 0:
              this.topOnhand1 = null;
              break;
            case 1:
              this.topOnhand2 = null;
              break;
            case 2:
              this.topOnhand3 = null;
              break;
            case 3:
              this.topOnhand4 = null;
              break;
            case 4:
              this.topOnhand5 = null;
              break;
            default:
              break;
          }

          this.activetopCard3 = Cardbase2;
          return;
        }
        //relocate data
        this.infotop.cardatk[6] = this.infotop.cardatk[posq];
        this.infotop.cardname[6] = this.infotop.cardname[posq];
        this.infotop.cardhp[6] = this.infotop.cardhp[posq];
        this.infotop.cardpassive[6] = this.infotop.cardpassive[posq];
        this.infotop.picture[6] = this.infotop.picture[posq];
        switch (posq) {
          case 0:
            this.topOnhand1 = null;
            break;
          case 1:
            this.topOnhand2 = null;
            break;
          case 2:
            this.topOnhand3 = null;
            break;
          case 3:
            this.topOnhand4 = null;
            break;
          case 4:
            this.topOnhand5 = null;
            break;
          default:
            break;
        }

        this.activetopCard2 = Cardbase2;
        return;
      }
      //relocate data
      this.infotop.cardatk[5] = this.infotop.cardatk[posq];
      this.infotop.cardname[5] = this.infotop.cardname[posq];
      this.infotop.cardhp[5] = this.infotop.cardhp[posq];
      this.infotop.cardpassive[5] = this.infotop.cardpassive[posq];
      this.infotop.picture[5] = this.infotop.picture[posq];

      //dont know how to concen string to varieble, using eval will result
      //in copy, and that won't change the real component to null
      switch (posq) {
        case 0:
          this.topOnhand1 = null;
          break;
        case 1:
          this.topOnhand2 = null;
          break;
        case 2:
          this.topOnhand3 = null;
          break;
        case 3:
          this.topOnhand4 = null;
          break;
        case 4:
          this.topOnhand5 = null;
          break;
        default:
          break;
      }

      this.activetopCard1 = Cardbase2;
      return;
    },
  },
});
</script>

<template>
  <main>
    <!-- Card on hand for top player -->
    <div class="flex justify-center absolute top-0 scale-[0.6] inset-x-0">
      <div class="flex justify-center">
        <component pos="0" v-on:click="useCardtop(0)" :is="topOnhand1" />
        <component pos="1" v-on:click="useCardtop(1)" :is="topOnhand2" />
        <component pos="2" v-on:click="useCardtop(2)" :is="topOnhand3" />
        <component pos="3" v-on:click="useCardtop(3)" :is="topOnhand4" />
        <component pos="4" v-on:click="useCardtop(4)" :is="topOnhand5" />
      </div>
    </div>

    <!-- Active card for top player -->
    <div class="flex justify-center absolute scale-[0.7] top-[25%] inset-x-0">
      <div class="flex justify-center">
        <component pos="5" :is="activetopCard1" />
        <component pos="6" :is="activetopCard2" />
        <component pos="7" :is="activetopCard3" />
        <component pos="8" :is="activetopCard4" />
        <component pos="9" :is="activetopCard5" />
      </div>
    </div>

    <!-- card on hand for bot player -->

    <div
      class="flex justify-center absolute bottom-[-1rem] scale-[0.6] inset-x-0"
    >
      <div class="flex justify-center">
        <component
          v-on:click="animateElement(0)"
          pos="0"
          :is="currentComponent"
        />
        <component
          v-on:click="animateElement(1)"
          pos="1"
          :is="currentComponent2"
        />
        <component
          v-on:click="animateElement(2)"
          pos="2"
          :is="currentComponent3"
        />
        <component
          v-on:click="animateElement(3)"
          pos="3"
          :is="currentComponent4"
        />
        <component
          v-on:click="animateElement(4)"
          pos="4"
          :is="currentComponent5"
        />
      </div>
    </div>
    <!-- Active card for bot player -->
    <div class="flex justify-center absolute scale-[0.7] top-[50%] inset-x-0">
      <div class="flex justify-center">
        <component pos="5" :is="activeCard1" />
        <component pos="6" :is="activeCard2" />
        <component pos="7" :is="activeCard3" />
        <component pos="8" :is="activeCard4" />
        <component pos="9" :is="activeCard5" />
      </div>
    </div>

    <!-- Deck for top player -->
    <div class="absolute top-0 right-5">
      <div v-on:click="drawTop" class="w-28 h-40 m-5">
        <Deck />
      </div>
    </div>
    <!-- Deck for bot player -->
    <div class="absolute bottom-0 right-5">
      <div v-on:click="createNewComponent" class="w-28 h-40 m-5">
        <Deck />
      </div>
    </div>
  </main>
</template>
