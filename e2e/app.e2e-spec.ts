import { ToverOfHeroesPage } from './app.po';

describe('tover-of-heroes App', function() {
  let page: ToverOfHeroesPage;

  beforeEach(() => {
    page = new ToverOfHeroesPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
