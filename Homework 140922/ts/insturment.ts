/**
 * INSTURMENTS CLASS
 * Fields: model,brand,color
 *
 * Guitar is derived from Insturments
 * Fields: strings(4 to 8)
 *
 * Drum is derived from Insturments
 * Fields: circumference(>0)
 *
 * Piano is derived from Insturments
 * Fields: cords(20 to 150)
 *
 * Grand Piano is derived from Piano
 * length(>0)
 *
 * Methods:
 * getters,setters
 * ctor
 * display all details
 * makesound - makes sound appropriate to the insturment ('making drum sound')
 */

class Insturment {
    private _brand: string;
    private _model: string;
    private _color: string;
    constructor(brand: string, model: string, color: string) {
        this._brand = brand;
        this._model = model;
        this._color = color;
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
    set brand(brand) {
        this.brand = brand;
    }
    set model(model) {
        this.model = model;
    }
    set color(color) {
        this.color = color;
    }
    display(): void {
        console.log(`Brand: ${this.brand}, Model: ${this.model}, Color: ${this.color}`);
    }
}

// const myInsturment = new Insturment('brand', 'model', 'color');
// myInsturment.display();

export default Insturment;
