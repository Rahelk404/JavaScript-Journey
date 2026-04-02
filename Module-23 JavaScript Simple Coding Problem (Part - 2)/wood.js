/**
 * chair --> 3 cft
 * table --> 10cft
 * bed --> 50cft
*/


function woodQuantity(chairQuantity, tableQuantity, bedQuantity){
    const perChairWood = 3;
    const perTableWood = 10;
    const perBedWood = 50;

    const ChaiTotalrWood = chairQuantity * perChairWood;
    const tableTotalWood = tableQuantity * perTableWood;
    const bedTotalWood = bedQuantity * perBedWood;

    const totalWood = ChaiTotalrWood + tableTotalWood + bedTotalWood;

    return totalWood;
}


const wood = woodQuantity(0, 0, 1);
console.log('Wood Need:', wood);

