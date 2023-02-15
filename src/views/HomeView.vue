<script setup>
import Couter from "@/components/Couter.vue";
import Cardbase from "../components/Cardbase.vue";
import Deck from "../components/Deck.vue";
import { defineComponent } from "vue";
import { stateDes } from "../state/statedes";
import { useCounterStore } from "../state/stateforbot";
import { useAllcard } from "../state/allcard";
import { topPlayer } from "../state/statefortop";
import { gameMech } from "../state/gamemech";
import Menu from "../components/Menu.vue";
import Gameover from "../components/Gameover.vue";
import ChooseA from "../components/ChooseA.vue";
import ChooseA2 from "../components/ChooseA2.vue";

import Cardbase2 from "../components/Cardbase2.vue";
</script>

<script>
export default defineComponent({
  setup() {},
  computed: {
    hpPer() {
      return this.topplayerhpper + "%";
    },
    hpPer2() {
      return this.botplayerhpper + "%";
    },
  },
  data() {
    return {
      gamestate: 1, //0 = main menu -1 = choosing avatar -2 = choosing avatar for bot 1 = gameplay 2 = gameover
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
      winner: "",
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
      botplayerclickStatus: 0,
      activebotCardpos: 0,
      topplayerclickStatus: 0,
      activetopCardpos: 0,
      gamemech: gameMech(),
      onhovercard: false,
      statedes: stateDes(),
      topplayerhpper: 100,
      botplayerhpper: 100,
      canatktopplayer: false,
      canatkbotplayer: false,
    };
  },
  methods: {
    drawTop() {
      const sound = new Audio("/src/assets/sound/wargoddaimubai.mp3");
      sound.volume = 0.7;

      //u can draw on your turn only
      if (!this.gamemech.whoseTurn) {
        return;
      }

      //minus draw cost
      if (this.infotop.money < 10) {
        return;
      }

      sound.play();
      this.infotop.money -= 10;

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
      this.infotop.cardcost[0] = this.allcard.cardcost[realinfo];
      this.infotop.carddes[0] = this.allcard.carddes[realinfo];
      this.infotop.cardpassive[0] = this.allcard.cardpassive[realinfo];

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
      this.infotop.cardcost[1] = this.allcard.cardcost[realinfo];
      this.infotop.carddes[1] = this.allcard.carddes[realinfo];
      this.infotop.cardpassive[1] = this.allcard.cardpassive[realinfo];

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
      this.infotop.cardcost[2] = this.allcard.cardcost[realinfo];
      this.infotop.carddes[2] = this.allcard.carddes[realinfo];
      this.infotop.cardpassive[2] = this.allcard.cardpassive[realinfo];

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
      this.infotop.cardcost[3] = this.allcard.cardcost[realinfo];
      this.infotop.carddes[3] = this.allcard.carddes[realinfo];
      this.infotop.cardpassive[3] = this.allcard.cardpassive[realinfo];

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
      this.infotop.cardcost[4] = this.allcard.cardcost[realinfo];
      this.infotop.carddes[4] = this.allcard.carddes[realinfo];
      this.infotop.cardpassive[4] = this.allcard.cardpassive[realinfo];

      this.topOnhand5 = Cardbase2;
    },

    //draw bot
    createNewComponent() {
      const sound = new Audio("/src/assets/sound/wargoddaimubai.mp3");
      sound.volume = 0.7;

      //u can draw on your turn only
      if (this.gamemech.whoseTurn) {
        return;
      }

      //minus draw cost
      if (this.infobot.money < 10) {
        return;
      }
      sound.play();
      this.infobot.money -= 10;
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
      this.infobot.cardcost[0] = this.allcard.cardcost[realinfo];
      this.infobot.carddes[0] = this.allcard.carddes[realinfo];
      this.infobot.cardpassive[0] = this.allcard.cardpassive[realinfo];
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
      this.infobot.cardcost[1] = this.allcard.cardcost[realinfo];
      this.infobot.carddes[1] = this.allcard.carddes[realinfo];
      this.infobot.cardpassive[1] = this.allcard.cardpassive[realinfo];
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
      this.infobot.cardcost[2] = this.allcard.cardcost[realinfo];
      this.infobot.carddes[2] = this.allcard.carddes[realinfo];
      this.infobot.cardpassive[2] = this.allcard.cardpassive[realinfo];

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
      this.infobot.cardcost[3] = this.allcard.cardcost[realinfo];
      this.infobot.carddes[3] = this.allcard.carddes[realinfo];
      this.infobot.cardpassive[3] = this.allcard.cardpassive[realinfo];

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
      this.infobot.cardcost[4] = this.allcard.cardcost[realinfo];
      this.infobot.carddes[4] = this.allcard.carddes[realinfo];
      this.infobot.cardpassive[4] = this.allcard.cardpassive[realinfo];

      this.currentComponent5 = Cardbase;
    },

    //bot play card
    useCardbot(pos) {
      console.log(pos);
      const posq = parseInt(pos);
      const sound = new Audio("/src/assets/sound/youdumb.mp3");
      sound.volume = 0.5;

      //u can play on your turn only
      if (this.gamemech.whoseTurn) {
        return;
      }

      if (this.infobot.money < this.infobot.cardcost[posq]) {
        return;
      }

      //check passive and activate if On deploy

      var activeP = false;
      var detailP = this.infobot.cardpassive[posq].split(" ");
      if (detailP[0] === "OD") {
        //On deploy
        //console.log("find");
        activeP = true;
      } else {
      }

      sound.play(); //play sound when valid

      this.infobot.money -= this.infobot.cardcost[posq];

      //can do at anyplace, since it
      if (activeP) {
        if (detailP[2] === "AA") {
          //effect on all ally
          this.onDeploybuffbot(detailP);
        } else if (detailP[2] === "AE") {
          this.onDeploydebuffbot(detailP);
        }
      }

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
              this.infobot.cardcost[9] = this.infobot.cardcost[posq];
              this.infobot.carddes[9] = this.infobot.carddes[posq];
              this.infobot.cardpassive[9] = this.infobot.cardpassive[posq];
              this.infobot.cardbaseatk[9] = this.infobot.cardatk[posq];
              this.infobot.abletoatk[9] = 0;
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
              this.onDeploybuffselfbot(detailP, 9);

              //have on deploy effect

              this.activeCard5 = Cardbase;
              return;
            }
            //relocate data
            this.infobot.cardatk[8] = this.infobot.cardatk[posq];
            this.infobot.cardname[8] = this.infobot.cardname[posq];
            this.infobot.cardhp[8] = this.infobot.cardhp[posq];
            this.infobot.cardpassive[8] = this.infobot.cardpassive[posq];
            this.infobot.picture[8] = this.infobot.picture[posq];
            this.infobot.cardcost[8] = this.infobot.cardcost[posq];
            this.infobot.carddes[8] = this.infobot.carddes[posq];
            this.infobot.cardpassive[8] = this.infobot.cardpassive[posq];
            this.infobot.cardbaseatk[8] = this.infobot.cardatk[posq];
            this.infobot.abletoatk[8] = 0;
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
            this.onDeploybuffselfbot(detailP, 8);

            this.activeCard4 = Cardbase;
            return;
          }
          //relocate data
          this.infobot.cardatk[7] = this.infobot.cardatk[posq];
          this.infobot.cardname[7] = this.infobot.cardname[posq];
          this.infobot.cardhp[7] = this.infobot.cardhp[posq];
          this.infobot.cardpassive[7] = this.infobot.cardpassive[posq];
          this.infobot.picture[7] = this.infobot.picture[posq];
          this.infobot.cardcost[7] = this.infobot.cardcost[posq];
          this.infobot.carddes[7] = this.infobot.carddes[posq];
          this.infobot.cardpassive[7] = this.infobot.cardpassive[posq];
          this.infobot.cardbaseatk[7] = this.infobot.cardatk[posq];
          this.infobot.abletoatk[7] = 0;

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
          this.onDeploybuffselfbot(detailP, 7);

          this.activeCard3 = Cardbase;
          return;
        }
        //relocate data
        this.infobot.cardatk[6] = this.infobot.cardatk[posq];
        this.infobot.cardname[6] = this.infobot.cardname[posq];
        this.infobot.cardhp[6] = this.infobot.cardhp[posq];
        this.infobot.cardpassive[6] = this.infobot.cardpassive[posq];
        this.infobot.picture[6] = this.infobot.picture[posq];
        this.infobot.cardcost[6] = this.infobot.cardcost[posq];
        this.infobot.carddes[6] = this.infobot.carddes[posq];
        this.infobot.cardpassive[6] = this.infobot.cardpassive[posq];
        this.infobot.cardbaseatk[6] = this.infobot.cardatk[posq];
        this.infobot.abletoatk[6] = 0;

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
        this.onDeploybuffselfbot(detailP, 6);

        this.activeCard2 = Cardbase;
        return;
      }
      //relocate data
      this.infobot.cardatk[5] = this.infobot.cardatk[posq];
      this.infobot.cardname[5] = this.infobot.cardname[posq];
      this.infobot.cardhp[5] = this.infobot.cardhp[posq];
      this.infobot.cardpassive[5] = this.infobot.cardpassive[posq];
      this.infobot.picture[5] = this.infobot.picture[posq];
      this.infobot.cardcost[5] = this.infobot.cardcost[posq];
      this.infobot.carddes[5] = this.infobot.carddes[posq];
      this.infobot.cardpassive[5] = this.infobot.cardpassive[posq];
      this.infobot.cardbaseatk[5] = this.infobot.cardatk[posq];

      this.infobot.abletoatk[5] = 0;
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
      this.onDeploybuffselfbot(detailP, 5);

      this.activeCard1 = Cardbase;
      return;
    },
    onDeploybuffselfbot(data, pos) {
      if (data[2] === "AA") {
        if (data[3] === "Atk") {
          if (!this.infobot.buff[pos]["Increaseatk"]) {
            //prevent from buff nonexistent card
            // in case this card already have a buff
            this.infobot.buff[pos].set("Increaseatk", parseInt(data[4]));

            this.infobot.increaseAttack(pos);
          } else {
            if (this.infobot.buff[pos]["Increaseatk"] < 2) {
              this.infobot.buff[pos].set("Increaseatk", parseInt(data[4]));
            }
          }
        } else if (data[3] === "Pa") {
          if (!this.infobot.buff[pos]["Positiveattitude"]) {
            //prevent from buff nonexistent card
            // in case this card already have a buff
            this.infobot.buff[pos].set("Positiveattitude", parseInt(data[4]));

            this.infobot.positiveAttitude(pos);
          } else {
            if (this.infobot.buff[pos]["Positiveattitude"] < 3) {
              this.infobot.buff[pos].set("Positiveattitude", parseInt(data[4]));
            }
          }
        }
      }
    },

    onDeploybuffbot(data) {
      var sound1 = new Audio("/src/assets/sound/buff/buff.mp3");
      sound1.play();
      //can do at anyplace, since it
      //effect on all ally (except the caster)

      for (let i = 5; i < 10; i++) {
        if (this.infobot.cardname[i] !== "") {
          if (data[3] === "Atk") {
            if (!this.infobot.buff[i]["Increaseatk"]) {
              //prevent from buff nonexistent card
              // in case this card already have a buff
              this.infobot.buff[i].set("Increaseatk", parseInt(data[4]));

              this.infobot.increaseAttack(i);
            } else {
              if (this.infobot.buff[i]["Increaseatk"] < 2) {
                this.infobot.buff[i].set("Increaseatk", parseInt(data[4]));
              }
            }
          } else if (data[3] === "Pa") {
            if (!this.infobot.buff[i]["Positiveattitude"]) {
              //prevent from buff nonexistent card
              // in case this card already have a buff
              this.infobot.buff[i].set("Positiveattitude", parseInt(data[4]));

              this.infobot.positiveAttitude(i);
            } else {
              if (this.infobot.buff[i]["Positiveattitude"] < 3) {
                this.infobot.buff[i].set("Positiveattitude", parseInt(data[4]));
              }
            }
          }
        }
      }
    },
    //bot call top affected
    onDeploydebuffbot(data) {
      //can do at anyplace, since it
      //effect on all ally (except the caster)
      if (data[3] === "Atk") {
        for (let i = 5; i < 10; i++) {
          if (this.infotop.cardname[i] !== "")
            if (!this.infotop.debuff[i]["Decreaseatk"]) {
              //prevent from buff nonexistent card
              // in case this card already have a buff
              this.infotop.debuff[i].set("Decreaseatk", parseInt(data[4]));
              this.infotop.decreaseAttack(i);
            } else {
              if (this.infotop.debuff[i]["Decreaseatk"] < 2) {
                this.infotop.debuff[i].set("Decreaseatk", parseInt(data[4]));
              }
            }
        }
      }
    },

    useCardtop(pos) {
      console.log(pos);
      const posq = parseInt(pos);
      const sound = new Audio("/src/assets/sound/youdumb.mp3");
      sound.volume = 0.5;

      //u can play on your turn only
      if (!this.gamemech.whoseTurn) {
        return;
      }
      //play card minus money
      if (this.infotop.money < this.infotop.cardcost[posq]) {
        return;
      }
      this.infotop.money -= this.infotop.cardcost[posq];

      var activeP = false;
      var detailP = this.infotop.cardpassive[posq].split(" ");
      if (detailP[0] === "OD") {
        //On deploy
        //console.log("find");
        activeP = true;
      } else {
      }

      if (activeP) {
        if (detailP[2] === "AA") {
          //effect on all ally

          this.onDeploybufftop(detailP);
        } else if (detailP[2] === "AE") {
          this.onDeploydebufftop(detailP);
        }
      }

      sound.play(); //play sound only when it valid

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
              this.infotop.cardcost[9] = this.infotop.cardcost[posq];
              this.infotop.carddes[9] = this.infotop.carddes[posq];
              this.infotop.cardpassive[9] = this.infotop.cardpassive[posq];
              this.infotop.cardbaseatk[9] = this.infotop.cardatk[posq];
              this.infotop.abletoatk[9] = 0;
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
              this.onDeploybuffselftop(detailP, 9);

              this.activetopCard5 = Cardbase2;
              return;
            }
            //relocate data
            this.infotop.cardatk[8] = this.infotop.cardatk[posq];
            this.infotop.cardname[8] = this.infotop.cardname[posq];
            this.infotop.cardhp[8] = this.infotop.cardhp[posq];
            this.infotop.cardpassive[8] = this.infotop.cardpassive[posq];
            this.infotop.picture[8] = this.infotop.picture[posq];
            this.infotop.cardcost[8] = this.infotop.cardcost[posq];
            this.infotop.carddes[8] = this.infotop.carddes[posq];
            this.infotop.cardpassive[8] = this.infotop.cardpassive[posq];
            this.infotop.cardbaseatk[8] = this.infotop.cardatk[posq];
            this.infotop.abletoatk[8] = 0;
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
            this.onDeploybuffselftop(detailP, 8);

            this.activetopCard4 = Cardbase2;
            return;
          }
          //relocate data
          this.infotop.cardatk[7] = this.infotop.cardatk[posq];
          this.infotop.cardname[7] = this.infotop.cardname[posq];
          this.infotop.cardhp[7] = this.infotop.cardhp[posq];
          this.infotop.cardpassive[7] = this.infotop.cardpassive[posq];
          this.infotop.picture[7] = this.infotop.picture[posq];
          this.infotop.cardcost[7] = this.infotop.cardcost[posq];
          this.infotop.carddes[7] = this.infotop.carddes[posq];
          this.infotop.cardpassive[7] = this.infotop.cardpassive[posq];
          this.infotop.cardbaseatk[7] = this.infotop.cardatk[posq];
          this.infotop.abletoatk[7] = 0;
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
          this.onDeploybuffselftop(detailP, 7);

          this.activetopCard3 = Cardbase2;
          return;
        }
        //relocate data
        this.infotop.cardatk[6] = this.infotop.cardatk[posq];
        this.infotop.cardname[6] = this.infotop.cardname[posq];
        this.infotop.cardhp[6] = this.infotop.cardhp[posq];
        this.infotop.cardpassive[6] = this.infotop.cardpassive[posq];
        this.infotop.picture[6] = this.infotop.picture[posq];
        this.infotop.cardcost[6] = this.infotop.cardcost[posq];
        this.infotop.carddes[6] = this.infotop.carddes[posq];
        this.infotop.cardpassive[6] = this.infotop.cardpassive[posq];
        this.infotop.cardbaseatk[6] = this.infotop.cardatk[posq];
        this.infotop.abletoatk[6] = 0;
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
        this.onDeploybuffselftop(detailP, 6);

        this.activetopCard2 = Cardbase2;
        return;
      }
      //relocate data
      this.infotop.cardatk[5] = this.infotop.cardatk[posq];
      this.infotop.cardname[5] = this.infotop.cardname[posq];
      this.infotop.cardhp[5] = this.infotop.cardhp[posq];
      this.infotop.cardpassive[5] = this.infotop.cardpassive[posq];
      this.infotop.picture[5] = this.infotop.picture[posq];
      this.infotop.cardcost[5] = this.infotop.cardcost[posq];
      this.infotop.carddes[5] = this.infotop.carddes[posq];
      this.infotop.cardpassive[5] = this.infotop.cardpassive[posq];
      this.infotop.cardbaseatk[5] = this.infotop.cardatk[posq];
      this.infotop.abletoatk[5] = 0;

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
      this.onDeploybuffselftop(detailP, 5);

      this.activetopCard1 = Cardbase2;
      return;
    },
    onDeploybuffselftop(data, pos) {
      if (data[2] === "AA") {
        if (data[3] === "Atk") {
          if (!this.infotop.buff[pos]["Increaseatk"]) {
            //prevent from buff nonexistent card
            // in case this card already have a buff
            this.infotop.buff[pos].set("Increaseatk", parseInt(data[4]));

            this.infotop.increaseAttack(pos);
          } else {
            if (this.infotop.buff[pos]["Increaseatk"] < 2) {
              this.infotop.buff[pos].set("Increaseatk", parseInt(data[4]));
            }
          }
        } else if (data[3] === "Pa") {
          if (!this.infotop.buff[pos]["Positiveattitude"]) {
            //prevent from buff nonexistent card
            // in case this card already have a buff
            this.infotop.buff[pos].set("Positiveattitude", parseInt(data[4]));

            this.infotop.positiveAttitude(pos);
          } else {
            if (this.infotop.buff[pos]["Positiveattitude"] < 3) {
              this.infotop.buff[pos].set("Positiveattitude", parseInt(data[4]));
            }
          }
        }
      }
    },
    onDeploybufftop(data) {
      var sound1 = new Audio("/src/assets/sound/buff/buff.mp3");
      sound1.play();
      //can do at anyplace, since it
      //effect on all ally (except the caster)

      for (let i = 5; i < 10; i++) {
        if (this.infotop.cardname[i] !== "") {
          if (data[3] === "Atk") {
            if (!this.infotop.buff[i]["Increaseatk"]) {
              //prevent from buff nonexistent card
              // in case this card already have a buff
              this.infotop.buff[i].set("Increaseatk", parseInt(data[4]));
              this.infotop.increaseAttack(i);
            } else {
              if (this.infotop.buff[i]["Increaseatk"] < 2) {
                this.infotop.buff[i].set("Increaseatk", parseInt(data[4]));
              }
            }
          } else if (data[3] === "Pa") {
            if (!this.infotop.buff[i]["Positiveattitude"]) {
              //prevent from buff nonexistent card
              // in case this card already have a buff
              this.infotop.buff[i].set("Positiveattitude", parseInt(data[4]));
              this.infotop.positiveAttitude(i);
            } else {
              if (this.infotop.buff[i]["Positiveattitude"] < 3) {
                this.infotop.buff[i].set("Positiveattitude", parseInt(data[4]));
              }
            }
          }
        }
      }
    },
    //Top deploy bot got debuff
    onDeploydebufftop(data) {
      //can do at anyplace, since it
      //effect on all ally (except the caster)
      if (data[3] === "Atk") {
        for (let i = 5; i < 10; i++) {
          if (this.infobot.cardname[i] !== "")
            if (!this.infobot.debuff[i]["Decreaseatk"]) {
              //prevent from buff nonexistent card
              // in case this card already have a buff
              this.infobot.debuff[i].set("Decreaseatk", parseInt(data[4]));
              this.infobot.decreaseAttack(i);
            } else {
              if (this.infobot.debuff[i]["Decreaseatk"] < 2) {
                this.infobot.debuff[i].set("Decreaseatk", parseInt(data[4]));
              }
            }
        }
      }
    },

    //onClicktoAttack
    botOnclickcard(pos) {
      console.log(this.botplayerclickStatus);
      if (!this.gamemech.whoseTurn) {
        if (this.infobot.abletoatk[pos] === 0) {
          return;
        }
        if (this.botplayerclickStatus === 0) {
          this.botplayerclickStatus = 1;
          //set style
          this.infobot.active[pos] = true;

          this.activebotCardpos = pos;

          //check if bot can attack top player directly? by checking active card for top
          if (
            this.activetopCard1 === null &&
            this.activetopCard2 === null &&
            this.activetopCard3 === null &&
            this.activetopCard4 === null &&
            this.activetopCard5 === null
          ) {
            this.canatktopplayer = true;
          }
        } else if (this.botplayerclickStatus === 1) {
          this.infobot.active[this.activebotCardpos] = false;
          this.activebotCardpos = pos;
          this.infobot.active[pos] = true;
        }
      }
    },
    //after bot select active card, they attack
    botOnselecttarget(pos) {
      //if bot selected active card and ready to attack
      if (this.botplayerclickStatus === 1) {
        //console.log("I : ", this.activebotCardpos, "Will attack: ", pos);
        const sound1 = new Audio("/src/assets/sound/nopunch.mp3");

        sound1.play();
        this.infobot.abletoatk[this.activebotCardpos] -= 1; //reduce Increaseatk time 1
        //calculate and update dmg
        this.infotop.cardhp[pos] -= this.infobot.cardatk[this.activebotCardpos];
        //console.log("attacked!");

        //destroy that card which has hp below 0
        if (this.infotop.cardhp[pos] <= 0) {
          var sound = new Audio("/src/assets/sound/ihee.mp3");
          sound.volume = 0.4;
          sound.play();
          switch (pos) {
            case 5:
              this.activetopCard1 = null;
              break;
            case 6:
              this.activetopCard2 = null;
              break;
            case 7:
              this.activetopCard3 = null;
              break;
            case 8:
              this.activetopCard4 = null;
              break;
            case 9:
              this.activetopCard5 = null;
              break;
            default:
              break;
          }
        }

        //remove style
        this.infobot.active[this.activebotCardpos] = false;
        this.botplayerclickStatus = 0;
        this.activebotCardpos = 0;
      } else {
        return;
      }
    },

    //onClicktoAttack
    topOnclickcard(pos) {
      //console.log("can>", this.canatkbotplayer);
      if (this.gamemech.whoseTurn) {
        if (this.infotop.abletoatk[pos] === 0) {
          return;
        }
        if (this.topplayerclickStatus === 0) {
          this.topplayerclickStatus = 1;
          this.activetopCardpos = pos;

          //check if top can attack bot player directly? by checking active card for top
          if (
            this.activeCard1 === null &&
            this.activeCard2 === null &&
            this.activeCard3 === null &&
            this.activeCard4 === null &&
            this.activeCard5 === null
          ) {
            this.canatkbotplayer = true;
          }

          this.infotop.active[pos] = true;
        } else if (this.topplayerclickStatus === 1) {
          this.infotop.active[this.activetopCardpos] = false;
          this.activetopCardpos = pos;
          this.infotop.active[pos] = true;
        }
      }
    },
    topOnselecttarget(pos) {
      if (this.topplayerclickStatus === 1) {
        //console.log("I : ", this.activebotCardpos, "Will attack: ", pos);

        var sound1 = new Audio("/src/assets/sound/nopunch.mp3");

        sound1.play();
        //calculate and update dmg
        this.infotop.abletoatk[this.activetopCardpos] -= 1; //reduce Increaseatk time 1
        this.infobot.cardhp[pos] -= this.infotop.cardatk[this.activetopCardpos];
        //console.log("attacked!");

        //destroy that card which has hp below 0
        if (this.infobot.cardhp[pos] <= 0) {
          var sound = new Audio("/src/assets/sound/ihee.mp3");
          sound.volume = 0.4;
          sound.play();
          switch (pos) {
            case 5:
              this.activeCard1 = null;
              break;
            case 6:
              this.activeCard2 = null;
              break;
            case 7:
              this.activeCard3 = null;
              break;
            case 8:
              this.activeCard4 = null;
              break;
            case 9:
              this.activeCard5 = null;
              break;
            default:
              break;
          }
        }

        this.infotop.active[this.activetopCardpos] = false;
        this.topplayerclickStatus = 0;
        this.activetopCardpos = 0;
      } else {
        return;
      }
    },
    //attack top player directly
    attackTopplayer() {
      if (this.botplayerclickStatus === 1) {
        //console.log("I : ", this.activebotCardpos, "Will attack: ", pos);

        var sound1 = new Audio("/src/assets/sound/nopunch.mp3");

        sound1.play();
        const sound2 = new Audio("/src/assets/sound/crazylaugh.mp3");

        sound2.play();
        //calculate and update dmg
        this.infobot.abletoatk[this.activebotCardpos] -= 1; //reduce Increaseatk time 1
        this.infotop.playerhp -= this.infobot.cardatk[this.activebotCardpos];
        if (this.infotop.playerhp <= 0) {
          this.gamestate = 2;
          this.winner = "Bot";
          return;
        }
        this.topplayerhpper = (this.infotop.playerhp * 100) / 200; //calculate as percent
        console.log("hp: ", this.topplayerhpper);
        //console.log("now ", this.hpPer);

        this.infobot.active[this.activebotCardpos] = false;
        this.botplayerclickStatus = 0;
        this.activebotCardpos = 0;
      }
    },
    attackBotplayer() {
      if (this.topplayerclickStatus === 1) {
        //console.log("I : ", this.activebotCardpos, "Will attack: ", pos);

        var sound1 = new Audio("/src/assets/sound/nopunch.mp3");

        sound1.play();
        const sound2 = new Audio("/src/assets/sound/crazylaugh.mp3");

        sound2.play();
        //calculate and update dmg
        this.infotop.abletoatk[this.activetopCardpos] -= 1; //reduce Increaseatk time 1
        this.infobot.playerhp -= this.infotop.cardatk[this.activetopCardpos];
        if (this.infobot.playerhp <= 0) {
          this.gamestate = 2;
          //console.log(this.gamestate);
          this.winner = "Top";
          return;
        }
        this.botplayerhpper = (this.infobot.playerhp * 100) / 200; //calculate as percent
        //console.log("hp: ", this.infobot.playerhp);
        //console.log("now ", this.hpPer);

        this.infotop.active[this.activetopCardpos] = false;
        this.topplayerclickStatus = 0;
        this.activetopCardpos = 0;
      }
    },
    topEndturn() {
      this.topplayerclickStatus = 0;
      this.infotop.abletoatk.fill(1); //reset Increaseatk status
      this.canatkbotplayer = false; //reset Increaseatk bot player
      this.infobot.increaseMoney();
      this.infotop.active.fill(false);

      //decrease buff duration
      for (let i = 5; i < 10; i++) {
        for (let [key, value] of this.infotop.buff[i]) {
          this.infotop.buff[i].set(key, value - 1);

          if (value === 1) {
            if (key === "Increaseatk") {
              //reverse effect
              this.infotop.dispelIncreaseAtk(i);

              this.infotop.buff[i].delete(key);
            } else if (key === "Positiveattitude") {
              this.infotop.dispelPositiveAt(i);

              this.infotop.buff[i].delete(key);
            }
          }
        }
      }

      //decrease debuff duration
      for (let i = 5; i < 10; i++) {
        for (let [key, value] of this.infotop.debuff[i]) {
          this.infotop.debuff[i].set(key, value - 1);

          if (value === 1) {
            if (key === "Decreaseatk") {
              //reverse effect
              this.infotop.dispelDecreaseAtk(i);

              this.infotop.debuff[i].delete(key);
            }
          }
        }
      }

      this.gamemech.increaseTurn();
    },
    botEndturn() {
      console.log(this.infotop.$state);
      this.botplayerclickStatus = 0;
      this.infobot.abletoatk.fill(1);
      this.canatktopplayer = false; //reset Increaseatk top player
      this.infotop.increaseMoney(); //add money
      this.infobot.active.fill(false);

      //decrease buff duration
      for (let i = 5; i < 10; i++) {
        for (let [key, value] of this.infobot.buff[i]) {
          this.infobot.buff[i].set(key, value - 1);

          if (value === 1) {
            if (key === "Increaseatk") {
              this.infobot.dispelIncreaseAtk(i);

              this.infobot.buff[i].delete(key);
            }

            if (key === "Positiveattitude") {
              this.infobot.dispelPositiveAt(i);

              this.infobot.buff[i].delete(key);
            }
          }
        }
      }

      //decrease debuff duration
      for (let i = 5; i < 10; i++) {
        for (let [key, value] of this.infobot.debuff[i]) {
          this.infobot.debuff[i].set(key, value - 1);

          if (value === 1) {
            if (key === "Decreaseatk") {
              //reverse effect
              this.infobot.dispelDecreaseAtk(i);

              this.infobot.debuff[i].delete(key);
            }
          }
        }
      }

      this.gamemech.increaseTurn();
    },
    //for bot
    onmouseEnterdes(pos) {
      this.onhovercard = true;
      // console.log(this.statedes.cardname);
      this.statedes.cardname = this.infobot.cardname[pos];
      this.statedes.cardatk = this.infobot.cardatk[pos];
      this.statedes.cardcost = this.infobot.cardcost[pos];
      this.statedes.cardhp = this.infobot.cardhp[pos];
      this.statedes.cardremainatk = this.infobot.abletoatk[pos];
      this.statedes.description = this.infobot.carddes[pos];
      this.statedes.buff = this.infobot.buff[pos];
      this.statedes.debuff = this.infobot.debuff[pos];
    },
    //for top
    onmouseEnterTdes(pos) {
      this.onhovercard = true;
      // console.log(this.statedes.cardname);
      this.statedes.cardname = this.infotop.cardname[pos];
      this.statedes.cardatk = this.infotop.cardatk[pos];
      this.statedes.cardcost = this.infotop.cardcost[pos];
      this.statedes.cardhp = this.infotop.cardhp[pos];
      this.statedes.cardremainatk = this.infotop.abletoatk[pos];
      this.statedes.description = this.infotop.carddes[pos];
      this.statedes.buff = this.infotop.buff[pos];
      this.statedes.debuff = this.infotop.debuff[pos];
    },
    onmouseLeavedes(pos) {
      this.onhovercard = false;
    },
  },
});
</script>

<template>
  <main>
    <!-- Menu Component -->
    <div
      v-bind:class="{
        visible: this.gamestate === 0,
        invisible: this.gamestate !== 0,
      }"
    >
      <Menu v-bind:gamestate="gamestate" v-on:update="gamestate = -1" />
    </div>
    <!-- Choosing Avatar Menu for top -->
    <div
      class="absolute top-0 inset-x-0"
      v-bind:class="{
        visible: this.gamestate === -1,
        invisible: this.gamestate !== -1,
      }"
    >
      <ChooseA v-bind:gamestate="gamestate" v-on:update="gamestate = -2" />
    </div>

    <!-- Choosing Avatar Menu for bot -->
    <div
      class="absolute top-0 inset-x-0"
      v-bind:class="{
        visible: this.gamestate === -2,
        invisible: this.gamestate !== -2,
      }"
    >
      <ChooseA2 v-bind:gamestate="gamestate" v-on:update="gamestate = 1" />
    </div>

    <!-- Game component -->
    <div
      v-bind:class="{
        visible: this.gamestate === 1,
        invisible: this.gamestate !== 1,
      }"
    >
      <!-- topplayer hp bar -->
      <div class="absolute items-center mt-5 w-[15%] top-[3%] left-0">
        <!-- top plater avatar   -->
        <div class="z-10 flex justify-center">
          <img
            class="object-cover h-[7rem] w-[7rem] rounded-full"
            :src="infotop.playerava"
            alt="cuteto"
          />
        </div>
        <!-- this is a top player attack place-->
        <div
          v-bind:class="{
            visible: this.canatktopplayer && this.gamestate === 1,
            invisible: !this.canatktopplayer,
          }"
          v-on:click="attackTopplayer"
          class="ml-3 w-8 h-8 bg-white mr-5"
        ></div>
        <!-- hp bar -->
        <div class="ml-3 w-full bg-white rounded-full h-2.5">
          <div
            class="bg-red-600 h-2.5 rounded-full"
            v-bind:style="{ width: hpPer }"
          ></div>
          <!--Very nice way of binding variable with style-->
        </div>
      </div>

      <!-- botplayer hp bar -->
      <div class="absolute items-center w-[15%] mt-5 top-[72%] left-0">
        <div class="z-10 flex justify-center">
          <img
            class="object-cover h-[7rem] w-[7rem] rounded-full"
            :src="infobot.playerava"
            alt="cuteto"
          />
        </div>
        <div
          v-bind:class="{
            visible: this.canatkbotplayer && this.gamestate === 1,
            invisible: !this.canatkbotplayer,
          }"
          v-on:click="attackBotplayer"
          class="ml-3 w-8 h-8 bg-white mr-5"
        ></div>
        <!-- this is a bot player attack place-->
        <div class="ml-3 w-full bg-white rounded-full h-2.5">
          <div
            class="bg-red-600 h-2.5 rounded-full"
            v-bind:style="{ width: hpPer2 }"
          ></div>
          <!--Very nice way of binding variable with style-->
        </div>
      </div>

      <!-- Card on hand for top player -->
      <div class="flex justify-center absolute top-0 scale-[0.6] inset-x-0">
        <div class="flex justify-center">
          <component
            pos="0"
            v-on:click="useCardtop(0)"
            v-on:mouseenter="onmouseEnterTdes(0)"
            v-on:mouseleave="onmouseLeavedes(0)"
            :is="topOnhand1"
          />
          <component
            pos="1"
            v-on:click="useCardtop(1)"
            v-on:mouseenter="onmouseEnterTdes(1)"
            v-on:mouseleave="onmouseLeavedes(0)"
            :is="topOnhand2"
          />
          <component
            pos="2"
            v-on:click="useCardtop(2)"
            v-on:mouseenter="onmouseEnterTdes(2)"
            v-on:mouseleave="onmouseLeavedes(0)"
            :is="topOnhand3"
          />
          <component
            pos="3"
            v-on:click="useCardtop(3)"
            v-on:mouseenter="onmouseEnterTdes(3)"
            v-on:mouseleave="onmouseLeavedes(0)"
            :is="topOnhand4"
          />
          <component
            pos="4"
            v-on:click="useCardtop(4)"
            v-on:mouseenter="onmouseEnterTdes(4)"
            v-on:mouseleave="onmouseLeavedes(0)"
            :is="topOnhand5"
          />
        </div>
      </div>

      <!-- Active card for top player -->
      <div class="flex justify-center absolute scale-[0.7] top-[25%] inset-x-0">
        <div class="flex justify-center">
          <component
            pos="5"
            v-on:click="
              botOnselecttarget(5);
              topOnclickcard(5);
            "
            v-on:mouseenter="onmouseEnterTdes(5)"
            v-on:mouseleave="onmouseLeavedes(0)"
            :is="activetopCard1"
          />
          <component
            pos="6"
            v-on:click="
              botOnselecttarget(6);
              topOnclickcard(6);
            "
            v-on:mouseenter="onmouseEnterTdes(6)"
            v-on:mouseleave="onmouseLeavedes(0)"
            :is="activetopCard2"
          />
          <component
            pos="7"
            v-on:click="
              botOnselecttarget(7);
              topOnclickcard(7);
            "
            v-on:mouseenter="onmouseEnterTdes(7)"
            v-on:mouseleave="onmouseLeavedes(0)"
            :is="activetopCard3"
          />
          <component
            pos="8"
            v-on:click="
              botOnselecttarget(8);
              topOnclickcard(8);
            "
            v-on:mouseenter="onmouseEnterTdes(8)"
            v-on:mouseleave="onmouseLeavedes(0)"
            :is="activetopCard4"
          />
          <component
            pos="9"
            v-on:click="
              botOnselecttarget(9);
              topOnclickcard(9);
            "
            v-on:mouseenter="onmouseEnterTdes(9)"
            v-on:mouseleave="onmouseLeavedes(0)"
            :is="activetopCard5"
          />
        </div>
      </div>

      <!-- card on hand for bot player -->

      <div
        class="flex justify-center absolute bottom-[-1rem] scale-[0.6] inset-x-0"
      >
        <div class="flex justify-center">
          <component
            v-on:click="useCardbot(0)"
            v-on:mouseenter="onmouseEnterdes(0)"
            v-on:mouseleave="onmouseLeavedes(0)"
            pos="0"
            :is="currentComponent"
          />
          <component
            v-on:click="useCardbot(1)"
            v-on:mouseenter="onmouseEnterdes(1)"
            v-on:mouseleave="onmouseLeavedes(1)"
            pos="1"
            :is="currentComponent2"
          />
          <component
            v-on:click="useCardbot(2)"
            v-on:mouseenter="onmouseEnterdes(2)"
            v-on:mouseleave="onmouseLeavedes(2)"
            pos="2"
            :is="currentComponent3"
          />
          <component
            v-on:click="useCardbot(3)"
            v-on:mouseenter="onmouseEnterdes(3)"
            v-on:mouseleave="onmouseLeavedes(3)"
            pos="3"
            :is="currentComponent4"
          />
          <component
            v-on:click="useCardbot(4)"
            v-on:mouseenter="onmouseEnterdes(4)"
            v-on:mouseleave="onmouseLeavedes(4)"
            pos="4"
            :is="currentComponent5"
          />
        </div>
      </div>
      <!-- Active card for bot player -->
      <div class="flex justify-center absolute scale-[0.7] top-[50%] inset-x-0">
        <div class="flex justify-center">
          <component
            v-on:click="
              botOnclickcard(5);
              topOnselecttarget(5);
            "
            v-on:mouseenter="onmouseEnterdes(5)"
            v-on:mouseleave="onmouseLeavedes(5)"
            pos="5"
            :is="activeCard1"
          />
          <component
            v-on:click="
              botOnclickcard(6);
              topOnselecttarget(6);
            "
            v-on:mouseenter="onmouseEnterdes(6)"
            v-on:mouseleave="onmouseLeavedes(6)"
            pos="6"
            :is="activeCard2"
          />
          <component
            v-on:click="
              botOnclickcard(7);
              topOnselecttarget(7);
            "
            v-on:mouseenter="onmouseEnterdes(7)"
            v-on:mouseleave="onmouseLeavedes(7)"
            pos="7"
            :is="activeCard3"
          />
          <component
            v-on:click="
              botOnclickcard(8);
              topOnselecttarget(8);
            "
            v-on:mouseenter="onmouseEnterdes(8)"
            v-on:mouseleave="onmouseLeavedes(8)"
            pos="8"
            :is="activeCard4"
          />
          <component
            v-on:click="
              botOnclickcard(9);
              topOnselecttarget(9);
            "
            v-on:mouseenter="onmouseEnterdes(9)"
            v-on:mouseleave="onmouseLeavedes(9)"
            pos="9"
            :is="activeCard5"
          />
        </div>
      </div>

      <!-- card description on hover (very big component due to my lazyness) -->
      <div
        v-bind:class="{
          visible: this.onhovercard,
          invisible: !this.onhovercard,
        }"
        class="bg-indigo-900 absolute w-[25%] ml-4 text-xs p-2 top-[40%] border-solid border-white border-2"
      >
        <div class="bg-transparent">
          <div class="bg-inherit">Name: {{ statedes.cardname }}</div>
          <div class="bg-inherit">Cost: {{ statedes.cardcost }}</div>
          <div class="bg-inherit">Hp: {{ statedes.cardhp }}</div>
          <div class="bg-inherit">Atk: {{ statedes.cardatk }}</div>
          <div class="bg-inherit">Remain Atk: {{ statedes.cardremainatk }}</div>
          <div class="bg-inherit">Description: {{ statedes.description }}</div>

          <hr class="h-px my-2 bg-white border-0" />
          <div class="bg-inherit grid grid-cols-2">
            <div class="bg-inherit border-r border-white">
              <div class="bg-inherit flex justify-center">Buff</div>
              <div class="bg-inherit" v-for="[key, value] in statedes.buff">
                {{ key }} : {{ value }}
              </div>
            </div>

            <div class="bg-inherit border-l pl-2 border-white">
              <div class="bg-inherit flex justify-center">Debuff</div>
              <div class="bg-inherit" v-for="[key, value] in statedes.debuff">
                {{ key }} : {{ value }}
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- money label for top -->
      <div class="absolute left-0 top-[30%]">
        <div class="text-2xl">MONEY FOR TOP LA: {{ infotop.money }}</div>
      </div>

      <!-- Money label for bot -->
      <div class="absolute left-0 top-[67%]">
        <div class="text-2xl">MONEY FOR TOP LA: {{ infobot.money }}</div>
      </div>

      <!-- Deck for top player -->
      <div class="absolute top-0 right-5">
        <div
          class="absolute mt-2 ml-7 rounded-full w-10 h-10 bg-yellow-400 text-black justify-center flex items-center"
        >
          50
        </div>
        <div v-on:click="drawTop" class="w-28 h-40 m-5">
          <Deck />
        </div>
      </div>
      <!-- Deck for bot player -->
      <div class="absolute bottom-0 right-5">
        <div
          class="absolute mt-2 ml-7 rounded-full w-10 h-10 bg-yellow-400 text-black justify-center flex items-center"
        >
          50
        </div>
        <div v-on:click="createNewComponent" class="w-28 h-40 m-5">
          <Deck />
        </div>
      </div>

      <!-- turn manage -->
      <div
        v-bind:class="{
          visible: this.gamemech.whoseTurn && this.gamestate === 1,
          invisible: !this.gamemech.whoseTurn,
        }"
        class="absolute top-[25%] right-0 mr-5"
      >
        <button @click="topEndturn" class="px-4 py-2 bg-blue-500">
          END TURN
        </button>
      </div>

      <div
        v-bind:class="{
          visible: !this.gamemech.whoseTurn && this.gamestate === 1,
          invisible: this.gamemech.whoseTurn,
        }"
        class="absolute bottom-[25%] right-0 mr-5"
      >
        <button @click="botEndturn" class="px-4 py-2 bg-green-500">
          END TURN
        </button>
      </div>

      <!-- turn number and whose turn -->
      <div
        v-bind:class="{
          'absolute mr-5 top top-[55%] right-0 border-x-[40px] rotate-180 border-x-transparent border-b-[40px] border-b-blue-600':
            !gamemech.whoseTurn,
          'absolute mr-5 top top-[55%] right-0 border-x-[40px]  border-x-transparent border-b-[40px] border-b-blue-600':
            gamemech.whoseTurn,
        }"
      ></div>
      <div class="absolute mr-3 top-[40%] right-0">
        <div>Turn Count: {{ gamemech.turnCount }}</div>
        <div>Whose Turn: {{ gamemech.whoseTurn }}</div>
      </div>
    </div>
    <!-- Gameover Component -->
    <div
      class="absolute top-0 inset-x-0"
      v-bind:class="{
        visible: this.gamestate === 2,
        invisible: this.gamestate !== 2,
      }"
    >
      <Gameover
        :winner="winner"
        v-bind:gamestate="gamestate"
        v-on:update="gamestate = 0"
      />
    </div>
  </main>
</template>
