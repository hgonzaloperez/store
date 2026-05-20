import { Component, ElementRef, input, ViewChild } from '@angular/core';
import WaveSurfer from 'wavesurfer.js';

@Component({
  selector: 'app-wave-adudio',
  standalone: true,
  templateUrl: './wave-adudio.html',
  styleUrl: './wave-adudio.css',
})
export class WaveAdudio {

audioUrl = input.required<string>();

@ViewChild('wave') container! : ElementRef;
private waveSurfer!: WaveSurfer;

  ngAfterViewInit() {
    WaveSurfer.create({
      url: this.audioUrl(),
      container: this.container.nativeElement ,
      waveColor: 'violet',
      progressColor: 'purple'
    });
  }

  playPause() {
    this.waveSurfer.playPause();

  }
}
