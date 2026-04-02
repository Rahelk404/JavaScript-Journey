const mobiles = [
    {name: 'samsung', price: 20000, camera: '12mp', color: 'black' },
    {name: 'xioami', price: 18000, camera: '12mp', color: 'black' },
    {name: 'Oppo', price: 22000, camera: '12mp', color: 'black' },
    {name: 'Iphone', price: 70000, camera: '12mp', color: 'black' },
    {name: 'Walton', price: 15000, camera: '12mp', color: 'black' },
    {name: 'Vivo', price: 25000, camera: '12mp', color: 'black' }
]


function getCheapestPhone(phones){
    let min = phones[0];
    for(const phone of phones){
        if(phone.price < min.price){
            min = phone;
        }
    }
    return min;
}

const cheap = getCheapestPhone(mobiles);
console.log('Chepest phones is:', cheap);