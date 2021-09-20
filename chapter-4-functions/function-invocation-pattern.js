// When a function is not a propery of object then it is invoked as function 
function add(a,b){
    console.log('this:',this); // this refers to global object i.e. window in browser
    return a+b
}

////////////////////

// Note - run this example in browser
var value = 100;
var myObj = {
    value: 0,
    increment: function(){           
        this.value++; 

        console.log('this outside innerFunction:', this.value); // 1

        var innerFunction = function(){
            console.log('this inside innerFunction:', this.value); // 100
        }
        innerFunction();
    }
}

myObj.increment(); 