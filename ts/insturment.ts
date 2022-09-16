class Insturment {
	private _brand: string;
	private _model: string;
	private _color: string;
	constructor(brand: string, model: string, color: string) {
		this._brand = brand;
		this._model = model;
		this._color = color;
	}
	get brand(): string {
		return this._brand;
	}
	get model(): string {
		return this._model;
	}
	get color(): string {
		return this._color;
	}
	set brand(brand: string) {
		this.brand = brand;
	}
	set model(model: string) {
		this.model = model;
	}
	set color(color: string) {
		this.color = color;
	}
	display(): void {
		console.log(`Brand: ${this.brand}, Model: ${this.model}, Color: ${this.color}`);
	}
	makeSound(): void {
		console.log('Insturment sounds');
	}
}

// const myInsturment = new Insturment('brand', 'model', 'color');
// myInsturment.display();

export default Insturment;
