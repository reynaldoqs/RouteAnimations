import { Component } from '@angular/core';
import { useAnimation, trigger, transition, style, animate, query, stagger, animateChild } from '@angular/animations';
import { fadeAnimation } from "./animations";

@Component({
  selector: 'audi-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [

    trigger('someCoolAnimation', [
      transition('* => fadeIn', [
        useAnimation(fadeAnimation, {params:{
          time:'2s',
          start:0,
          end:1
        }})
      ]),
      transition('* => fadeOut', [
        useAnimation(fadeAnimation, {params:{
          time:'2s',
          start:1,
          end:0
        }})       
      ])
    ]),

   trigger('queryAnimation', [
     transition('* => goAnimate', [
       // hide the inner elements
       query('*', style({ opacity: 0 })),

       query('h1', [
        animate(2000, style({ opacity: 1 }))
      ]),
      query('.content', [
        animate(1000, style({ opacity:1,color:'#ff4544' }))
      ]),
      query('*', [
        animate(5000, style('*'))
      ])

     ])
   ]),

   trigger('listAnimation',[
     transition('* => *', [

       query(':leave', [
         stagger(1100, [
           animate('0.5s', style({opacity: 0}))
         ])
       ],{ optional: true }),

       query(':enter', [
         style({transform: 'translateX(200px)',opacity: 0}),
         stagger(1100, [
           animate('1200ms cubic-bezier(0.35, 0, 0.25, 1)', style({opacity: 1}))//style('*') para resetear los stilos
         ])
       ],{ optional: true })

     ])
   ]),

    trigger('parentAnimation', [
      transition('false => true', [
        query('header', [
          style({ opacity: 0 }),
          animate(1500, style({ opacity: 1 }))
        ]),
        query('@childAnimation', stagger(100, [
          animateChild()
        ]))
      ])
    ]),

    trigger('childAnimation', [
      transition('false => true', [
        style({ opacity: 0 }),
        animate(500, style({ opacity: 1 }))
      ])
    ])

  ]
})
export class AppComponent {
  bindingVar = 'fadeIn';
  title = 'audi';
  items = [];

  chila = 'false';
  toggleChila(){
    this.chila = this.chila == 'false' ? 'true':'false';
      console.log(this.chila);
  }
  toggle(){
    console.log(this.bindingVar);
    this.bindingVar = this.bindingVar == 'fadeOut' ? 'fadeIn':'fadeOut';
  }
  exp = '';
 
  goAnimate() {
    console.log('we are fibe')
    this.exp = 'goAnimate';
  }
  showItems(){
    this.items =  ['audi','amanda','reynaldo'];
  }
  hideItems(){
    this.items = [];
  }
  toggleItems() {
    this.items.length ? this.hideItems() : this.showItems();
  }
}
