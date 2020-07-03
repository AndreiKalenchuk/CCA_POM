import Page from "./Page";
import { expectedGen } from "../data/dataExpected";

class HomePage extends Page {
    open() {
        super.open();
        expect(browser)
            .toHaveTitle(expectedGen.title);
    }

// Selectors
    get getHeader() {
        return $('.header')
    }

    get lowerInputField() {
        return $('[name="lower"]');
    }

    get lowerLimitField() {
        return $('[name="negative"]');
    }

    get upperLimitField() {
        return $('[name="positive"]');
    }

    get upperInputField() {
        return $('[name=\'upper\']');
    }

    get blackBtn() {
        return $$('.btn-black');
    }

    get totalResult() {
        return $('h3.total-count');
    }

    get addCounterBtn() {
        return $('.btn-success');
    }

    get countersArray() {
        return $$('.counter-wrapper');
    }

// methods
    getCounterTotal() {
        const total = this.totalResult.getText()
            .split(' ');
        return Number(total[1]);
    }

    getCounterLength() {
        return this.countersArray.length;
    }

    get blackBtnLength() {
        return this.blackBtn.length;
    }

    clickOnBlackBtn(index) {
        const btn = this.blackBtn[index];
        btn.waitForClickable();
        return btn.click();
    }

}
export default new HomePage();