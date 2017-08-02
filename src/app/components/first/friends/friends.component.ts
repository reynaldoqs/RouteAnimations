import { Component, HostBinding, Input } from '@angular/core';
import { trigger, query, transition, group,
  style, animate, stagger, keyframes
} from '@angular/animations';
@Component({
  selector: 'app-friends',
  template: `
    <section>
      <h2>{{monster.name}}'s friends</h2>
      <ul class="friends">
        <li class="friend" *ngFor="let friend of monster.friends">
          <img class="friend-icon" src="https://api.adorable.io/avatar/90/{{friend.id}}">
          <span class="friend-name">{{friend.name}}</span>
        </li>
      </ul>
    </section>
  `,
  styles: [`
  :host{
    width:100%;
    height:100%;
    display:flex;
    align-items:center;
    justify-content:center;
  }
  section{
    width:600px;
    max-width:100%;
    height:auto;
    max-height:100%;
    text-align:center;
    padding:0.2rem;
    box-sizing:border-box;
  }
  h2{
    margin:15px 0px;
  }
  .friends{
    list-style: none;
    display: flex;
    justify-content: space-around;
    padding: 2em;
  }
  .friend{
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .friend-icon{
    border-radius:50%;
  }
  .friend-name{
    margin:10px 0;
  }
  `],
  animations: [
    trigger('friendsAnimation', [
      transition(':enter', [
        query('.friend-icon, .friend-name', style({ opacity: 0, transform: 'scale(0.2) translateY(100%)' })),
        group([
        query('.friend-icon, .friend-name', stagger('55ms', [
          animate('300ms 650ms ease-in', keyframes([
            style({opacity: 0, transform: 'scale(0.2) translateY(100%)', offset: 0 }),
            style({opacity: 1, transform: 'scale(0.6) translateY(0%)', offset: 0.6 }),
            style({opacity: 1, transform: 'scale(0.8) translateY(-10%)', offset: 0.8 }),
            style({opacity: 1, transform: 'scale(1) translateY(0%)', offset: 1 })
          ]))
        ]))
      ])

      ])
    ])
  ]
})
export class FriendsComponent {
  @Input('monster')monster;
  @HostBinding('@friendsAnimation')animateProfile = true;
}
