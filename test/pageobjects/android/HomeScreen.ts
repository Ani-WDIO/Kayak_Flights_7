class HomeScreen
{
    private get skipButton() { return $('//*[contains(@text,"Skip")]'); }

    private get currencyUSD() { return $('//*[contains(@resource-id,"button1")]'); }

    private get moveToFlightScreen() {return $('//*[contains(@text,"Find a flight")]'); }

    private get oneWayFlights() {return $('//*[contains(@text,"One-way")]'); }

    private get destination() {return $('//*[contains(@text,"Enter a city")]'); }

    private get smartText() {return $('//*[contains(@resource-id,"smarty_title")]'); }

    private get datesLayout() {return $('//*[@resource-id="com.kayak.android:id/departureDate"]'); }

/*----------------------------------------------------------------------------------------------------------
--------------------------------------------------------------------------------------------------------- */    

    //tap on Skip Button
    public async tapSkipButton()
    {
        (await this.skipButton).waitForDisplayed();
        (await this.skipButton).click();
    }

    //select USD as currency
    public async selectUSD()
    {
        (await this.currencyUSD).waitForDisplayed();
        (await this.currencyUSD).click();
    }

    //move to Flight Screen
    public async tapFlightButton()
    {
        (await this.moveToFlightScreen).waitForDisplayed();
        (await this.moveToFlightScreen).click();
    }

    //move to One way flight
    public async tapOneWay()
    {
        (await this.oneWayFlights).waitForDisplayed();
        (await this.oneWayFlights).click();
    }

    //tap on destination
    public async enterDestination()
    {
        (await this.destination).waitForDisplayed();
        (await this.destination).click();
        (await this.destination).setValue("Hyderabad");
    }

    //select Smart Suggestion
    public async selectSuggestion()
    {
        (await this.smartText).waitForDisplayed();
        (await this.smartText).click();
    }

    //select tap on date field
    public async tapOnDateField()
    {
        (await this.datesLayout).waitForDisplayed();
        (await this.datesLayout).click();
    }

}
export default new HomeScreen();