
describe('Shop CTA button', () => {

    it('should link to the product page', () => {
        return browser
            .url('./')
            .setValue('#search_form_input_homepage', 'WebdriverIO')
            .click('#search_button_homepage')
            .getTitle().then(function (title) {
                console.log('Title is: ' + title);

                // outputs:
                // "Title is: WebdriverIO (Software) at DuckDuckGo"
            })
    })
})
