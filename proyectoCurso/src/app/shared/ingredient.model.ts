export class Ingredient {
    public name: string;
    public amount: number;

    constructor(name: string, amount: number) {
        this.name = name;
        this.amount = amount;
    }

    // constructor(public name: string, public amount: number){}    <---Es lo mismo que arriba pero con acceso directo
}
