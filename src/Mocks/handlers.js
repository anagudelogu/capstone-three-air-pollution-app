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

export default handlers;
