import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useAllcard = defineStore({
    id: 'allcard',
    //init state
    state: () => ({
        cardname: ['PARTY', 'DEUS', 'GUITAR', 'WAR GOD', 'EXODIA'],
        cardatk: [13, 22, 3, 40, 10],
        cardhp: ['200', '210', '30', '40', '53'],
        //split string: 
        //1 will be time when it will activate
        //2 will be effect (P = positive,N = negative)
        //3 will be effect on (AA = all ally)
        //4 will be buff name (Atk = attack up)
        //5 will be duration
        cardpassive: ['OD P AA Atk 2','','','',''],
        cardrare: ['N', 'N', 'R', 'R', 'SR'],
        carddes: ['On deploy grant all ally in field except the caster atk buff for 2 turns','','','','','','','','',''],
        cardcost: [10,5,8,15,20],
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