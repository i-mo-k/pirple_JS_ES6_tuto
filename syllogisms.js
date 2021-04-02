const isAMan = (name) => {
    const men = ["Socrates", "Obama", "Zeus"];
    return (men.includes(name));
}
const getFlavour = (cake) => {
    return cake.flavour;
}

const executeManSyllogism = (person) => {
    const premise = "All men are mortal.\n";
    let message = premise;
    if (isAMan(person)) {
        message += person + " is a man.\n" + 
            "Therefore " + person + " is mortal.";
    } else {
        message += person + " is no man.\n" + 
            "Therefore " + person + " is immortal.";
    }
    console.log(message);
}

const executeFlavourSyllogism = (flavours, isChocolate) => {
    flavMaxIndex = flavours.length - 1;
    allButLastFlavour = flavours.slice(0, flavMaxIndex).join(", ");
    lastFlavour = flavours[flavMaxIndex];
    const premise = "This cake is either " + [allButLastFlavour, lastFlavour].join(" or ") + ".\n";
    let message = premise;
    if (isChocolate) {
        message += "This cake is chocolate.\n" + 
            "Therefore this cake is not vanilla.";
    } else {
        message += "This cake is not chocolate.\n" + 
            "Therefore this cake is vanilla.";
    }
    return message;
}

let person = "Socrates";
executeManSyllogism(person);
person = "Venus";
executeManSyllogism(person);

const flavours = ["chocolate", "vanilla"];
console.log(executeFlavourSyllogism(flavours, true));
console.log(executeFlavourSyllogism(flavours, false));