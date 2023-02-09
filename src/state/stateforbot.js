import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useCounterStore = defineStore({
  id:'infobot',
  //init state
  state: ()=>({
    playerava: "",
    playerhp: 2,
    //first 0-4 index is for card on hand, 5-9 will be active card
    cardname:['','','','','','','','','',''],
    cardatk: ['10','20','30','40','50'],
    cardhp:['100','200','300','400','500'],
    cardpassive: ['','','','',''], 
    cardrare:['N','N','R','R','SR'],
    picture: ["", "", "", "", ""],
    carddes: ['','','','','','','','','',''],
    cardcost: [0,0,0,0,0],
    abletoatk: [0,0,0,0,0],
    active: [false,false,false,false,false,false,false,false,false,false,false,false],
    money:200,
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