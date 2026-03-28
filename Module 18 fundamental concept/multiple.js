const salary = 25000;
const isBCS = true;
const height = 66;
const hasCar = false;

// if(salary > 20000) {
//     console.log('su----patro')
// }
// else{
//     console.log('onno patro khuji')
// }

    // for multiple condition

    // if(salary > 20000 && height > 65 ){
    //     console.log('su----patro')
    // }
    // else{
    //     console.log('onno patro khuji')
    // } */

    // if(salary > 25000 || height > 65){
    //     console.log('eso baba kobul')
    // }
    // else{
    //     console.log('zaw baba mokbul')
    // }

    

    

    if((salary < 25000 && height < 78) || isBCS == true){
        console.log('allowed')
    }

    else{
        console.log('reject')
    }


    if((salary < 25000 || hasCar == true) || isBCS && true){
        console.log('allowed')
    }

    else{
        console.log('reject')
    }