import { Component, ElementRef, HostListener, ViewChild } from '@angular/core';
import { trigger,
  state,
  style,
  animate,
  transition,
} from '@angular/animations';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrl: './main-page.component.scss',
  animations: [
    trigger('underlay', [
      state(
        'underlay-up',
        style({
          transform: 'translateY(0)',
        })
      ),
      state(
        'underlay-down',
        style({
          transform: 'translateY(120%)',
        }),
      ),
      transition('* => *', [animate('1s ease-out')]),
    ]),
    trigger('lightning-bulb', [
      state(
        'small',
        style({
          transform: 'scale(1)',
        }),
      ),
      state(
        'large',
        style({
          transform: 'scale(10)',
        }),
      ),
      transition('large => small', [animate('1s ease-out')]),
    ]),
    trigger('lightning-position', [
      state(
        'left',
        style({
          transform: 'translateX(-20px)',
        })
      ),
      state(
        'right',
        style({
          transform: 'translateX(20px)'
        }),
      ),
      transition('* => *', [animate('0.1s')]),
    ]),
  ],
})
export class MainPageComponent {
  @ViewChild('yoda') yoda!: ElementRef;

  @HostListener('mousemove', ['$event'])
  onMouseMove(event: MouseEvent) {

    if(Math.abs(event.clientX - this.currentMouseX) > 100 || Math.abs(event.clientY - this.currentMouseY) > 100) {
      this.currentMouseX = event.clientX;
      this.currentMouseY = event.clientY;
      this.lightningPosition = this.lightningPosition === 'left' ? 'right' : 'left';
    }
  }

  public underlayState = 'underlay-up';
  public lightningState = 'large';
  public lightningPosition = 'left';
   currentMouseX = 0;
  private currentMouseY = 0;

  ngOnInit() {
    setTimeout(() => {
      this.underlayState = 'underlay-down';
    }, 2000);
    setTimeout(() => {
      this.lightningState = 'small';
    }, 1000)
  }
}
