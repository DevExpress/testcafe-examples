import { Selector, t } from 'testcafe';
    
export class Helper {
    constructor () {
        this.queue = Promise.resolve();

        this.developerName = Selector('#developer-name');
        this.submitButton  = Selector('#submit-button');
        this.articleHeader = Selector('#article-header');
    }

    _chain (callback) {
        this.queue = this.queue.then(callback);

        return this;
    }

    then (callback) {
        return callback(this.queue);
    }

    navigateTo (url) { 
        return this._chain(async () => await t.navigateTo(url));
    }

    typeName (name) { 
        return this._chain(async () => await t.typeText(this.developerName, name));
    }

    submit () {
        return this._chain(async () => await t.click(this.submitButton));
    }

    checkName (name) {
        return this._chain(async () => await t.expect(this.articleHeader.textContent).contains(name));
    }
}
