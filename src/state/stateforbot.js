import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useCounterStore = defineStore({
  id:'infobot',
  //init state
  state: ()=>({
    playerhp: 200,
    //first 0-4 index is for card on hand, 5-9 will be active card
    cardname:['1','2','3','4','5'],
    cardatk: ['10','20','30','40','50'],
    cardhp:['100','200','300','400','500'],
    cardpassive:[false,false,true,false,true],
    cardrare:['N','N','R','R','SR'],
    picture: ["", "", "", "", ""],
    cardcost: [0,0,0,0,0],
    abletoatk: [0,0,0,0,0],
    active: [false,false,false,false,false,false,false,false,false,false,false,false],
    money:200,
    




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