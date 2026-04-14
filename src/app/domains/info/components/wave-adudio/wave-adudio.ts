import { Component, input } from '@angular/core';
import WaveSurfer from 'wavesurfer.js';

@Component({
  selector: 'app-wave-adudio',
  templateUrl: './wave-adudio.html',
  styleUrl: './wave-adudio.css',
})
export class WaveAdudio {

  audioUrl = input.required<string>();

  ngAfterViewInit() {
    WaveSurfer.create({
      url: this.audioUrl(),
      container: '#wave',
      waveColor: 'violet',
      progressColor: 'purple'
    });
  }

}
