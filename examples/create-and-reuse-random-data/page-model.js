import { Selector, t } from 'testcafe';

class Page {
    constructor () {
        this.startURL        = 'https://devexpress.github.io/testcafe/example/';
        this.nameInput       = Selector('#developer-name');
        this.submitButton    = Selector('#submit-button');
        this.header          = Selector('#article-header');
        this.onceGeneratedId = this._getRandomId();
    }

    _getRandomId () {
        return Math.floor(Math.random() * 1000);
    }

    _getBrowserAndPlatformPostfix (browser) {
        return `${browser.name}_${browser.os.name}`.replace(/\s/g, '_');
    }

    getNewRandomUser (browser) {
        return `new_${this._getRandomId()}_${this._getBrowserAndPlatformPostfix(browser)}`;
    }

    get onceGeneratedUser () {
        return `onceGenerated_${this.onceGeneratedId}`;
    }

    async submitUser (username) {
        await t
            .typeText(this.nameInput, username)
            .click(this.submitButton);
    }
}

export default new Page();
