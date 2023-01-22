import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const gameMech = defineStore({
  id:'gamemech',
  //init state
  state: ()=>({
    //true mean bot turn false mean top turn
    //normally top start first
    whoseTurn: true,
    turnCount: 0
    



  }),
  //easy function
  actions:{
    increaseTurn() {
        //console.log('dddd')
        this.turnCount++
      if(this.whoseTurn){
        this.whoseTurn = false
      }else{
        this.whoseTurn = true
    }
  
    },
   
   
  },
  //getters can return, while actions can't
  getters:{
    oddorEven:(state)=>{
      if(state.count%2 === 0) return 'even'
      else return 'odd'

    }
  }
})