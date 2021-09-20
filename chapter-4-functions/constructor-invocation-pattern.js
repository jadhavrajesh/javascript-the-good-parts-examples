
// constrtuctor function
var Car = function(brand, model){
    this.brand = brand;
    this.model = model;
}

Car.prototype.getBrand = function(){
    return this.brand 
}

// create an instance
var myCar = new Car('Tata', 'Safari');

console.log(myCar.getBrand())  // Tata

