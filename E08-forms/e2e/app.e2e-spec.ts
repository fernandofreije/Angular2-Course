import { E08FormsPage } from './app.po';

describe('e08-forms App', function() {
  let page: E08FormsPage;

  beforeEach(() => {
    page = new E08FormsPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
