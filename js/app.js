function initVue() {

    new Vue({
    
        el: '#app',
        data:{
            levels: ['easy', 'medium', 'hard'],
            selLvl: '',
            gameOn: false,
            gameFinish: false,
            squaresArr: [],
            squaresWidth: '',
        },
        methods: {

            startGame: function() {

                this.gameOn = true;
                this.gameFinish = false;
                this.squaresArr = [];
                let max = 0;

                switch (this.selLvl){

                    case 'easy':
                        max = 100;
                        this.squaresWidth = 'width100';
                        break
                    case 'medium':
                        max = 49;
                        this.squaresWidth = 'width49';
                        break
                    case 'hard':
                        max = 25
                        this.squaresWidth = 'width25';
                }

                const arr = this.randomArr(1, max);

                for (let i=0; i<arr.length; i++){

                    if (arr[i] <= 10){
                        
                        this.squaresArr.push({ 'value': 'bomb', 'icon': 'bomb.jpeg', 'active': 'no'})
                    }

                    else{

                        this.squaresArr.push({ 'value': arr[i], 'icon': 'flower.jpeg', 'active': 'no' })
                    }
                }
            },
            randomArr: function(min, max) {

                const arr = []

                for (let i=0; arr.length<max; i++){

                    const num = Math.floor(Math.random() * max - min + 1) + min;

                    if (!arr.includes(num)){
                        
                        arr.push(num)
                    }
                };

                return arr
            },
            squareClick: function(el) {

                el.active='yes'

                if (el.value == 'bomb'){

                    setTimeout(() => {

                        this.gameFinish = true;
                    }, 600)
                }
            },
        }
    });
};

function init() {
    
    initVue();
};

document.addEventListener('DOMContentLoaded', init)