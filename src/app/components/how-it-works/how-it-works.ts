import { isPlatformBrowser } from '@angular/common';
import {
  Component,
  computed,
  HostListener,
  inject,
  PLATFORM_ID,
  signal,
} from '@angular/core';
import { TimelineModule } from 'primeng/timeline';

type TimelineStep = {
  step: number;
  title: string;
  description: string;
  icon?: string; // optional, in case you want to use icons later
  color?: string; // optional, in case each step needs its own color
};

@Component({
  selector: 'app-how-it-works',
  imports: [TimelineModule],
  templateUrl: './how-it-works.html',
  styles: `
 
  `,
})
export class HowItWorks {

  readonly steps = signal<TimelineStep[]>([
    {
      step: 1,
      title: 'Ideation',
      description: 'Brainstorm and validate your startup idea.',
    },
    {
      step: 2,
      title: 'Development',
      description: 'Build your MVP using modern technologies.',
    },
    {
      step: 3,
      title: 'Launch',
      description: 'Deploy and showcase your product to the world.',
    },
  ]);
}
