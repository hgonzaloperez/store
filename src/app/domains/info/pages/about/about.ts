import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { CounterComponents } from "../../../shared/components/counter/counter.components";
import { WaveAdudio} from '../../components/wave-adudio/wave-adudio';

@Component({
  selector: 'app-about',
  imports: [CounterComponents, WaveAdudio],
  templateUrl: './about.html',
  styleUrl: './about.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class About {
  duration = signal(1000);
  message = signal('Hola');

  changeDuration(event: Event) {
    const input = event.target as HTMLInputElement;
    this.duration.set(input.valueAsNumber);
  }

  changeMessage(event: Event) {
    const input = event.target as HTMLInputElement;
    this.message.set(input.value);
  }

  ngOnInit() {
    console.log('ngOnInit');
  }

  
}
