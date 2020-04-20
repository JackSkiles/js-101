

function tipAmount(bill, service) {
    if (service === 'fair') {
        total = (bill/15);
    }
    return total;
}

console.log(tipAmount(100, 'fair'));