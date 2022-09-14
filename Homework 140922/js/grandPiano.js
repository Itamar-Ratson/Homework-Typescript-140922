"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const piano_1 = __importDefault(require("./piano"));
class GrandPiano extends piano_1.default {
    constructor(brand, model, color, cords, length) {
        super(brand, model, color, cords);
        if (length > 0)
            this._length = length;
        else
            throw new Error('A piano must have 20 to 150 length');
    }
    get length() {
        return this._length;
    }
    set length(length) {
        if (length > 0)
            this.length = length;
        else
            throw new Error('A piano must have 20 to 150 length');
    }
    display() {
        super.display();
        console.log(`Length: ${this.length}`);
    }
    makeSound() {
        console.log('Grand piano sounds');
    }
}
const myGrandPiano = new GrandPiano('Linke', 'GrandPiano-B079B4RNXW', 'Mahogany', 90, 71);
myGrandPiano.display();
myGrandPiano.makeSound();
