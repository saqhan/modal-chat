import { Component, ComponentInterface, h, Prop } from "@stencil/core";

@Component({
  tag: "chat-main-user",
  styleUrl: "chat-main-user.css",
  shadow: false,
})
export class ChatMainUser implements ComponentInterface {
  @Prop() mainUser: any;

  // getUserMain(arr): any[] {
  //   return arr.map((item) => item.main);
  // }
  render() {
    return (
      <div class="main-wrapper">
        <MainUserMessage   main={this.mainUser}></MainUserMessage>
      </div>
    );
  }
}
const MainUserMessage = (props) => {
  return props.main.map((item) => {
    return <chat-main-user-card main={item}></chat-main-user-card>;
  });
};
