import { QuimangeouPage } from './app.po';

describe('quimangeou App', () => {
  let page: QuimangeouPage;

  beforeEach(() => {
    page = new QuimangeouPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
