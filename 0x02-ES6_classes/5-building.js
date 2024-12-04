export default class Building {
  constructor(sqft) {
    this.sqft = sqft;
    // Make sure that this is a class that extends Building not the Building class itself
    if (this.constructor !== Building) {
      if (typeof this.evacuationWarningMessage !== 'function') {
        throw new Error('Class extending Building must override evacuationWarningMessage');
      }
    }
  }

  get sqft() {
    return this._sqft;
  }
}
