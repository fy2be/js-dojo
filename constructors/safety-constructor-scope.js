function Person(name) {
    if (this instanceof Person) {
        this.name = name;
    } else {
        return new Person(name);
    }
}

var person1 = new Person('Nico');
var person2 = Person('Rafi');

console.log(person1 instanceof Person); // true
console.log(person2 instanceof Person); // true

