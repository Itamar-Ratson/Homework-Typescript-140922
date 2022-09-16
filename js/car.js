"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Car {
    constructor(brand, model, color, engineVolume) {
        this._brand = brand;
        this._model = model;
        this._color = color;
        this._engineVolume = this.checkEngine(engineVolume);
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
    get engineVolume() {
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
        this.engineVolume = this.checkEngine(engineVolume);
    }
    checkEngine(engineVolume) {
        if (engineVolume < 4000)
            return engineVolume;
        else
            throw new Error('Engine Volume must not exceed 4000 cc');
    }
    display() {
        console.log(`Brand: ${this.brand}, Model: ${this.model}, Color: ${this.color}, Engine Volume: ${this.engineVolume}`);
    }
}
exports.default = Car;
