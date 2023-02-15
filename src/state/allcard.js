import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useAllcard = defineStore({
    id: 'allcard',
    //init state
    state: () => ({
        cardname: ['PARTY', 'DEUS', 'GUITAR', 'WAR GOD', 'EXODIA'],
        cardatk: [13, 22, 3, 40, 10 ],
        cardhp: ['200', '210', '30', '40', '53'],
        //split string: 
        //1 will be time when it will activate
        //2 will be effect (P = positive,N = negative)
        //3 will be effect on (AA = all ally AE = all enemy)
        //4 will be buff name (Atk = attack up, Pa = positive attitude)
        //5 will be duration
        cardpassive: ['OD P AA Atk 2',
        'OD N AE Atk 2',
        'OD P AA Pa 3','',''],
        cardrare: ['N', 'N', 'R', 'R', 'SR'],
        carddes: ['On deploy, grant all ally in field except the caster Attack buff for 2 turns',
        'On deploy, Decrease atk on all enemy card that is on field',
        'On deploy, bring a Positive attitude to their allies','','','','','','',''],
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

//Buff List 
//increase atk ( +atk 50% )
//positive attitude (+atk 20% +income 30%)
//Debuff List
//decrease atk (-atk 30%)