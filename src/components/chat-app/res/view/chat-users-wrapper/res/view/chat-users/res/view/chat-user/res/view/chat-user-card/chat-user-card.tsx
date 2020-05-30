import {Component, ComponentInterface, h, Prop} from "@stencil/core";

@Component({
  tag: "chat-user-card",
  styleUrl: "chat-user-card.css",
  shadow: false,
})
export class ChatUserCard implements ComponentInterface {

  @Prop() user:any;

  render() {
    return (
      <div>
        <div class="user-card">
          <div class="left">
            <div
              class="img-user"
              style={{ backgroundImage: `url( ${this.user.img} )` }}
            ></div>
          </div>
          <div class="right">
            <div class="user-data">
              <div class="user-name">{this.user.name}</div>
              <div class="message-date">{this.user.date}</div>
            </div>
            <div class="user-mess">{this.user.message}
              <span class="new-mess">2</span>
            </div>
            <span class="positon-user">{this.user.position}</span>
          </div>
        </div>

      </div>
    );
  }
}
