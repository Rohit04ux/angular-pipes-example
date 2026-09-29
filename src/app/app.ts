import { CurrencyPipe, DatePipe, DecimalPipe, PercentPipe, UpperCasePipe } from '@angular/common';
import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ReversePipe } from './reverse.pipe';

@Component({
  selector: 'app-root',
  imports: [UpperCasePipe,DatePipe,CurrencyPipe,PercentPipe,DecimalPipe,ReversePipe],
  standalone:true,
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  value:string = 'angular'
  today:Date = new Date();
  amount:number=1500;
  marks:number=0.85;

  customValue:string='angular';
}
