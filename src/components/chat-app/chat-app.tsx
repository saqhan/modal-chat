import { Component, ComponentInterface, h, State, Event } from "@stencil/core";
import {messages, mainUser} from "../../utils/mock";

@Component({
  tag: "chat-app",
  styleUrl: "chat-app.css",
  shadow: false,
})
export class ChatApp implements ComponentInterface {
  @State() showChat: boolean;

  @Event() close: boolean;

  public isShowChat() {
    this.showChat = !this.showChat;
  }
  public onClose() {
    this.showChat = false;
  }



  render() {
    return (
      <div class="wrapper-modal">
        {this.showChat ? <chat-wrapper messages={messages} mainUser={mainUser} onClose={() => this.onClose()}></chat-wrapper> : ""}
        <div class="btn-wrapper">
          <div class="open-chat">
            <button onClick={() => this.isShowChat()} class="btn-open">
              <span>
                {this.showChat ? <i class="fas fa-times"></i> : <i class="far fa-comment-dots"></i> }
              </span>
            </button>
          </div>
        </div>
      </div>
    );
  }
}
