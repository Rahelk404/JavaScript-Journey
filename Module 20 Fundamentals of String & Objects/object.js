//! premative 
const age = 21;
const school = 'Rifle square';
const isPassed = true;
// let isDeveloper;
const subject = ['Bangla', 'English', 'Phsics', 'Math'];
const bottle = ['white', 45];
const bottleColor = 'white';
const bottlePrice =  45;
const bottleDrinks = 'water';


// object
// non-premative
const bottles = {
    name: 'Rahel khan',
    age : 21,
    studies: 'HSC',
    from: 'Sylhet'
}

// console.log(bottles);

// object
// non-premative
const items = {
    name: ['Melobuds Pro','Melobuds Pro','Melobuds Pro'],
    brand: 'Qcy',
    model: ['HT 08','HT 08','HT 08'],
    warrenty: {
        replacement: '7 Days',
        warrentyPeriod: '180 Days'
    },
    madeBy: {
        madeIn: 'China',
        export: ['BD', 'IND', 'MD', 'UK'],
        distributorBD: {
            importer: 'zero importer',
            importerBdShop: {
                ShopName: ['Star-tech', 'Ryans', 'Excel Tech'],
            }
        }
        
    },
    accelerate: function(){
        console.log('speed up');
    }
}

items.accelerate();
console.log(items);