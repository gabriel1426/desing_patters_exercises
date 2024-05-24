export class Animal {
    public name: string;
    public age: number;
    public country: string;

    getData() {
        console.log(`${this.name} -  ${this.age} - ${this.country}`);
    }
}
