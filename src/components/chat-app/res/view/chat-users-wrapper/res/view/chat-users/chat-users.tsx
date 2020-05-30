import {Component, ComponentInterface, h, Prop} from "@stencil/core";

@Component({
  tag: "chat-users",
  styleUrl: "chat-users.css",
  shadow: false,
})
export class ChatUsers implements ComponentInterface {

  @Prop() messages:any;
  @Prop() mainUser:any;

  render() {
    return <div class="user-wrapper">
      <chat-main-user mainUser={this.mainUser} ></chat-main-user>
      <chat-user messages={this.messages}></chat-user>
    </div>;
  }
}

