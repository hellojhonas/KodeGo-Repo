let theDate1 = new Date();
document.write(`${theDate1} <br/>`);

let theDate2 = new Date(949278000000);
document.write(`${theDate2} <br/>`);

const theDate3 = new Date("30 November 2022");
document.write(`${theDate3} <br/>`);

const theDate4 = new Date(2022, 10, 30, 15, 35, 20, 20);
document.write(`${theDate4} <br/>`);

document.write(theDate2.getDay());

document.write(`${theDate4.toDateString()} <br/>`);

document.write(`${theDate2.toTimeString()} <br/>`);

let d = new Date();
d.setFullYear(2012);
document.write(d);