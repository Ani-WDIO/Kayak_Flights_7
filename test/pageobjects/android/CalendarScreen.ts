class CalendarScreen
{
    private get flightDate() { return $('(//*[contains(@content-desc,"3 OCTOBER")])[1]'); }

    private get confirmDate() { return $('//*[contains(@text,"Apply")]'); }


 /*----------------------------------------------------------------------------------------------------------
--------------------------------------------------------------------------------------------------------- */ 

public async scrollSlightlyDown()
{
    browser.touchAction([
        { action: 'press', x: 500, y: 1000 },
        { action: 'moveTo', x: 500, y: 500 },
        'release'
      ]);}

public async scrollSlightlyUp()
{
    await browser.scroll(0,-1000);
}

public async scrollHalfScreenDown()
{
    await driver.scroll(0,driver.getWindowRect.length/2);
}

public async scrollHalfScreenUp()
{
    await driver.scroll(0,-driver.getWindowRect.length/2);
}

public async select3rdOct()
{
    (await this.flightDate).waitForDisplayed();
    (await this.flightDate).click();
}

public async selectDate()
{
    (await this.confirmDate).waitForDisplayed();
    (await this.confirmDate).click();
}

}
export default new CalendarScreen();