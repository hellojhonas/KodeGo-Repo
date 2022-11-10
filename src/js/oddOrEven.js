// alert("Hi, you're at the 'Odd or Even' Exercise");

function oddOrEven(){
    let num = document.getElementById('number');
    number = parseInt(num.value);
    if(number % 2 == 0){
        document.getElementById('result').innerHTML ="The value that you entered: " + num.value +" is an even number";
    }
    
    else if(number % 2 >= 0.01){
        document.getElementById('result').innerHTML = "The value that you entered: " + num.value +" is an odd number";
    }
    else{
        document.getElementById('result').innerHTML = "Please enter a valid whole number, thank you!";
    }
}