// ====solution 1====
function PersonDetails(firstName, lastName, 
    email) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.email = email;

    // ===FirstName===
    this.getFirstName = ()=> {
        return this.firstName
    }
    this.setFirstName = (value) =>{
        this.firstName = value;
    }
    // ===LastName===
    this.getLastName = ()=> {
        return this.lastName
    }
    this.setLastName = (value) =>{
        this.lastName = value;
    }
    // ===Email==
    this.getEmail = ()=> {
        return this.email
    }
    this.setEmail = (value) =>{
        this.email = value;
    }    
    
    this.display = ()=> {
        return `
        Name: ${this.getFirstName()}
        Surname: ${this.getLastName()}
        Email: ${this.getEmail()}`;
    }
} 
let person = new PersonDetails("Peter", "Henk",
"peter@gmail.com");
console.log(person1.display());
console.log("=============");
person1.setFirstName("Sarah");
person1.setLastName("James");
person1.setEmail("sarah@gmail.com");
console.log(person1.display());

// ====Solution 2====
class PersonDetails{
    // Private
    #firstName;
    #lastName;
    #email;
    constructor(firstName, lastName, email) {
        this.#firstName = firstName;
        this.#lastName = lastName;
        this.#email = email;
    }
    // FirstName
    get firstName() {
        return this.#firstName;
    }
    set firstName(value) {
        this.#firstName = value;
    }
    // LastName
    get lastName() {
        return this.#lastName;
    }
    set lastName(value) {
        this.#lastName = value;
    }
    // Email
    get email() {
        return this.#email;
    }
    set email(value) {
        this.#email = value;
    }
    // Display
    display() {
        console.log(`
        Name: ${this.firstName}
        Surname: ${this.lastName}
        Email: ${this.email}`);
    }
}
let person1 = new PersonDetails("Joel", "Mukanya", "joel@gmail.com");
person1.display();
console.log("===========");
person1.firstName = "Peter";
person1.lastName = "Henk";
person1.email = "peter@gmail.com"
person1.display();
