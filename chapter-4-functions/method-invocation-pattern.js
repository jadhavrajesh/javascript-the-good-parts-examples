var myObj = {
    value: 0,
    increment: function(){
        this.value ++; // this bound to myObj
    }
}

myObj.increment();
console.log('value:', myObj.value);

myObj.increment();
console.log('value:', myObj.value);