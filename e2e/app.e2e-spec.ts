import { Animation01Page } from './app.po';

describe('animation01 App', () => {
  let page: Animation01Page;

  beforeEach(() => {
    page = new Animation01Page();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
