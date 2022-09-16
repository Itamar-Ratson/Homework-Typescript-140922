import Car from './car';

class RaceCar extends Car {
	private _maxSpeed: number;
	private _experience: number;
	constructor(brand: string, model: string, color: string, engineVolume: number, maxSpeed: number, experience: number) {
		super(brand, model, color, engineVolume);
		this._maxSpeed = this.checkSpeed(maxSpeed);
		this._experience = this.checkExperience(experience);
	}
	get maxSpeed(): number {
		return this._maxSpeed;
	}
	get experience(): number {
		return this._experience;
	}
	set maxSpeed(maxSpeed) {
		this.maxSpeed = this.checkSpeed(maxSpeed);
	}
	set experience(experience) {
		this.experience = this.checkExperience(experience);
	}
	private checkSpeed(maxSpeed: number): number {
		if (maxSpeed >= 200 && maxSpeed <= 500) return maxSpeed;
		else throw new Error('Maximum speed must be 200 to 500 km/s');
	}
	private checkExperience(experience: number): number {
		if (experience <= 100) return experience;
		else throw new Error(`A race car can't drive more than a 100 times`);
	}

	display(): void {
		super.display();
		console.log(`Max Speed: ${this.maxSpeed}, Experience: ${this.experience}`);
	}
}
const myRaceCar = new RaceCar('Mazda', 'MX-5', 'Grey', 3000, 325, 9);
myRaceCar.display();
