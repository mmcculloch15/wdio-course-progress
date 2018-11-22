describe('Shop CTA button', () => {

  it('should link to the product page', () => {
    browser.url('/')
    const title = browser.getTitle()
    expect(title).to.equal('Robot Parts Emporium')
    browser.click('.shop-callout a')
    const productTitle = browser.getTitle()
    expect(productTitle).to.equal('Totally Not Evil Sentient Robot - Robot Parts Emporium')
    const url = browser.getUrl()
    expect(url).to.include('product-page.html')

  })
})