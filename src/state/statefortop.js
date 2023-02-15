import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const topPlayer = defineStore({
  id:'topPlayer',
  //init state
  state: ()=>({
    playerava: "",
    playerhp:200,
    cardname:['','','','','','','','','',''],
    //first 0-4 index is for card on hand, 5-9 will be active card
    //save base attack
    
    cardatk: ['10','20','30','40','50'],
    cardhp:['100','200','300','400','500'],
    carddes: ['','','','','','','','','',''],
    cardpassive:[false,false,true,false,true],
    cardrare:['N','N','R','R','SR'],
    picture: ["", "", "", "", ""],
    cardcost: [0,0,0,0,0],
    abletoatk: [0,0,0,0,0], //atk count per turn
    active: [false,false,false,false,false,false,false,false,false,false,false,false],
      money: 255,
        //should be map, each buff map with duration
    buff:[new Map(),new Map(),new Map(),new Map(),new Map(),new Map(),new Map(),new Map(),new Map(),new Map(),],
    
    debuff:[new Map(),new Map(),new Map(),new Map(),new Map(),new Map(),new Map(),new Map(),new Map(),new Map(),]
    

    




  }),
  //easy function
  actions:{
    increaseCount() {
      this.count++
    },
    testman() {
      this.count = this.count*3
      
    },
    increaseAttack(pos){
      let a = parseInt(this.cardatk[pos])
      a= Math.floor(a*1.5)
      this.cardatk[pos] = a.toString()
    },
    positiveAttitude(pos){
      let a = parseInt(this.cardatk[pos])
      a= Math.floor(a*1.2)
      this.cardatk[pos] = a.toString()
    },
    //Bot will call this function and it will have effect on Top
    decreaseAttack(pos){
      let a = parseInt(this.cardatk[pos])
      a= Math.floor(a*0.7) //decrease by 30%
      this.cardatk[pos] = a.toString()

    },


    //dispel effect
    dispelIncreaseAtk(pos){
          this.cardatk[pos] = Math.ceil(
            (parseInt(this.cardatk[pos]) * 2) / 3
          );
    },
    dispelPositiveAt(pos){
          this.cardatk[pos] = Math.ceil(
            (parseInt(this.cardatk[pos]) * 5) / 6
          );
    },
    dispelDecreaseAtk(pos){
      this.cardatk[pos] = Math.ceil(
        (parseInt(this.cardatk[pos]) * 10) / 7
      );
    }

  },
  //getters can return, while actions can't
  getters:{
    oddorEven:(state)=>{
      if(state.count%2 === 0) return 'even'
      else return 'odd'

    }
  }
})