import { ShopappPage } from './app.po';

describe('shopapp App', function() {
  let page: ShopappPage;

  beforeEach(() => {
    page = new ShopappPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
