let myImage = document.querySelector('img');
myImage.onclick = function() {
    let mySrc = myImage.getAttribute('src');
    if (mySrc === 'images/cat-1151519__340.webp') {
        myImage.setAttribute('src', 'images/Teemo_4.jpg')
    } else {
        myImage.setAttribute('src', 'images/cat-1151519__340.webp')
    }
}

let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');

myButton.onclick = function() {
    setUserName();
}

function setUserName() {
    let myName = prompt('Please enter your name.');
    localStorage.setItem('name', myName);
    myHeading.textContent = "Learning JS, "+ myName;
}

if (!localStorage.getItem('name')) {
    setUserName();
} else {
    let storedName = localStorage.getItem('name');
    myHeading.textContent = "Learning JS, "+ storedName;
}

