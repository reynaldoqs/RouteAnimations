import { browser, by, element } from 'protractor';

export class AnimationsPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('audi-root h1')).getText();
  }
}
