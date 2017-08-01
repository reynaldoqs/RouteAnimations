import { Component, HostBinding } from '@angular/core';
import { trigger, transition, query, animate, style } from '@angular/animations';

@Component({
  selector: 'app-third',
  template: `
    <header>
    </header>
    <section>
    </section>
  `,
  styles: [`
    :host{
      display:block;
      background-color:#D81B60;
      width:100%;
      height:100%;
      overflow:hidden;
    }
    header{
      width:40%;
      height:100%;
      background-color:#f1f1f1;
    }
  `],
     animations: [
     trigger('thirdPageAnimation', [
       transition(':enter', [
        query('header', [
          style({transform: 'translateX(-100%)'})
        ]),
        query('header', [
          animate('200ms 100ms ease-out', style('*'))
        ])
       ])
     ])
   ]
})
export class ThirdComponent {
 @HostBinding('@thirdPageAnimation')
 public secondAnimation = true;
}
