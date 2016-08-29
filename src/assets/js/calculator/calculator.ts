/// <reference path="../../../../typings/index.d.ts" />
import $ = require("jquery");
import { ICalculator } from './calculator.model';
export class Calculator implements ICalculator {
    private _result: number;
    private _input: any;
    constructor() {
        this._result = 0;
        this.addEvent();
    }

    private addEvent(): void {

    }

    add(num: number): void {
    }

    remove(num: number): void {
    }
}
