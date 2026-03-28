const Grade = 70;


if (Grade <= 59) {
    console.log('You are Failed')
}

else {
    if (Grade <= 69) {
        console.log('D')
    }
    else {
        if (Grade <= 79) {
            console.log('C')
        }
        else {
            if (Grade <= 89) {
                console.log('B')
            }
            else {
                if (Grade <= 100) {
                    console.log('A')
                }
            }
        }
    }
}

