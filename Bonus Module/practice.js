const students =
{
    name: 'Rahel Khan',
    age: 23,
    fatheName: 'Shamsu Kham',
    isMarried: false,
    friends: ['FOYEJ', 'NAZMUL', 'HASAN', 'BABU', 'RASEL'],
    education: [
        { exam: 'PSC', year: 2015, result: 4.75 },
        { exam: 'JSC', year: 2018, result: 3.25 },
        { exam: 'SSC', year: 2021, result: 3.23 },
        { exam: 'HSC', year: 2024, result: 3.25 }
    ],
    work: {
        institute: 'Hotel Oriental',
        position: 'Receptionist',
        experiance: '1 year',
    },
    address: {
        village: 'aloitoli',
        postOffice: 'Katia',
        upazila: 'Jagannathpur',
        district: 'Sunamganj',
        city: 'sylhet'
    },
    act: function () {
        console.log('acting like an object');
    }
}

console.log(students);

students.act();



const products = [
    { id: 1, name: 'HP Laptop', price: 19000 },
    { id: 2, name: 'xiomi Phone', price: 19000 },
    { id: 3, name: 'IPhone', price: 19000 },
    { id: 4, name: 'Samsung Phone', price: 19000 },
    { id: 5, name: 'Macbook Air Laptop', price: 19000 },
    { id: 6, name: 'Lenovo Yoga Laptop', price: 19000 },
    { id: 7, name: 'Nokia old age Phone', price: 19000 },
    { id: 8, name: 'Phone one', price: 19000 }
]



function matchedProducts(products, search){
    const matched = [];
    for(const product of products){
        if(product.name.toLowerCase().includes(search.toLowerCase())){
            matched.push(product);
        }
    }
    return matched;
}

console.log(matchedProducts(products, 'phone'));