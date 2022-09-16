import Insturment from './insturment';

class Piano extends Insturment {
	private _cords: number;
	constructor(brand: string, model: string, color: string, cords: number) {
		super(brand, model, color);
		this._cords = this.checkCords(cords);
	}
	get cords(): number {
		return this._cords;
	}
	set cords(cords: number) {
		this.cords = this.checkCords(cords);
	}
	private checkCords(cords: number): number {
		if (cords > 19 && cords < 251) return cords;
		else throw new Error('A piano must have 20 to 150 cords');
	}
	display(): void {
		super.display();
		console.log(`Cords: ${this.cords}`);
	}
	makeSound(): void {
		console.log('Piano sounds');
	}
}

const myPiano = new Piano('Kawai', 'Piano-CA49', 'Black', 88);
myPiano.display();

export default Piano;
