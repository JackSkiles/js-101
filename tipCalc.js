

function tipAmount(bill, service) {
    if (service === "good") {
        total = (bill * .20);
    }
    else if (service === 'fair') {
        total = (bill * .15);
    }
    else if (service === 'bad') {
        total = (bill * .10);
    }
    return total;
}

console.log(tipAmount(150, 'bad'));

    
function totalAmount(bill, service) {
    if (service === "good") {
        total = (bill * .20);
    }
    else if (service === 'fair') {
        total = (bill * .15);
    }
    else if (service === 'bad') {
        total = (bill * .10);
    }
    return total + bill;
}

console.log(totalAmount(150, 'bad'));

function splitAmount(bill, service, split) {
    if (service === "good") {
        total = (bill * .20);
    }
    else if (service === 'fair') {
        total = (bill * .15);
    }
    else if (service === 'bad') {
        total = (bill * .10);
    }
    return (total + bill) / split;
}

console.log(splitAmount(170, 'bad', 3))