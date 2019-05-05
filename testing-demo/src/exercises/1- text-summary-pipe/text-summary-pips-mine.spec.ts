import { TextSummaryPipe } from "./text-summary.pipe";

describe('text summary pipe tests', () => {

  let pipe: TextSummaryPipe;

  beforeEach(() => {
    pipe = new TextSummaryPipe();
  });

  it('should return empty string if null input', () => {
    expect(pipe.transform(null)).toBe('');
  });

  it('should return empty string if undefined input', () => {
    expect(pipe.transform(undefined)).toBe('');
  })

  it('should truncate a string to 10 chars if no args passed (default case) + 3 trailing dots', () => {
    let myString = 'this is a test';
    expect(pipe.transform(myString)).toEqual(myString.substr(0, 10) + '...');
  });

  it('should truncate a string to 5 chars when args 5 passed + 3 trailing dots', () => {
    let myString = 'this is a test';
    let args = 5;
    expect(pipe.transform(myString, args)).toEqual(myString.substr(0, args) + '...');
  })
});