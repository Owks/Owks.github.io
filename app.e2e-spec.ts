import { NoGameResell } from './app.po';

describe('NoGameResell', () => {
  let page: NoGameResell;

  beforeEach(() => {
    page = new NoGameResell();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
