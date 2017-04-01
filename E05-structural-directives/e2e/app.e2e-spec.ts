import { E05StructuralDirectivesPage } from './app.po';

describe('e05-structural-directives App', function() {
  let page: E05StructuralDirectivesPage;

  beforeEach(() => {
    page = new E05StructuralDirectivesPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
