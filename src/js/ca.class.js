class Book {
    constructor(title, genre, author){
    this.title = title;
    this.genre = genre;
    this.author = author;
    this.isBorrowed = false;
    }

    borrowed(){
        this.isBorrowed = true;
    }
    read(){
        console.log(`${this.title} was read on ${new Date().toDateString()}`);
    }
}


let book1 = new Book ("Tom Sawyer", "Classic", "Mark Twain"); 
//book1 is an instance of class Book

let book2 = new Book ("Count of Monte Cristo", "Classic", "Alexandre Dumas");


class Converter {
    convertToFahrenheit(degCel){
        let convertedValue = degCel * 9 / 5 + 32;
        return convertedValue;
    }

    convertToCelcius(degFah){
        let convertedValue = (degFah - 32) * 5 / 9;
        return convertedValue;
    }
  
    convertToKelvin(unitOfTemperature, temperature) {
        let Kelvin;
        if (unitOfTemperature == 'degFah') {
            let tempInCelcius = this.convertToCelcius(temperature);
            Kelvin = tempInCelcius + 273.15;
            return Kelvin;
        }
        else if (unitOfTemperature == 'degCel'){
            Kelvin = temperature + 273.15;
            return Kelvin;
        }
    }
}