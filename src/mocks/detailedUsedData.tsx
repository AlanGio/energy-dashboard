import { getDaysInMonth } from '../utils/dates';
import { randomIntFromInterval } from '../utils/numbers';

const hours = [
  '00:00',
  '03:00',
  '06:00',
  '09:00',
  '12:00',
  '15:00',
  '18:00',
  '21:00'
];

export const generateDetailedUsedData = (
  month,
  year,
  format = {
    weekday: 'short',
    month: 'short',
    day: 'numeric'
  }
) => {
  const daysMonth = getDaysInMonth(month, year);

  return daysMonth.map((day) => ({
    name: day.toLocaleDateString('en-us', format),
    day: {
      usage: randomIntFromInterval(10, 200),
      demand: randomIntFromInterval(10, 200),
      temperature: randomIntFromInterval(50, 250)
    },
    hours: hours.map((hour) => ({
      name: hour,
      usage: randomIntFromInterval(10, 200)
    }))
  }));
};
