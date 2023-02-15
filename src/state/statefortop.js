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
    cardbaseatk:['','','','','','','','','','',],
    
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
    increaseMoney(){
      let basemoney = 10
      for (let i = 5; i < 10; i++) {
        for (let [key, value] of this.buff[i]) {
          if(key === "Positiveattitude"){
       
            basemoney+= (basemoney*0.3)
            this.money+=basemoney
            return;
          }
        }
      }


    },
    increaseCount() {
      this.count++
    },
    testman() {
      this.count = this.count*3
      
    },
    increaseAttack(pos){
      let a = parseInt(this.cardbaseatk[pos])
      a= Math.floor(a*0.5)
      this.cardatk[pos]+= a
    },
    positiveAttitude(pos){
      let a = parseInt(this.cardbaseatk[pos])
      a= Math.floor(a*0.2)
      this.cardatk[pos]+= a
    },
    //Bot will call this function and it will have effect on Top
    decreaseAttack(pos){
      let a = parseInt(this.cardbaseatk[pos])
      a= Math.floor(a*0.4) //decrease by 40%
      this.cardatk[pos] -= a

    },


    //dispel effect
    dispelIncreaseAtk(pos){
          this.cardatk[pos] -= Math.ceil(
            (parseInt(this.cardbaseatk[pos]) * 0.5 )
          );
    },
    dispelPositiveAt(pos){
          this.cardatk[pos] -= Math.ceil(
            (parseInt(this.cardbaseatk[pos]) * 0.2)
          );
    },
    dispelDecreaseAtk(pos){
      this.cardatk[pos] += Math.ceil(
        (parseInt(this.cardbaseatk[pos]) * 0.4)
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