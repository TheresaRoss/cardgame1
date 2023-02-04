import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useAllcha = defineStore({
    id: 'allcharec',
    //init state
    state: () => ({
        cardname: ['1', '2', '3', '4', '5'],
       active:[false,false,false,false,false],
       voice:["/src/assets/sound/tenebia.mp3","/src/assets/sound/tomoca.mp3","/src/assets/sound/siseria.mp3","/src/assets/sound/bwitchiseria.mp3","/src/assets/sound/tamarin.mp3"],
       
        picture: ["/src/assets/picture/maincha/coolone.jpg", "/src/assets/picture/maincha/nahida.jpg",
         "/src/assets/picture/maincha/onbeach.jpg", "/src/assets/picture/maincha/smellflo.jpg", "/src/assets/picture/maincha/vtube.jpg"],
         description:['Kiss my feet'
         ,'Cute one'
         ,'Chill one'
         ,'Wither flowers'
         ,'Listen to me']




    }),
    //easy function
    actions: {
        increaseCount() {
            this.count++
        },
        testman() {
            this.count = this.count * 3

        }
    },
    //getters can return, while actions can't
    getters: {
        oddorEven: (state) => {
            if (state.count % 2 === 0) return 'even'
            else return 'odd'

        }
    }
})