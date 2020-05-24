import { FlightTimeToMinutesParserPipe } from './flight-time-to-minutes-parser.pipe';

describe('FlightTimeToMinutesParserPipe', () => {
  it('create an instance', () => {
    const pipe = new FlightTimeToMinutesParserPipe();
    expect(pipe).toBeTruthy();
  });
});
