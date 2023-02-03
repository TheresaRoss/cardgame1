import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useAllcha = defineStore({
    id: 'allcharec',
    //init state
    state: () => ({
        cardname: ['1', '2', '3', '4', '5'],
       active:[false,false,false,false,false],
        picture: ["/src/assets/picture/maincha/coolone.jpg", "/src/assets/picture/maincha/nahida.jpg",
         "/src/assets/picture/maincha/onbeach.jpg", "/src/assets/picture/maincha/smellflo.jpg", "/src/assets/picture/maincha/vtube.jpg"]




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