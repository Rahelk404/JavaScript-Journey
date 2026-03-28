const mobile = {
    Brand: 'samsung',
    price: 30000,
    color: 'silver',
    camera: '12mp',
    isNew: true
}



for (const prop in mobile){
    // console.log(prop);
    console.log(mobile[prop]);
    // console.log(mobile, ':', prop);
}

const keys = Object.keys(mobile);
console.log(keys);

for (const key of keys){
    console.log(key, ':' ,mobile[key]);
}


