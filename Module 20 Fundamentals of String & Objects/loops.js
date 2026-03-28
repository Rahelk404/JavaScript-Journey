const mobile = {
    brand: 'Samsung',
    price: 25000,
    color: 'Black',
    isNew: true
}

for (const prop in mobile) {
    console.log(prop);
    console.log(mobile[prop]);

}

const keys = Object.keys(mobile);
console.log(keys);

for (const key of keys) {
    console.log(key, ':', mobile[key]);
}

const pen = { brand: 'econo', price: '10', color: 'white' }
const pencil = new Object();
console.log(pencil);
const rubber = Object.create({})
console.log(rubber);