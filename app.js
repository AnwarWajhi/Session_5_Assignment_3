//creating javascript object using object literal notation
var Employee = {
    name: 'Jade',
    age: 25,
    salary: '$5000',
    address:{
    	city:'Amsterdam',
    	state:"New Yorkshire",
    	PIN: 101007
        } //"Nested object" Address  is an object having city, state & PIN
    };

//printing in console
console.log("name: "+Employee.name);
console.log("age: "+Employee.age);
console.log("salary: "+Employee.salary);
console.log("adress: "+Employee.address.city+", "+Employee.address.state+" "+Employee.address.PIN);