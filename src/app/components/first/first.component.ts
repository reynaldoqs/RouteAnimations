import { Component, HostBinding } from '@angular/core';
import { trigger, query, transition,
        style, animate, animateChild,
        useAnimation, keyframes } from '@angular/animations';

@Component({
  selector: 'app-first',
  template: `
    <header>
      <div class="avatar-container">
        <img src="http://api.adorable.io/avatar/190/{{monster.id}}">
      </div>
    </header>
    <section>
      <app-friends [monster]="monster"></app-friends>
    </section>
  `,
  styles: [`
    :host{
      display:block;
      background-color:#0277BD;
      width:100%;
      height:100%;
      overflow:hidden;
    }
    header{
      width:100%;
      height:35%;
      display:flex;
      align-items:flex-end;
      justify-content:center;
    }
    .avatar-container{
      width:190px;
      height:190px;
      border-radius:50%;
      padding:3px;
      background-color:#f1f1f1;
      position:relative;
      top:30%;
      z-index:999;
    }
    .avatar-container img{
      border-radius:50%;
    }
    section{
      width:100%;
      height:65%;
      background-color: #f1f1f1;
    }

  `],
  animations: [
    trigger('firstPageAnimation', [
      transition(':enter', [

        query('section', [
          style({transform: 'translateY(100%)'})
        ]),
        query('.avatar-container', [
          style({transform: 'scale(0)'})
        ]),

        query('section', [
         animate('200ms ease-out' , style('*'))
        ]),
        query('.avatar-container', [
          animate('400ms ease-in', keyframes([
            style({transform: 'scale(0)', offset: 0 }),
            style({transform: 'scale(1.6)', offset: 0.6 }),
            style({transform: 'scale(0.8)', offset: 0.8 }),
            style({transform: 'scale(1)', offset: 1 })
          ]))
        ]),
        query('@friendsAnimation', animateChild())
      ])
    ])
  ]
})
export class FirstComponent {
  monster = {
    name: 'Audiman',
    id: 'audi',
    friends: [{name: 'Zugar', id: 'sug01'},
    {name: 'Meal', id: 'Me01'},
    {name: 'Aman', id: 'Am01'}]
  };
  @HostBinding('@firstPageAnimation')
  public animateProfile = true;
}
