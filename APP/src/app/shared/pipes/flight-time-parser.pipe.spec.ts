import { FlightTimeParser } from './flight-time-parser.pipe';

describe('FlightTimeParser', () => {
  it('create an instance', () => {
    const pipe = new FlightTimeParser();
    expect(pipe).toBeTruthy();
  });
});
