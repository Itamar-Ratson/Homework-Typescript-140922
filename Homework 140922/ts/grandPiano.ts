import Piano from './piano';

class GrandPiano extends Piano {
    private _length: number;
    constructor(brand: string, model: string, color: string, cords: number, length: number) {
        super(brand, model, color, cords);

        if (length > 0) this._length = length;
        else throw new Error('A piano must have 20 to 150 length');
    }
    get length(): number {
        return this._length;
    }
    set length(length) {
        if (length > 0) this.length = length;
        else throw new Error('A piano must have 20 to 150 length');
    }
    display(): void {
        super.display();
        console.log(`Length: ${this.length}`);
    }
    makeSound(): void {
        console.log('Grand piano sounds');
    }
}

const myGrandPiano = new GrandPiano('Linke', 'GrandPiano-B079B4RNXW', 'Mahogany', 90, 71);
myGrandPiano.display();
myGrandPiano.makeSound();
