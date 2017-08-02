import { Component } from '@angular/core';
import { trigger, transition, style, query, animate, group, animateChild } from '@angular/animations';

@Component({
  selector: 'app-root',
  template: `
  <header>
      <h1 class="title">Animated Routes</h1>
      <a routerLink="first" routerLinkActive="active">First route</a>
      <a routerLink="second" routerLinkActive="active">Second route</a>
      <a routerLink="third" routerLinkActive="active">Third route</a>
  </header>
  <section [@routerAnimation]="routerState(routerOutlet)">
      <router-outlet #routerOutlet="outlet"></router-outlet>
  </section>`
,
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
