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