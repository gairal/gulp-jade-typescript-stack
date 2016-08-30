/// <reference path="../../typings/index.d.ts" />
import $ = require("jquery");
import { Calculator } from './calculator/calculator';

export class App {
  private _$input: any;
  private _calculator: Calculator;
  constructor() {
    this._calculator = new Calculator();
    this._$input = $('#res');
    this.addEvent(this);
    this.render();
  }

  get calculator(): Calculator {
    return this._calculator;
  }

  private render(): void {
    this._$input.val(this._calculator.currNum);
  }

  private addEvent(app: App): void {
    let $buttons:any = $(':button');

    $.each($buttons, function(i: number, v: any){
      let elt: any = $(v);
      let val: string = elt.attr('data-calculator');
      if(val) {
        switch(val){
          case '0':
          case '1':
          case '2':
          case '3':
          case '4':
          case '5':
          case '6':
          case '7':
          case '8':
          case '9':
            elt.click({app: app}, function(ev: any) {
              ev.data.app.calculator.stack(+val);
              ev.data.app.render();
            });
            break;
          case '+':
            elt.click({app: app}, function(ev: any) {
                ev.data.app.calculator.add();
                ev.data.app.render();
            });
            break;
          case '-':
            elt.click({app: app}, function(ev: any) {
                ev.data.app.calculator.remove();
                ev.data.app.render();
            });
            break;
          case '/':
            elt.click({app: app}, function(ev: any) {
                ev.data.app.calculator.divide();
                ev.data.app.render();
            });
            break;
          case 'x':
            elt.click({app: app}, function(ev: any) {
                ev.data.app.calculator.multiply();
                ev.data.app.render();
            });
            break;
          case 'AC':
            elt.click({app: app}, function(ev: any) {
                ev.data.app.calculator.reset();
                ev.data.app.render();
            });
            break;
          case '=':
            elt.click({app: app}, function(ev: any) {
                ev.data.app.calculator.total();
                ev.data.app.render();
            });
            break;
          default:
              console.log('no actions');
        }
      }
    });
  }
}

let app = new App();
