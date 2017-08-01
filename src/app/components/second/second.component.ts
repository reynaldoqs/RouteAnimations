import { Component, HostBinding } from '@angular/core';
import { trigger, query, transition,
        style, animate} from '@angular/animations';
@Component({
  selector: 'app-second',
  template: `
    <header>
    </header>
    <section>
    </section>
  `,
  styles: [ `
    :host{
      display:block;
      background-color:#00796B;
      width:100%;
      height:100%;
      overflow:hidden;
    }
    header{
      width:100%;
      height:50%;
      background-color:#f1f1f1;
    }
   `],
   animations: [
     trigger('secondPageAnimation', [
       transition(':enter', [
        query('header', [
          style({transform: 'translateY(-100%)'})
        ]),
        query('header', [
          animate('300ms ease-out', style('*'))
        ])
       ])
     ])
   ]
})
export class SecondComponent {
 @HostBinding('@secondPageAnimation')
 public secondAnimation = true;
}
