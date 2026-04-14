import { Component, Input, signal, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-counter',
  imports: [],
  templateUrl: './counter.components.html',
  styleUrl: './counter.components.css',
})
export class CounterComponents {

  @Input({required: true}) duration = 0;
  @Input({required: true}) message = '';

  counter = signal(0);
  counterRef : number | undefined;

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
    const duration = changes['duration'];
    if(duration && duration.currentValue !== duration.previousValue ){
      this.doSomething(); 
    } 

  }

    ngOnInit() {
    console.log('ngOnInit');
    console.log('-'.repeat(10)  );
    console.log('Duration: ', this.duration);
    console.log('Message: ', this.message);
    this.counterRef = window.setInterval(() => {
      console.log('Run interval');
      this.counter.update( value => value + 1);
    }, 1000);
  } 

  ngAfterViewInit() {
    //Despues de rendrizar sus componentes hijos
    console.log('ngAfterViewInit');
    console.log('-'.repeat(10)  );

  }

  ngOnDestroy() {
    console.log('ngOnDestroy ');
    console.log('-'.repeat(10)  );
    window.clearInterval(this.counterRef);
  }

  doSomething(){
    console.log('Change duration');
    
   

  }
}
