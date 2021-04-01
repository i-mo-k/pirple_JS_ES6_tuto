const men = ["Socrates", "Obama", "Zeus"];

const isAMan = (name) => {
    return (men.includes(name));
}
const isChocolate = (cake) => {
    return (cake.flavour === "chocolate");
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

const executeFlavourSyllogism = (cake) => {
    const premise = "This cake is either vanilla or chocolate.\n";
    let message = premise;
    if (isChocolate(cake)) {
        message += "This cake is chocolate.\n" + 
            "Therefore this cake is not vanilla.";
    } else {
        message += "This cake is not chocolate.\n" + 
            "Therefore this cake is vanilla.";
    }
    console.log(message);
}

let person = "Socrates";
executeManSyllogism(person);
person = "Venus";
executeManSyllogism(person);

const cakes = [{flavour: "chocolate"}, {flavour: "chocolate"}, {flavour: "vanilla"}];
executeFlavourSyllogism(cakes[0]);
executeFlavourSyllogism(cakes[2]);