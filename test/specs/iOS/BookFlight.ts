import HomeScreen from "../../pageobjects/android/HomeScreen.ts";
import CalendarScreen from "../../pageobjects/android/CalendarScreen.ts"

describe('Book a flight from Chennai to Hyderabad',async function(){

    it('single block',async ()=>{

        await HomeScreen.tapSkipButton();

        await HomeScreen.tapSkipButton();
         
        await HomeScreen.selectUSD();

        await HomeScreen.tapFlightButton();

        await HomeScreen.tapOneWay();

        await HomeScreen.enterDestination();

        await HomeScreen.selectSuggestion();

        await HomeScreen.tapOnDateField();

         await CalendarScreen.scrollSlightlyDown();
        // browser.pause(70000);

        // await CalendarScreen.select3rdOct();
        // browser.pause(70000);

        // await CalendarScreen.selectDate();  
    })

})