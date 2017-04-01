import { E07UserHttpServicePage } from './app.po';

describe('e07-user-http-service App', function() {
  let page: E07UserHttpServicePage;

  beforeEach(() => {
    page = new E07UserHttpServicePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
