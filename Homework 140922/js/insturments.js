"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Insturment {
    constructor(manufacturer, model, color) {
        this._manufacturer = manufacturer;
        this._model = model;
        this._color = color;
    }
    get manufacturer() {
        return this._manufacturer;
    }
    get model() {
        return this._model;
    }
    get color() {
        return this._color;
    }
    set manufacturer(manufacturer) {
        this._manufacturer = manufacturer;
    }
    set model(model) {
        this._model = model;
    }
    set color(color) {
        this._color = color;
    }
    display() {
        console.log(`Manufacturer: ${this.manufacturer}, Model: ${this.model}, Color: ${this.color}`);
    }
}
const myInsturment = new Insturment('manuf', 'Guitar-34', 'black', 6);
myInsturment.display();
exports.default = Insturments;
