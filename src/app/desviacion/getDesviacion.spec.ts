import { getDesviacion } from './getDesviacion'
import { getMedia } from '../media/getMedia'

describe('prueba desviacion numerica parte1 ', () => {
  it('La pr', () => {
    const getMediaOperation = getMedia([160,591,114,229,230,270,128,1657,624,1503]);
    const getMediaResult = getMediaOperation;

    const getStandardDeviation = getDesviacion([160,591,114,229,230,270,128,1657,624,1503], getMediaResult);
    expect(getStandardDeviation).toBe(572.03);
  });
});

describe('prueba desviacion', () => {
  it('should return the fact of the numbers', () => {
    const getMediaOperation = getMedia([15.0, 69.9, 6.5, 22.4, 28.4, 65.9, 19.4, 198.7, 38.8, 138.2]);
    const getMediaResult = getMediaOperation;

    const getStandardDeviation = getDesviacion([15.0, 69.9, 6.5, 22.4, 28.4, 65.9, 19.4, 198.7, 38.8, 138.2], getMediaResult);
    expect(getStandardDeviation).toBe(62.26);
  });
});
