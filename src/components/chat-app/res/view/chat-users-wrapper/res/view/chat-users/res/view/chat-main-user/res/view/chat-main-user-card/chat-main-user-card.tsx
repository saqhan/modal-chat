import {Component, ComponentInterface, h, Prop,} from '@stencil/core';

@Component({
  tag: 'chat-main-user-card',
  styleUrl: 'chat-main-user-card.css',
  shadow: false,
})
export class ChatMainUserCard implements ComponentInterface {

  @Prop() main:any;

  render() {
    return (
      <div class="user-wrapper-main">
        <div class="left">
          <div  class="img-user" style={{ backgroundImage: `url( ${this.main.img} )` }}></div>
        </div>
        <div class="right-main">
          <div class="user-data">
            <div class="user-name">{this.main.name}</div>
            <div class="message-date"> {this.main.date} </div>
          </div>
          <div class="user-mess">
            {this.main.message}
            <span class="new-mess">2</span>
          </div>
        </div>
      </div>
    );
  }

}
