export class Person {

    public name: string;
    public lastName: string;
    public age: number;
    public country: string;
    public city: string;

    getData() {
        console.log(`${this.name} - ${this.lastName} - ${this.age} - ${this.country} - ${this.city}`);
    }
}
