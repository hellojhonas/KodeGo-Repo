// let radius = prompt("Give the radius of a circle", "");
// const area = Math.PI * radius *radius;
// document.write(`The area of the circle with  the radius of ${radius} is ${area}`);

// let anyNumber = prompt("Enter a number");
// document.write(Math.abs(anyNumber));

// let anyNumber1 = prompt("Enter a number");
// document.write(`ceil method returns ${Math.ceil(anyNumber1)} <br>`);
// document.write(`floor method returns ${Math.floor(anyNumber1)} <br>`);
// document.write(`round method returns ${Math.round(anyNumber1)} <br>`);
function rollDice() {
    let result = Math.random() * 6;
    result = Math.floor(result) + 1;
    document.querySelector('div.modal div.modal-body p').innerHTML = result;
}

function blockModal() {
    setTimeout( function () {
        document.getElementById('exampleModal').style = "display:block";
        rollDice();
    }, 1500);
}

function closeModal() {
    document.getElementById('exampleModal').style = "display:hidden";
}