function anaToVori(ana) {

    if (typeof ana !== "number" || ana < 0) {
        return "Please provide an valid integer number";
    } else {
        const vori = ana * 0.065;
        return vori;
    }
}

console.log(anaToVori(4));