import Insturment from './insturment';

class Drum extends Insturment {
	private _diameter: number;
	constructor(brand: string, model: string, color: string, diameter: number) {
		super(brand, model, color);
		this._diameter = this.checkDiameter(diameter);
	}
	get diameter(): number {
		return this._diameter;
	}
	set diameter(diameter: number) {
		this._diameter = this.checkDiameter(diameter);
	}
	private checkDiameter(diameter: number): number {
		if (diameter > 0) return diameter;
		else throw new Error('A drum must have a positive diameter');
	}
	display(): void {
		super.display();
		console.log(`Diameter: ${this.diameter}`);
	}
	makeSound(): void {
		console.log('Badum tss');
	}
}

const myDrum = new Drum('Mapex', 'Drum-BPDLV728XBPW', 'Maple', 22);
myDrum.display();
