import {
  getCountriesFailed,
  getCountriesStarted,
  getCountriesSucceeded,
} from './countries';

describe('Redux pure functions from Countries reducer', () => {
  test('getCountriesStarted should return an object with the corresponding type property', () => {
    const started = getCountriesStarted();
    const expected = {
      type: 'air_pollution_app/countries/FETCH_DATA_STARTED',
    };

    expect(started).toEqual(expected);
  });
  test('getCountriesSucceded should return an object with the corresponding type property', () => {
    const started = getCountriesSucceeded();
    const expected = {
      type: 'air_pollution_app/countries/FETCH_DATA_SUCCEEDED',
    };

    expect(started).toEqual(expected);
  });
  test('getCountriesFailed should return an object with the corresponding type property', () => {
    const started = getCountriesFailed();
    const expected = {
      type: 'air_pollution_app/countries/FETCH_DATA_FAILED',
    };

    expect(started).toEqual(expected);
  });
});
