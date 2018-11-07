describe('Shop CTA button', () => {

  it('should link to the product page', () => {
    browser.url('./')
    const title = browser.getTitle()
    console.log('Title is: ' + title)
    browser.click('.shop-callout a')
    const productTitle = browser.getTitle()
    console.log('Title is: ' + productTitle)
    const url = browser.getUrl()
    console.log('url is: ' + url)
  })
})