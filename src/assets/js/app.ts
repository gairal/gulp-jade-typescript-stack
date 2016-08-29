/// <reference path="../../../typings/index.d.ts" />
import $ = require("jquery");
import { Calculator } from './calculator/calculator';

export class App extends Calculator {
    constructor() {
        super();
    }
}

new App();
