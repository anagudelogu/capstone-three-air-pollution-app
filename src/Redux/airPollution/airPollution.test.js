import {
  getAirPollutionFailed,
  getAirPollutionStarted,
  getAirPollutionSucceeded,
} from './airPollution';

describe('Redux pure functions from Air Pollution reducer', () => {
  test('getAirPollutionStarted should return an object with the corresponding type property', () => {
    const started = getAirPollutionStarted();
    const expected = {
      type: 'air_pollution_app/air_pollution/FETCH_DATA_STARTED',
    };

    expect(started).toEqual(expected);
  });
  test('getAirPollutionSucceded should return an object with the corresponding type property', () => {
    const started = getAirPollutionSucceeded();
    const expected = {
      type: 'air_pollution_app/air_pollution/FETCH_DATA_SUCCEEDED',
    };

    expect(started).toEqual(expected);
  });
  test('getAirPollutionFailed should return an object with the corresponding type property', () => {
    const started = getAirPollutionFailed();
    const expected = {
      type: 'air_pollution_app/air_pollution/FETCH_DATA_FAILED',
    };

    expect(started).toEqual(expected);
  });
});
