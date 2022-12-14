import Insturment from './insturment';

class Guitar extends Insturment {
	private _strings: number;
	constructor(brand: string, model: string, color: string, strings: number) {
		super(brand, model, color);
		this._strings = this.checkStrings(strings);
	}
	get strings(): number {
		return this._strings;
	}
	set strings(strings: number) {
		this._strings = this.checkStrings(strings);
	}
	private checkStrings(strings: number): number {
		if (strings > 3 && strings < 9) return strings;
		else throw new Error('A guitar must have 4 to 8 strings');
	}
	display(): void {
		super.display();
		console.log(`Strings: ${this.strings}`);
	}
	makeSound(): void {
		console.log('Guitar sound');
	}
}

const myGuitar = new Guitar('Schecter', 'Guitar-3Pc', '	Gloss Black', 6);
myGuitar.display();
