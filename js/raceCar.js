"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const car_1 = __importDefault(require("./car"));
class RaceCar extends car_1.default {
    constructor(brand, model, color, engineVolume, maxSpeed, experience) {
        super(brand, model, color, engineVolume);
        this._maxSpeed = this.checkSpeed(maxSpeed);
        this._experience = this.checkExperience(experience);
    }
    get maxSpeed() {
        return this._maxSpeed;
    }
    get experience() {
        return this._experience;
    }
    set maxSpeed(maxSpeed) {
        this.maxSpeed = this.checkSpeed(maxSpeed);
    }
    set experience(experience) {
        this.experience = this.checkExperience(experience);
    }
    checkSpeed(maxSpeed) {
        if (maxSpeed >= 200 && maxSpeed <= 500)
            return maxSpeed;
        else
            throw new Error('Maximum speed must be 200 to 500 km/s');
    }
    checkExperience(experience) {
        if (experience <= 100)
            return experience;
        else
            throw new Error(`A race car can't drive more than a 100 times`);
    }
    display() {
        super.display();
        console.log(`Max Speed: ${this.maxSpeed}, Experience: ${this.experience}`);
    }
}
const myRaceCar = new RaceCar('Mazda', 'MX-5', 'Grey', 3000, 325, 9);
myRaceCar.display();
