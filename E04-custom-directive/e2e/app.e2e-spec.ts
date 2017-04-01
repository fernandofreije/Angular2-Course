import { E04CustomDirectivePage } from './app.po';

describe('e04-custom-directive App', function() {
  let page: E04CustomDirectivePage;

  beforeEach(() => {
    page = new E04CustomDirectivePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
