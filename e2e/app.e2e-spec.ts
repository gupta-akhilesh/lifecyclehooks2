import { Lifecyclehooks2Page } from './app.po';

describe('lifecyclehooks2 App', () => {
  let page: Lifecyclehooks2Page;

  beforeEach(() => {
    page = new Lifecyclehooks2Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
