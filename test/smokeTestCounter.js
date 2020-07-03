import HomePage from "../Pages/HomePage";
import {expectedGen} from "../data/dataExpected";

describe('CCA', () => {
    it('CCA open Page, verify title', () => {
        HomePage.open();
        expect(HomePage.getHeader).toHaveText(expectedGen.header,
            {message: 'Wrong Title'});
    });

    it('verify initial page state', () => {
        expect(HomePage.getCounterTotal()).toEqual(expectedGen.totalDefolt);
        expect(HomePage.getCounterLength()).toBe(expectedGen.counterDefault)
    });

    it('set LLF --> 2 set ULF --> 8 verify counter total', () => {
        HomePage.lowerLimitField.click();
        HomePage.lowerInputField.setValue(expectedGen.LLFinput);
        HomePage.upperLimitField.click();
        HomePage.upperInputField.setValue(expectedGen.ULFinput);

        HomePage.clickOnBlackBtn(0);
        HomePage.clickOnBlackBtn(HomePage.blackBtnLength - 1);
        expect(HomePage.getCounterTotal()).toBe(expectedGen.totalRes);

        HomePage.addCounterBtn.click();

        expect(HomePage.getCounterLength()).toBe(expectedGen.totalCounters)
        expect(HomePage.getCounterTotal()).toBe(expectedGen.totalResTest)
    });
});
