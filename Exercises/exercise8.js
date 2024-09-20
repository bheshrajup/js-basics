//Exercise8

let person={
    name: "Bheshraj Upadhyaya",
    age:22,
    greet: function(){
        console.log(`Hello, My name is ${this.name} and I am ${this.age}years old.`)
    }
};
//call the function
person.greet();