"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const insturment_1 = __importDefault(require("./insturment"));
class Drum extends insturment_1.default {
    constructor(brand, model, color, diameter) {
        super(brand, model, color);
        this._diameter = this.checkDiameter(diameter);
    }
    get diameter() {
        return this._diameter;
    }
    set diameter(diameter) {
        this.diameter = this.checkDiameter(diameter);
    }
    checkDiameter(diameter) {
        if (diameter > 0)
            return diameter;
        else
            throw new Error('A drum must have a positive diameter');
    }
    display() {
        super.display();
        console.log(`Diameter: ${this.diameter}`);
    }
    makeSound() {
        console.log('Badum tss');
    }
}
const myDrum = new Drum('Mapex', 'Drum-BPDLV728XBPW', 'Maple', 22);
myDrum.display();
