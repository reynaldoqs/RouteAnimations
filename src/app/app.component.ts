import { Component } from '@angular/core';
import { trigger, transition, style, query, animate, group, animateChild } from '@angular/animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [
    trigger('routerAnimation', [
    transition('* => *', [
      query(':enter, :leave', style({position: 'fixed', width: '100%', height: '100vh', maxHeight: '100%',
                                    transformStyle: 'preserve-3d', backfaceVisibility: 'hidden'}), {optional: true}),
        group([
          query(':leave', [
            animate('.6s ease-in-out', style({transform: 'rotateY(-180deg) translateY(20%)'})),
          ], {optional: true}),

          query(':enter', [
            style({transform: 'rotateY(180deg)  translateY(20%)'}),
            animate('.6s ease-in-out', style('*')),
          ], {optional: true})
        ]),
        query('@firstPageAnimation', animateChild(), {optional: true}),
        query('@secondPageAnimation', animateChild(), {optional: true}),
        query('@thirdPageAnimation', animateChild(), {optional: true})
      ])
    ])
  ]
})
export class AppComponent {
  routerState(outlet: any) {
    return outlet.activatedRouteData.state;

  }
}
