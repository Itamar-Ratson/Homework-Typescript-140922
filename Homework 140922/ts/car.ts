/**
 * CARS CLASS
 * Fields: brand, model, color, engine volume (max 4000)
 * Methods: getters and setters, ctor, show all details
 *
 * RaceCar is derived from Car
 * max speed: 200 - 500
 * num of races it was in, max 100.
 *
 * Make an object to test it.
 */

class Car {
    private _brand: string;
    private _model: string;
    private _color: string;
    private _engineVolume: number;
    constructor(brand: string, model: string, color: string, engineVolume: number) {
        this._brand = brand;
        this._model = model;
        this._color = color;
        if (engineVolume < 4000) this._engineVolume = engineVolume;
        else throw new Error('Engine Volume must not exceed 4000 cc');
    }
    get brand(): string {
        return this._brand;
    }
    get model(): string {
        return this._model;
    }
    get color(): string {
        return this._color;
    }
    get engineVolume(): number {
        return this._engineVolume;
    }
    set brand(manufactorer) {
        this.brand = manufactorer;
    }
    set model(model) {
        this.model = model;
    }
    set color(color) {
        this.color = color;
    }
    set engineVolume(engineVolume) {
        if (engineVolume < 4000) this.engineVolume = engineVolume;
        else throw new Error('Engine Volume must not exceed 4000 cc');
    }
    display() {
        console.log(`Brand: ${this.brand}, Model: ${this.model}, Color: ${this.color}, Engine Volume: ${this.engineVolume}`);
    }
}

// const myCar = new Car('brand', 'model', 'color', 0);
// myCar.display();

export default Car;
