const assert = require('chai').assert

describe('Shop CTA button', () => {

  it('should link to the product page', () => {
    browser.url('/')
    const title = browser.getTitle()
    assert.equal(title, 'Robot Parts Emporium')
    browser.click('.shop-callout a')
    const productTitle = browser.getTitle()
    assert.equal(productTitle, 'Totally Not Evil Sentient Robot - Robot Parts Emporium')

    const url = browser.getUrl()
    assert.include(url, 'product-page.html', 'URL Mismatch')

  })
})