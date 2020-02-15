import { TextFormatingPipe } from './text-formating.pipe';

describe('TextFormatingPipe', () => {
  it('create an instance', () => {
    const pipe = new TextFormatingPipe();
    expect(pipe).toBeTruthy();
  });
});
