import {Component, ComponentInterface, h, Prop} from '@stencil/core';

@Component({
  tag: 'chat-users-wrapper',
  styleUrl: 'chat-users-wrapper.css',
  shadow: false,
})
export class ChatUsersWrapper implements ComponentInterface {


  @Prop() messages:any;
  @Prop() mainUser:any;

  render() {
    return (
      <div>
        <chat-form-search></chat-form-search>
        <div class="chat-wrap">
          <chat-users messages={this.messages} mainUser={this.mainUser} ></chat-users>
        </div>
        <chat-add-question></chat-add-question>
      </div>
    );
  }

}
