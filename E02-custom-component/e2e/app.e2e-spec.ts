import { E02CustomComponentPage } from './app.po';

describe('e02-custom-component App', function() {
  let page: E02CustomComponentPage;

  beforeEach(() => {
    page = new E02CustomComponentPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
