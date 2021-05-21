class Employee {
    constructor(name, id, email) {
      this.name = name;
      this.id = id;
      this.email = email;
    }
    printEmployee() {
        console.log(`${this.name}`);
        console.log(`${this.id}`);
        console.log(`Email: ${this.email}`);
      }
}
