import { Component, ComponentInterface, h, Prop } from "@stencil/core";

@Component({
  tag: "chat-user",
  styleUrl: "chat-user.css",
  shadow: false,
})
export class ChatUser implements ComponentInterface {
  @Prop() messages: any;

  getUser(arr): any[] {
    return arr.map((item) => item.main);
  }

  render() {
    return (
      <div class="user-wrapper">
        <UserMessage user={this.getUser(this.messages)}></UserMessage>
      </div>
    );
  }
}

const UserMessage = (props) => {
  return props.user.map(item => {
    return <chat-user-card user={item}></chat-user-card>
  })
}
