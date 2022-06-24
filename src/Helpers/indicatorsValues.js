const colors = {
  veryGood: '#209c05',
  good: '#ebff0a',
  moderate: '#f2ce02',
  bad: '#ff0a0a',
  veryBad: '#470000',
};

const aqiIndicators = {
  veryGood: 1,
  good: 2,
  moderate: 3,
  bad: 4,
};

const aqiLevel = (aqi) => {
  if (aqi <= aqiIndicators.veryGood) return colors.veryGood;
  if (aqi <= aqiIndicators.good) return colors.good;
  if (aqi <= aqiIndicators.moderate) return colors.moderate;
  if (aqi <= aqiIndicators.bad) return colors.bad;
  return colors.veryBad;
};

export default aqiLevel;
