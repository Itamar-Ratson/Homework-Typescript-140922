import Insturment from './insturment';

class Piano extends Insturment {
    private _cords: number;
    constructor(brand: string, model: string, color: string, cords: number) {
        super(brand, model, color);

        if (cords > 19 && cords < 251) this._cords = cords;
        else throw new Error('A piano must have 20 to 150 cords');
    }
    get cords(): number {
        return this._cords;
    }
    set cords(cords) {
        if (cords > 19 && cords < 251) this.cords = cords;
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

// const myPiano = new Piano('Kawai', 'Piano-CA49', 'Black', 88);
// myPiano.display();

export default Piano;
