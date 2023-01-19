import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useAllcard = defineStore({
    id: 'allcard',
    //init state
    state: () => ({
        cardname: ['PARTY', 'DEUS', 'GUITAR', 'WAR GOD', 'EXODIA'],
        cardatk: ['13', '22', '3', '40', '10'],
        cardhp: ['200', '210', '30', '40', '53'],
        cardpassive: [false, false, true, false, true],
        cardrare: ['N', 'N', 'R', 'R', 'SR'],
        picture: ["/src/assets/picture/partyman1.jpg", "/src/assets/picture/hothead.jpg",
         "/src/assets/picture/catandguitar.jpg", "/src/assets/picture/hothead.jpg", "/src/assets/picture/hothead.jpg"]




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