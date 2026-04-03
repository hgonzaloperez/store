import { Component, Input, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-counter.components',
  imports: [],
  templateUrl: './counter.components.html',
  styleUrl: './counter.components.css',
})
export class CounterComponents {

  @Input({required: true}) duration = 0;
  @Input({required: true}) message = '';

  constructor() {
    //Antes de rendrizar la pagina
    console.log('constructor');
    console.log('-'.repeat(10)  );
  }

  ngOnChanges(changes:SimpleChanges) {
    //Cada vez que se actualiza un input

    console.log('counter components ngOnChanges');
    console.log('-'.repeat(10)  );
    console.log(changes);
  }
}
