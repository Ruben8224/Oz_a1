import { getMedia } from "./getMedia";

describe('prueba de media 1', () => {
  it('should return the fact of the numbers', () => {
    const result = getMedia([160,591,114,229,230,270,128,1657,624,1503]);
    expect(result).toBe(550.6);
  });
});

describe('prueba de media 2', () => {
  it('should return the fact of the numbers', () => {
    const result = getMedia([15.0, 69.9, 6.5, 22.4, 28.4, 65.9, 19.4, 198.7, 38.8, 138.2]);
    expect(result).toBe(60.32);
  });
});
