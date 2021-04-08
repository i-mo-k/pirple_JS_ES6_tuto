const messageForInt = (value) => {
    message = "";
    divider = 1;
    divides = false;
    while (divider < value && !divides) {
        divider++;
        divides = value % divider === 0 && value !== divider;
    }
    if (!divides) {
        return "prime";
    } else {
        modulo3 = value % 3;
        if (modulo3 === 0) {
            message += "fizz";
        }
        modulo5 = value % 5;
        if (modulo5 === 0) {
            message += "buzz";
        }
        if (message === "") {
            message += value;
        }
        return message;
    }
}

for (let i = 1; i <= 100; i++) {
    console.log(messageForInt(i));
}