import { MyTitleCasePipe } from './my-title-case.pipe';

describe('MyTitleCasePipe', () => {
  it('create an instance', () => {
    const pipe = new MyTitleCasePipe();
    expect(pipe).toBeTruthy();
  });
});
