var value = 100;
var myObj = {
    value: 0,
    increment: function(){        
        this.value++;
        console.log('this outside innerFunction:', this.value); // 1

        var innerFunction = function(){
            console.log('this inside innerFunction:', this.value); // 1
        }
        innerFunction.apply(this,[]); // param as this, array of arguments
        // var arg1,arg2= 200;
        // innerFunction.call(this, arg1, arg2); // param as this, arguments
    }
}
myObj.increment();