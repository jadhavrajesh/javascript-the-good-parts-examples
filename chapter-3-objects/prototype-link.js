var person = { name:'John Doe'}

console.log(person.age); // undefined

Object.prototype.age = 100;

console.log(person.age); // 100
