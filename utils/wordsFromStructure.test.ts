const wordsFromStructure = require('./wordsFromStructure');

describe('wordsFromStructure', () => {
  it('should return correct words for structure ab', () => {
    const structure = 'ab';
    const expectedWords = ['1d', '1a', '2d', '3d', '4d', '4a', '5d', '6a', '7a', '8a'];
    expect(wordsFromStructure(structure)).toEqual(expectedWords);
  });

  it('should return correct words for structure aeuy', () => {
    const structure = 'aeuy';
    const expectedWords = ['1d', '1a', '2d', '3d', '4d', '4a', '5d', '6a', '7a', '8a'];
    expect(wordsFromStructure(structure)).toEqual(expectedWords);
  });

  it('should return correct words for structure atxy', () => {
    const structure = 'atxy';
    const expectedWords = ['1d', '1a', '2d', '3d', '4d', '5d', '5a', '6a', '7a', '8a'];
    expect(wordsFromStructure(structure)).toEqual(expectedWords);
  });

  it('should return correct words for structure u', () => {
    const structure = 'u';
    const expectedWords = ['1d', '1a', '2d', '3d', '4d', '5d', '6a', '7a', '8a', '9a'];
    expect(wordsFromStructure(structure)).toEqual(expectedWords);
  });

  it('should return correct words for structure ey', () => {
    const structure = 'ey';
    const expectedWords = ['1d', '1a', '2d', '3d', '4d', '5a', '6d', '7a', '8a', '9a'];
    expect(wordsFromStructure(structure)).toEqual(expectedWords);
  });

  it('should return correct words for empty structure', () => {
    const structure = '';
    const expectedWords = ['1d', '1a', '2d', '3d', '4d', '5d', '6a', '7a', '8a', '9a'];
    expect(wordsFromStructure(structure)).toEqual(expectedWords);
  });

});

// structures seen: afty puv ejpu, aeuy, atxy, axy, u, ey, uv, aty, ab,