document.addEventListener("DOMContentLoaded", onLoad);

const root = document.getElementById("container");
    
function onLoad() {
    clearRoot();
    const title = document.createElement('h1');
    title.id = "title";
    title.innerText = document.title;
    root.appendChild(title);
    const description = document.createElement('h2');
    description.innerText = "Organize any job that has to be done in a couple of clicks !"
    root.appendChild(description);
    const icon = document.createElement('img');
    icon.id = "toDoList_logo";
    icon.setAttribute('src', "check.png");
    root.appendChild(icon);
    const signUpButton = document.createElement('button');
    signUpButton.id ="SignUp";
    signUpButton.innerText = "Sign Up";
    signUpButton.addEventListener("click", loadSignUp);
    root.appendChild(signUpButton);
    const signInButton = document.createElement('button');
    signInButton.id ="SignIn";
    signInButton.innerText = "Sign In";
    signInButton.addEventListener("click", loadSignIn);
    root.appendChild(signInButton);
}

function loadSignUp() {
    clearRoot();
    const signUpDiv = document.createElement('div');
    signUpDiv.id = "signUp";
    const firstName = buildFormEntry("firstName", "first name", "text");
    signUpDiv.appendChild(firstName);
    const lastName = buildFormEntry("lastName", "last name", "text");
    signUpDiv.appendChild(lastName);
    const email = buildFormEntry("email", "E-mail address", "email");
    signUpDiv.appendChild(email);
    const password = buildFormEntry("password", "password", "password");
    signUpDiv.appendChild(password);
    const terms = buildCheckBox("terms", "I agree to the Terms of Use", "checkbox");
    signUpDiv.appendChild(terms);
    const submitButton = document.createElement('button');
    submitButton.id ="Submit";
    submitButton.innerText = "Submit";
    submitButton.addEventListener("click", submitSignIn);
    signUpDiv.appendChild(submitButton);
    root.appendChild(signUpDiv);
}

function loadSignIn() {
    clearRoot();
}

function submitSignIn() {
    if (formIsValid("signUp")) {
        loadDashboard();
    }
}

const displayError = (element, msg) => {
    let message = element.getElementById("error");
    if (!message) {
        message = document.createElement('p');
        message.classList.add("error");
    }
    message.innerText = msg;
    return message;
}

const formIsValid = (id) => {
    let element = document.getElementById(id);
    for (const input of element.getElementsByTagName("input")) {
        if (input.validity.badInput) {
            element.appendChild(displayError(element, "The field entered in "
                    + input.id + " is invalid."));
            return false;
        }
    }
    if (!element.getElementsByTagName("button").checked) {
        element.appendChild(displayError(element,
                    "Please accept the Terms of Use in order to proceed."));
        return false;
    }
}

const clearRoot = () => {
    root.innerHTML = "";
}

const buildFormEntry = (id, description, type) => {
    const formEntry = document.createElement('div');
    const fNameLabel = document.createElement('label');
    fNameLabel.id = id;
    fNameLabel.setAttribute('for', id);
    fNameLabel.innerText = "Enter your " + description + " : ";
    formEntry.appendChild(fNameLabel);
    const fNameForm = document.createElement('input');
    fNameForm.id = id;
    fNameForm.setAttribute('type', type);
    fNameForm.setAttribute('name', description);
    fNameForm.setAttribute('required', "true");
    formEntry.appendChild(fNameForm);
    return formEntry;
}

const buildCheckBox = (id, description, type) => {
    const formEntry = document.createElement('div');
    const fNameForm = document.createElement('input');
    fNameForm.id = id;
    fNameForm.setAttribute('type', type);
    fNameForm.setAttribute('name', id);
    formEntry.appendChild(fNameForm);
    const fNameLabel = document.createElement('label');
    fNameLabel.id = id;
    fNameLabel.setAttribute('for', id);
    fNameLabel.innerText = description;
    formEntry.appendChild(fNameLabel);
    return formEntry;
}