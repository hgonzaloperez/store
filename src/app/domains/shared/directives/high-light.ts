import { Directive, inject, ElementRef} from '@angular/core';

@Directive({
  selector: '[HighLight]',
})
export class HighLight {

  element = inject(ElementRef);


  constructor() { }

  ngOnInit() {
    this.element.nativeElement.style.backgroundColor = 'red';
  }
}
