import {
  Component,
  ComponentInterface,
  h,
  Event,
  EventEmitter,
  Prop,
} from "@stencil/core";
import { mainUser, messages } from "../../../../../utils/mock";

@Component({
  tag: "chat-wrapper",
  styleUrl: "chat-wrapper.css",
  shadow: false,
})
export class ChatWrapper implements ComponentInterface {

  @Event() close: EventEmitter;
  @Event() selectPersonal: EventEmitter;
  @Event() selectUsers: EventEmitter;
  @Event() selectFiles: EventEmitter;
  @Prop() messages: any;
  @Prop() mainUser: any;
  @Prop() showContent: string;




  public ShowContent = (content) => {
    switch (content) {
      case "personal":
        return <chat-personal></chat-personal>;
      case "users":
        return <chat-users-wrapper  messages={messages} mainUser={mainUser} ></chat-users-wrapper>;
      case "files":
        return <chat-files-wrapper></chat-files-wrapper>;

      default:
        "files";
    }
  };

  render() {
    return (
      <div class="wrapper-chat">
        <div class="header-chat">
          Чат с банком
          <a href="#" onClick={() => this.close.emit()}>
            <i class="fas fa-times-circle"></i>
          </a>
        </div>

        <div class="content-chat">{this.ShowContent(this.showContent )}</div>
      </div>
    );
  }

}
