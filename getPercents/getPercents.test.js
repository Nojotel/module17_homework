import {getPercents} from './getPercents.js';

describe('checking the getPercents function for a percentage of the number', () => {

  it('add 30 and 200 expect 60', () => {
    expect(getPercents(30, 200)).toBe(60);
  });

  it('add -Infinity and Infinity expect 120', () => {
    expect(getPercents(-Infinity, Infinity)).toBe(120);
  });

  it('add 30 and 200 expect 120', () => {
    expect(getPercents(30, 200)).toBe(120);
  });

  it('add -Infinity and Infinity expect -Infinity', () => {
    expect(getPercents(-Infinity, Infinity)).toBe(-Infinity);
  });

  it('add 0 and Infinity expect NaN', () => {
    expect(getPercents(0, Infinity)).toBe(NaN);
  });

});
