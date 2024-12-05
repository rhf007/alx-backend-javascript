import Building from './5-building';

export default class SkyHighBuilding extends Building {
  constructor(sqft, floors) {
    super(sqft);
    this.floors = floors;
  }

  get sqft() {
    return this._sqft;
  }

  set sqft(value) {
    if (typeof value !== 'number') {
      throw new Error('SQFT must be a number');
    }

    this._sqft = value;
  }

  get floors() {
    return this._floors;
  }

  set floors(value) {
    if (typeof floors !== 'number') {
      throw new Error('Floors must be a number');
    }

    this._floors = value;
  }

  evacuationWarningMessage() {
    return `Evacuate slowly the ${this.floors} floors`;
  }
}
