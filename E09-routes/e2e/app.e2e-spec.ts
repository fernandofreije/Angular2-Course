import { E09RoutesPage } from './app.po';

describe('e09-routes App', function() {
  let page: E09RoutesPage;

  beforeEach(() => {
    page = new E09RoutesPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
