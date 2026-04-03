import { Component, Input, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-counter',
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

    ngOnInit() {
    console.log('ngOnInit');
    console.log('-'.repeat(10)  );
    console.log('Duration: ', this.duration);
    console.log('Message: ', this.message);
  } 

  ngAfterViewInit() {
    console.log('ngAfterViewInit');
    console.log('-'.repeat(10)  );

  }

  ngOnDestroy() {
    console.log('ngOnDestroy ');
    console.log('-'.repeat(10)  );
  }
}
