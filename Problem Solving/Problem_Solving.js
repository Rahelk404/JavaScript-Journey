function calculateTax(income, expenses) {
    if (typeof income !== 'number' || typeof expenses !== 'number' || income < 0 || expenses < 0 || income < expenses) {
        return "Invalid Input";
    } else {
        const totalIncome = income - expenses;
        const tax = totalIncome * 0.20;
        return tax;
    }
}

function sendNotification(email) {

    if (typeof email !== 'string') {
        return "Invalid Email";
    } else if (!email.includes('@')) {
        return "Invalid Email";
    } else {
        const firstIndex = email.split("@");
        const user = firstIndex[0];
        const domain = firstIndex[1]
        return `${user} sent you an email from ${domain}`
    }
}


function checkDigitsInName(name) {
    if (typeof name !== 'string') {
        return "Invalid Input";
    } else {
        for (let i = 0; i < name.length; i++) {
            const char = name[i];
            if (char >= '0' && char <= '9') {
                return true;
            }
        }

        return false;
    }
}



function calculateFinalScore(obj) {
    if (typeof obj !== 'object' || typeof obj.name !== 'string' || typeof obj.testScore !== 'number' || typeof obj.schoolGrade !== 'number' || typeof obj.isFFamily !== 'boolean' || obj.testScore > 50 || obj.schoolGrade > 30) {
        return "Invalid Input";
    } else {
        let total = obj.schoolGrade + obj.testScore;
        if (obj.isFFamily === true) {
            total += 20;
        }
        return total >= 80;
    }
}


function waitingTime(waitingTimes, serialNumber) {
    if (!Array.isArray(waitingTimes) || typeof serialNumber !== 'number') {
        return 'invalid input';
    } else {
        let totalTime = 0;
        for (let i = 0; i < waitingTimes.length; i++) {
            totalTime += waitingTimes[i];
        }
        let avg = totalTime / waitingTimes.length;
        avg = Math.round(avg);

        let before = serialNumber - 1;

        let remaining = before - waitingTimes.length;

        if (remaining < 0) {
            return 0;
        }
        let waitingTiming = remaining * avg;
        return waitingTiming;

    }
}

