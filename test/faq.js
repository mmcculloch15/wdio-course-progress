describe("Homepage FAQ Accordion", () => {

  beforeEach(() => {
    browser.url("/")
  })

  it("should show first section on page load", () => {
    const firstHeight = browser.getCssProperty(".accordion .accordion-item:first-child .accordion-content", "height")
    expect(firstHeight.parsed.value).to.be.greaterThan(0)
  })

  it("should not show other content", () => {
    const secondDisplay = browser.getCssProperty(".accordion .accordion-item:nth-of-type(2) .accordion-content", "display")
    expect(secondDisplay.value).to.equal("none")
  })
})