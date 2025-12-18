import type { Headquarter, Schedule } from './models.ts';
import { NODE_TYPES, parseTime } from './models.ts';

export const organization: Headquarter = {
  type: NODE_TYPES.HQ,
  name: 'BestFood Company',
  children: [
    {
      type: NODE_TYPES.AREA,
      name: 'Deutschland',
      manager: 'Alice',
      children: [
        {
          type: NODE_TYPES.STORE,
          name: 'Hamburg',
          employees: ['Claus', 'Claire'],
        },
        {
          type: NODE_TYPES.AREA,
          name: 'Süd',
          manager: 'Bob',
          children: [
            {
              type: NODE_TYPES.STORE,
              name: 'Karlsruhe',
              employees: ['Daisy', 'Daniel'],
            },
            {
              type: NODE_TYPES.STORE,
              name: 'Stuttgart',
              employees: ['Emil'],
            },
            {
              type: NODE_TYPES.STORE,
              name: 'München',
              employees: ['Fred'],
            },
          ],
        },
      ],
    },
  ],
};

export const schedule: Schedule = {
  Claus: [{ start: parseTime('08:00'), end: parseTime('16:00') }],
  Claire: [{ start: parseTime('10:00'), end: parseTime('14:00') }],
  Daisy: [{ start: parseTime('12:00'), end: parseTime('20:00') }],
  Daniel: [
    { start: parseTime('11:00'), end: parseTime('13:00') },
    { start: parseTime('15:00'), end: parseTime('21:00') },
  ],
  Emil: [{ start: parseTime('13:00'), end: parseTime('23:00') }],
  Fred: [{ start: parseTime('12:00'), end: parseTime('18:00') }],
};
