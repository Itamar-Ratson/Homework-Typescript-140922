class Car {
	private _brand: string;
	private _model: string;
	private _color: string;
	private _engineVolume: number;
	constructor(brand: string, model: string, color: string, engineVolume: number) {
		this._brand = brand;
		this._model = model;
		this._color = color;
		this._engineVolume = this.checkEngine(engineVolume);
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
	get engineVolume(): number {
		return this._engineVolume;
	}
	set brand(manufactorer: string) {
		this._brand = manufactorer;
	}
	set model(model: string) {
		this._model = model;
	}
	set color(color: string) {
		this._color = color;
	}
	set engineVolume(engineVolume: number) {
		this._engineVolume = this.checkEngine(engineVolume);
	}
	private checkEngine(engineVolume: number): number {
		if (engineVolume < 4000) return engineVolume;
		else throw new Error('Engine Volume must not exceed 4000 cc');
	}
	display() {
		console.log(`Brand: ${this.brand}, Model: ${this.model}, Color: ${this.color}, Engine Volume: ${this.engineVolume}`);
	}
}

// const myCar = new Car('brand', 'model', 'color', 0);
// myCar.display();

export default Car;
