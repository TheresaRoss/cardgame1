import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const stateDes = defineStore({
  id:'statedes',
  //init state
  state: ()=>({
    cardname:'1',
    cardatk:'10',
    cardcost:'0',
    cardhp: '0',
    cardremainatk: '0',
    description: '',
    buff:[new Map(),new Map(),new Map(),new Map(),new Map(),new Map(),new Map(),new Map(),new Map(),new Map(),],
    debuff:[new Map(),new Map(),new Map(),new Map(),new Map(),new Map(),new Map(),new Map(),new Map(),new Map(),]
    




  }),
  //easy function
  actions:{

  },
  //getters can return, while actions can't
  
})