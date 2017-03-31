import { E01HelloWorldPage } from './app.po';

describe('e01-hello-world App', function() {
  let page: E01HelloWorldPage;

  beforeEach(() => {
    page = new E01HelloWorldPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
