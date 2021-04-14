const onLoad = () => {
    const title = document.createElement('h1');
    const description = document.createElement('h2');
    const icon = document.createElement('img');
    const signUpButton = document.createElement('button');
    const signInButton = document.createElement('button');
    document.getElementById("container").innerHTML = "<div><h1 id=\"title\"></h1>"
        + "<h2>This is a list of 10 of my favourite colours. "
        + "In any pictures I draw, I would be likely to use them.</h2>"
        + "<div id=\"rectangleWrapper\"></div></div>";
}