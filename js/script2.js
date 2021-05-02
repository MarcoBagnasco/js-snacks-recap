/******************************************************************
 ********************   JSNACKS RECAP  ****************************
 ******************************************************************/

// VUE INSTANCE
const app = new Vue({
    el: '#root',
    data: {
        /***************** DAY 1 ****************/
        // SNACK 1
        brands: [
            {
                name: 'Sony',
            },
            {
                name: 'Gucci',
            },
            {
                name: 'Dolce&Gabbana',
            },
            {
                name: 'Samsung',
            },
            {
                name: 'Philips',
            },
            {
                name: 'Apple',
            },
            {
                name: 'Asus',
            },
            {
                name: 'Nike',
            },
            {
                name: 'Adidas',
            },
            {
                name: 'Puma',
            },
        ],
        minBrandsYear: [],

        // SNACK 2
        cars: [
            {
                brand: 'Renault',
                model: 'Twingo',
                alimentation: 'Benzine',
            },
            {
                brand: 'Fiat',
                model: 'Marea',
                alimentation: 'Benzine',
            },
            {
                brand: 'Volkswagen',
                model: 'Polo',
                alimentation: 'Diesel',
            },
            {
                brand: 'Tesla',
                model: 'Model X',
                alimentation: 'Electric',
            },
            {
                brand: 'Renault',
                model: 'Clio',
                alimentation: 'Methane',
            },
            {
                brand: 'Fiat',
                model: 'Punto',
                alimentation: 'Diesel',
            },
            {
                brand: 'Merceds',
                model: 'Classe A',
                alimentation: 'Benzine',
            },
            {
                brand: 'Fiat',
                model: 'Fiorino',
                alimentation: 'Gpl',
            },
            {
                brand: 'BMW',
                model: 'Z4',
                alimentation: 'Benzine',
            },
            {
                brand: 'Tesla',
                model: 'Model S',
                alimentation: 'Electric',
            },
        ],
        benzine: [],
        diesel: [],
        others: [],

        /***************** DAY 2 ****************/
        // SNACK 1
        animals: [
            {
                name: 'Lion',
                family: 'Felidae  ',
                class: 'Mammals'
            },
            { 
                name: 'Dog',
                family: 'Canidae', 
                class: 'Mammals' 
            },
            { 
                name: 'Hen', 
                family: 'Phasianidae', 
                class: 'Birds' 
            },
            {
                name: 'Shark', 
                family: 'Lamnidae', 
                class: 'Chondrichthyes ' 
            },
            { 
                name: 'Cobra', 
                family: 'Elapidae', 
                class: 'Reptiles' 
            },
            { 
                name: 'Cow', 
                family: 'Bovidae', 
                class: 'Mammals' 
            },
        ],
        mammals: [],

        // SNACK 2
        people: [
            {
                firstName: 'Marco',
                lastName: 'Bagnasco',
                age: 33,
            },
            {
                firstName: 'Egle',
                lastName: 'Solari',
                age: 9,
            },
            {
                firstName: 'Silvia',
                lastName: 'Renzi',
                age: 41,
            },
            {
                firstName: 'Andrea',
                lastName: 'Rossi',
                age: 17,
            },
            {
                firstName: 'Laura',
                lastName: 'Bianchi',
                age: 14,
            },
            {
                firstName: 'Luca',
                lastName: 'Giurato',
                age: 81,
            },
            {
                firstName: 'Michele',
                lastName: 'Rezzano',
                age: 28,
            },
            {
                firstName: 'Giovanni',
                lastName: 'Devoto',
                age: 12,
            },
        ],
        allowDrive: [],

        // SNACK3
        pc: [
            {
                name: 'Susan',
                brand: 'Asus',
                hasWindows: true,
                price: 1400,
                discountPrice: 1000,
            },
            {
                name: 'Qwerty',
                brand: 'HP',
                hasWindows: false,
                price: 899,
                discountPrice: 599,
            },
            {
                name: 'MacBook',
                brand: 'Apple',
                hasWindows: false,
                price: 1200,
                discountPrice: 799,
            },
            {
                name: 'Bau',
                brand: 'Asus',
                hasWindows: true,
                price: 400,
                discountPrice: 150,
            },
            {
                name: 'ZXCV',
                brand: 'Lenovo',
                hasWindows: true,
                price: 900,
                discountPrice: 450,
            },
        ],
        win: [],

        /***************** WEEKEND ****************/
        // SNACK 1
        words: [
            'pippo',
            'PLUTO',
            'Paperino',
            'tOPOLinO'
        ],
        capitalized: [],

        // SNACK 2
        browser: {
            tab: ['Facebook', 'GitHub', 'Gmail', 'Twitter', 'Instagram', 'Wikipedia', 'Stackoverflow'],
            activeTab: 0,
        },
        social: ['Facebook', 'Twitter', 'Instagram', 'YouTube', 'Snapchat', 'Tik Tok'],

        // SNACK 3
        words2: [
            'pippo',
            'PLUTO',
            'Paperino',
            'tOPOLinO'
        ],
        capitalized2: [],
        
        // SNACK 4
        contacts: [
            {
                firstName: 'John',
                lastName: 'Cena',
                number: 3931800525,
                active: true,
            },
            {
                firstName: 'Zlatan',
                lastName: 'Ibrahimovic',
                number: 3458978261,
                active: true,
            },
            {
                firstName: 'Bruce',
                lastName: 'Willis',
                number: 3404742558,
                active: true,
            },
            {
                firstName: 'Natalie',
                lastName: 'Portman',
                number: 3336665400,
                active: true,
            },
            {
                firstName: 'Flavia',
                lastName: 'Pennetta',
                number: 3471526489,
                active: true,
            },
            {
                firstName: 'Bill',
                lastName: 'Gates',
                number: 3381237894,
                active: true,
            },
            {
                firstName: 'Angela',
                lastName: 'Merkel',
                number: 3471515002,
                active: true,
            },
        ],
        selectedContact: '',
    },
    methods: {
        refresh(){
            location.reload();
        },

        /***************** DAY 1 ****************/
        // SNACK1
        /**
         * Return random number between min and max
         * @param {number} min 
         * @param {number} max 
         * @returns 
         */
        randomNum(min, max){
            return Math.floor(Math.random() * (max - min + 1 ) + min);
        },
        /**
         * Perform task of Snack1 Day1
         */
        snack1Day1(){
            this.minBrandsYear = this.brands.map(brand => {
                    return {
                        name: brand.name.toLocaleLowerCase(),
                        foundationYear: this.randomNum(1900, 2020),
                    };
                });
        },

        // SNACK2
        /**
         * Perform task of Snack2 Day1
         */
        snack2Day1(){
            this.benzine = this.cars.filter(item => item.alimentation === 'Benzine');
            this.diesel = this.cars.filter(item => item.alimentation === 'Diesel');
            this.others = this.cars.filter(item => (!this.benzine.includes(item) && !this.diesel.includes(item)));
        },

        /***************** DAY 2 ****************/
        // SNACK 1
        /**
         * Perform task of Snack1 Day2
         */
        snack1Day2(){
            this.mammals = this.animals.filter(element => element.class === 'Mammals');
        },

        // SNACK 2
        /**
         * Perform task of Snack2 Day2
         */
        snack2Day2(){
            this.allowDrive = this.people.map(item => `${item.firstName} ${item.lastName} can${item.age >= 18 ? '':'not'} drive.`)
        },

        // SNACK3
        /**
         * Perform task of Snack3 Day2
         */
        snack3Day2(){
            this.win.splice(0);
            this.pc.forEach(item => {
                if(item.hasWindows){
                    this.win.push({...item, diffPrice: item.price - item.discountPrice});
                }
            });
        },

        /***************** WEEKEND ****************/
        // SNACK 1
        /**
         * Perform task of Snack1 Weekend
         */
        snack1Weekend(){
            this.capitalized = this.words.map(word => word.charAt(0).toUpperCase() + word.toLocaleLowerCase().slice(1));
        },

        // SNACK 2
        /**
         * Perform task of Snack2 Weekend
         */
         snack2Weekend(){
            this.browser.tab = this.browser.tab.filter(item => !this.social.includes(item));
        },
        /**
         * Set the activeTab
         * @param {number} index - tab position in the array 
         */
        selectTab(index){
            this.browser.activeTab = index;
        },

        // SNACK 3
        /**
         * Perform task of Snack3 Weekend
         */
         snack3Weekend(){
            this.capitalized2 = this.toCapital(this.words2);
        }, 
        /**
         * Convert strings to capitalized from string'array
         * @param {array} arrString - array of strings
         * @returns 
         */
        toCapital(arrString){
            const capArr = arrString.map(arrString => arrString.charAt(0).toUpperCase().concat(arrString.toLocaleLowerCase().slice(1)));
            return capArr;
        },    
        
        // SNACK 4
        /**
         * Perform task of Snack4 Weekend
         */
         snack4Weekend(){
            this.contacts.forEach(item => {
                item.active = this.randomNum(0, 1);
            });
        }, 
        /**
         * Set lastName selectedContact by contact index
         * @param {number} index - contact position in the array
         */
        getLastName(index){
            this.selectedContact = this.contacts[index].lastName;
        }
    },
});