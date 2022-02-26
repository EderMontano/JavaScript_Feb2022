import { Selector } from 'testcafe';

const label = Selector('label');

class Feature{
    constructor(text){
        this.label = label.withText(text);
        this.checkbox = this.label.find('input[type=checkbox]');
    }
}

class Page{
    constructor(){
        this.nameInput = Selector('#developer-name');
        this.checkbox1 = Selector('#remote-testing');
        this.radio_windows = Selector('input[type=radio][value=Windows]');

        this.featuresList = [
            new Feature('Support for testing on remote devices'),
            new Feature('Re-using existing JavaScript code for testing'),
            new Feature('Running tests in background and/or in parallel in multiple browsers'),
            new Feature('Easy embedding into a Continuous integration system'),
            new Feature('Advanced traffic and markup analysis')
        ]

        this.menu = Selector('#preferred-interface');
        this.javascript = Selector('#preferred-interface > option:nth-child(2)')
        this.triedCheckbox = Selector('#tried-test-cafe')
        this.textArea = Selector('#comments')
        //Slide bar
        this.slideBar = Selector('#slider')
        this.slider = {
            handler: Selector('.ui-slider-handle'),
            tick: Selector('.slider-value')
        }
    }
}

export default new Page();
