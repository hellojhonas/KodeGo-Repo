// alert("Hi, you're at the 'Day Greetings' Exercise");

//a function that only a *legend will understand, cheers!
function greet() {
    let day = document.getElementById('chosenday').value;
    day = day.toUpperCase();
    let greetings = document.getElementById('greetings');
    switch (day){
      case 'MONDAY':
        greetings.innerHTML = `<img class="greetings-img"  src="../assets/js.switch/monday.png">`
        break;
      case 'TUESDAY':
        greetings.innerHTML = `<img class="greetings-img"  src="../assets/js.switch/tuesday.png">`
        break;
      case 'WEDNESDAY':
        greetings.innerHTML = `<img class="greetings-img" src="../assets/js.switch/wednesday.png">`
        break;
      case 'THURSDAY':
        greetings.innerHTML = `<img class="greetings-img"  src="../assets/js.switch/thursday.png">`
        break;
      case 'FRIDAY':
        greetings.innerHTML = `<img class="greetings-img"  src="../assets/js.switch/friday.png">`
        break;
      case 'SATURDAY':
        greetings.innerHTML = `<img class="greetings-img"  src="../assets/js.switch/saturday.png">`
        break;
      case 'SUNDAY':
        greetings.innerHTML = `<img class="greetings-img"  src="../assets/js.switch/sunday.png">`
        break;
      default:
        greetings.innerHTML = `<img class="greetings-img"  src="../assets/js.switch/noday.png">`
    }
}
