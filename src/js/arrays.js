//myArr array
const myArr = ['s',7,true,'test'];

myArr[3] = 10;

console.log(myArr[3]);

//books array
let myArr1 = [];
let booksArr = new Array ("Book of Five rings", "The art of War", "Book of the Roman Army");

booksArr.push("48 Laws of Power");
console.log(booksArr);
booksArr[booksArr.length] = "Love Letters of Great Men";
console.log("The book array <bookArr> contains " + booksArr.length + " books");

let borrowedBook = booksArr.pop();
console.log("Luiz borrowd the book titled " + borrowedBook);
console.log("The books collection now contains " + booksArr.length + " books");

booksArr.unshift("The Prince")
console.log("Manuel donated a book named The Prince");
console.log("Our collection now contains " + booksArr.length + " books: ", booksArr.join(" | "));

console.log("Albert wanted to borrow the first book in the collection");
borrowedBook = booksArr.shift();
console.log("The first book in our collection that Albert borrowed is " + borrowedBook);
console.log("--------------------------------");
console.log("Our updated book colleciton is as follows: ", booksArr.join("|"));

myArr2 = [1, 2];
let values = [5, 6, 7];

let newArr = myArr2.concat(values);
console.log(newArr);



//number array for forEach method
myArr1 = [2, 5, 7, 9];
myArr1.forEach((e) => {
    console.log(e * 2);
    myArr1[myArr1.indexOf(e)] = e * 2; // this is not recommended
})
console.log(myArr1);


//function with array
function foo (){
    console.log("foo was called");
}

const array = [];

const nums = [1,2,3,4];

const strs = ["John","Nonito","Manny","Ali"];

const mixins = [1, "Gelica", foo];
mixins [2]();
