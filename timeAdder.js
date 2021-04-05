const admissibleLabels = ["seconds", "minutes", "hours", "days", "second", "minute", "hour", "day"];

const timeAdder = (value1, label1, value2, label2) => {
    validity = isValid(value1, label1, value2, label2);
    if (validity) {
        time1 = convertToSeconds(value1, label1);
        time2 = convertToSeconds(value2, label2);
        result = time1 + time2;
        if (result === 1) {
            return [1, "second"];
        } else {
            return reduceTime([result, "seconds"]);
        }
    } else {
        return validity;
    }
}

const isValid = (value1, label1, value2, label2) => {
    if (typeof value1 !== "number" || typeof value2  !== "number") {
        console.log("numbers only");
        return false;
    }
    if (!admissibleLabels.includes(label1) || !admissibleLabels.includes(label2)) {
        console.log("wrong labels");
        return false;
    }
    return areLabelAndValueCompliant(label1, value1) && areLabelAndValueCompliant(label2, value2);
}

const areLabelAndValueCompliant = (unit, val) => {
    if (val === 1) {
        return !unit.endsWith("s");
    } else {
        return unit.endsWith("s");
    }
}

const convertToSeconds = (value, unit) => {
    switch (unit) {
        case "second": case "seconds": 
            return value;
        case "minute": case "minutes": 
            return convertToSeconds(value * 60, "seconds");
        case "hour": case "hours":
            return convertToSeconds(value * 60, "minutes");
        case "day": case "days":
            return convertToSeconds(value * 24, "hours");
        default:
            return value;
    }
}

const reduceTime = (result) => {
    value = result[0];
    switch (result[1]) {
        case "seconds":
            if (value % 60 !== 0) {
                return result;
            } else {
                value /= 60;
                return (value === 1) ? [1, "minute"] : reduceTime([value, "minutes"]);
            }
        case "minutes": 
        if (value % 60 !== 0) {
            return result;
        } else {
            value /= 60;
            return (value === 1) ? [1, "hour"] : reduceTime([value, "hours"]);
        }
        case "hours":
            if (value % 24 !== 0) {
                return result;
            } else {
                value /= 24;
                return (value === 1) ? [1, "day"] : [value, "days"];
            }
        default:
            return result;
    }
}

console.log(timeAdder(9, "hours", 15, "hours"));