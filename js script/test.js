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