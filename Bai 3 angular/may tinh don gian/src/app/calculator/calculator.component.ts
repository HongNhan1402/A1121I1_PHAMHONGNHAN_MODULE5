import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent implements OnInit {
  firstNumber: number;
  secondNumber: number;
  result: number ;
  constructor() {
  }

  ngOnInit(): void {
  }

  calculate(s: string) {
    this.firstNumber = Number((document.getElementById('num1') as HTMLInputElement).value);
    this.secondNumber = Number((document.getElementById('num2') as HTMLInputElement).value);
    switch (s) {
      case '+':
        this.result = this.firstNumber + this.secondNumber;
    }
    // this.firstNumber = (<HTMLInputElement>document.getElementById('num1')).value
    // this.secondNumber = (<HTMLInputElement>document.getElementById('num1')).value
    // console.log(this.firstNumber)
    // switch (s) {
    //   case '+':
    //     this.result = (Number(this.firstNumber) + Number(this.secondNumber)).toString();
    //     console.log(this.result)
    //     break;
    //   case '-':
    //     this.result = (Number(firstNumber) - Number(secondNumber)).toString();
    //     break;
    //   case '*':
    //     this.result = (Number(firstNumber) * Number(secondNumber)).toString();
    //     break;
    //   case '/':
    //     if (secondNumber != 0) {
    //       this.result = (Number(firstNumber) / Number(secondNumber)).toString();
    //     } else {
    //       this.result = 'Can not divide by zero';
    //     }
    //     break;
    // }
  }
}
