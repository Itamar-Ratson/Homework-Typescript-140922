"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const insturment_1 = __importDefault(require("./insturment"));
class Piano extends insturment_1.default {
    constructor(brand, model, color, cords) {
        super(brand, model, color);
        this._cords = this.checkCords(cords);
    }
    get cords() {
        return this._cords;
    }
    set cords(cords) {
        this.cords = this.checkCords(cords);
    }
    checkCords(cords) {
        if (cords > 19 && cords < 251)
            return cords;
        else
            throw new Error('A piano must have 20 to 150 cords');
    }
    display() {
        super.display();
        console.log(`Cords: ${this.cords}`);
    }
    makeSound() {
        console.log('Piano sounds');
    }
}
const myPiano = new Piano('Kawai', 'Piano-CA49', 'Black', 88);
myPiano.display();
exports.default = Piano;
