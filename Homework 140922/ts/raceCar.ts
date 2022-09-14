import Car from './car';

class RaceCar extends Car {
    private _maxSpeed: number;
    private _experience: number;
    constructor(brand: string, model: string, color: string, engineVolume: number, maxSpeed: number, experience: number) {
        super(brand, model, color, engineVolume);

        if (maxSpeed >= 200 && maxSpeed <= 500) this._maxSpeed = maxSpeed;
        else throw new Error('Maximum speed must be 200 to 500 km/s');

        if (experience <= 100) this._experience = experience;
        else throw new Error(`A race car can't drive more than a 100 times`);
    }
    get maxSpeed(): number {
        return this._maxSpeed;
    }
    get experience(): number {
        return this._experience;
    }
    set maxSpeed(maxSpeed) {
        if (maxSpeed >= 200 && maxSpeed <= 500) this.maxSpeed = maxSpeed;
        else throw new Error('Maximum speed must be 200 to 500 km/s');
    }
    set experience(experience) {
        if (experience <= 100) this.experience = experience;
        else throw new Error(`A race car can't drive more than a 100 times`);
    }
    display(): void {
        super.display();
        console.log(`Max Speed: ${this.maxSpeed}, Experience: ${this.experience}`);
    }
}
const myRaceCar = new RaceCar('Mazda', 'MX-5', 'Grey', 3000, 325, 9);
myRaceCar.display();
