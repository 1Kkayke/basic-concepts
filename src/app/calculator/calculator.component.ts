import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-calculator',
  imports: [FormsModule,CommonModule],
  templateUrl: './calculator.component.html',
  styleUrl: './calculator.component.scss'
})
export class CalculatorComponent {
  // Define properties for the calculator
  number1: number = 0;
  number2: number = 0;

  // Define an array of operations
  typeOperation: string = ' ';

  result : number = 0;

  calculate() {
    console.log('Calculating...');
    // Perform the calculation (addition in this case)
    if (this.typeOperation === '+') {
      this.result = this.number1 + this.number2;
    }else if (this.typeOperation === '-') {
      this.result = this.number1 - this.number2;
    }
    else if (this.typeOperation === '*') {
      this.result = this.number1 * this.number2;
    }
    else if (this.typeOperation === '/') {
      this.result = this.number1 / this.number2;
    }
    else if (this.typeOperation === '%') {
      this.result = this.number1 % this.number2;
    }
    console.log('Result:', this.result);
  }

  onOperationChange(event: string){
    console.log('Operation changed:', event);
    this.typeOperation = event;
  }

} 
