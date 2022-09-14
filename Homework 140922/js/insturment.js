"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Insturment {
    constructor(brand, model, color) {
        this._brand = brand;
        this._model = model;
        this._color = color;
    }
    get brand() {
        return this._brand;
    }
    get model() {
        return this._model;
    }
    get color() {
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
    display() {
        console.log(`Brand: ${this.brand}, Model: ${this.model}, Color: ${this.color}`);
    }
}
exports.default = Insturment;
