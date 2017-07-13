import { SolarbankPage } from './app.po';

describe('solarbank App', () => {
  let page: SolarbankPage;

  beforeEach(() => {
    page = new SolarbankPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
