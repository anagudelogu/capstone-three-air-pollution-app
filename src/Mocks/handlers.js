import { rest } from 'msw';

const handlers = [
  rest.get(/air_pollution/, (req, res, ctx) => res(
    ctx.status(200),
    ctx.json({
      coord: {
        lon: 50,
        lat: 50,
      },
      list: [
        {
          main: {
            aqi: 1,
          },
          components: {
            co: 175.24,
            no: 0.01,
            no2: 0.11,
            o3: 79.39,
            so2: 0.37,
            pm2_5: 5.32,
            pm10: 7.79,
            nh3: 0.59,
          },
          dt: 1655812800,
        },
      ],
    }),
  )),
];

export const countriesTestHandlers = [
  rest.get(/restcountries/i, (req, res, ctx) => res(
    ctx.status(200),
    ctx.json([
      {
        flags: {
          svg: 'https://flagcdn.com/kr.svg',
        },
        name: {
          common: 'South Korea',
        },
        latlng: [37.0, 127.5],
        area: 100210.0,
      },
      {
        flags: {
          svg: 'https://flagcdn.com/mo.svg',
        },
        name: {
          common: 'Macau',
        },
        latlng: [22.16666666, 113.55],
        area: 30.0,
      },
    ]),
  )),
];

export default handlers;
