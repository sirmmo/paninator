import { PaninatorPage } from './app.po';

describe('paninator App', function() {
  let page: PaninatorPage;

  beforeEach(() => {
    page = new PaninatorPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
