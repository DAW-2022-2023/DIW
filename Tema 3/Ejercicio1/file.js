function sqrWDecimal(num, potencia) {
    for (let i = 1; ; i = i + (1 / potencia * 10)) {
        if (num <= (i * i).toFixed(2)) {
            return i;
        }
        if (num < (i * i).toFixed(2)) {
            return i - 1
        }
    }
}

function sqrDosDecimales(num) {
    return sqrWDecimal(num, 4);
}

