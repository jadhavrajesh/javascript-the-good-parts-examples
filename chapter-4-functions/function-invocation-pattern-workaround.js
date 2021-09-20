// Note - run this example in browser
var value = 100;
var myObj = {
    value: 0,
    increment: function(){                
        var that = this;  //workaround          
        that.value++; 

        console.log('this outside innerFunction:', this.value); // 1

        var innerFunction = function(){
            console.log('this inside innerFunction:', that.value); // 1
        }
        innerFunction();
    }
}

myObj.increment();