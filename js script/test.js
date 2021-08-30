console.log('Hello ');
document.write('Bangladesh');

function sleep(name,time){
    console.log(name + "  is sleeping at " + time);
}
console.log('My name is jasim');
sleep("jasim","10 pm");
sleep("karim","2 am");
sleep("rahim","12 am");
function goodreaturn(a,b){
    return a*b;
}
let x = goodreaturn(4,5);
console.log(x);

function MyFunction(){
    let carName = "volvo";
    console.log(carName);
}
MyFunction();


//object
const car = {
    name:"fiat",
    model:500,
    weight:"850 kg",
    color:"white",
    start: function(){
        this.drive();
        console.log("car has started");
    },
    drive: function(){
        console.log("car is drived");
    },

}
console.log(car.weight);
console.log(car['model']);
car.start();

// string
let text = "abcd efsfsfsf";
console.log(text.length);

let texta = "there are so called \"vikings\" and we are very"
console.log(texta);
//string methods
let str = "Aplle, Bannana, Mengo";
let banana = str.slice(6,14);
console.log(banana);
console.log(str.slice(7,13));
//replace string
let zarina = "I love Afruza";
let ety = zarina.replace("Afruza","ety");
console.log(ety);
// concate
let text1 = "Hello";
let text2 = "world";
let text3 = text1.concat(" ",text2);
console.log(text3);
let text4 = "Yes his";
text5 = text4.charAt(0);
console.log(text5);
text6 =text4.charCodeAt(1);
console.log(text6);
text7 = text4[0];
console.log(text7);
console.log(typeof text4.charAt(2));

let text8 = "Hello Hello Hello world";
console.log(text8.split(""));

console.log(text8.lastIndexOf("Hello",15));
 
let text9 = `yes this not`
console.log(text9);
// letral syntax and inter polation

let country = "Bangladesh";
let a1 = 17;
let b1 = 2;

let sentence = `I love my ${country} and It has population of ${a1+b1}`;
console.log(sentence);

let mystring = 32;
console.log(mystring.toString(10));
console.log(mystring.toString(2));
console.log(mystring.toString(8));
console.log(mystring.toString(16));
console.log(mystring.toString(32));

