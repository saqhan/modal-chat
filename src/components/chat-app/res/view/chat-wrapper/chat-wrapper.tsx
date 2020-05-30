import {Component, ComponentInterface, h, State, Event, EventEmitter, Prop,} from "@stencil/core";
import {mainUser, messages} from "../../../../../utils/mock";

@Component({
  tag: "chat-wrapper",
  styleUrl: "chat-wrapper.css",
  shadow: false,
})
export class ChatWrapper implements ComponentInterface {
  @State() showContent = 'users';
  @Event() close: EventEmitter;
  @Prop() messages: any;
  @Prop() mainUser: any;


  public showUsers() {
    this.showContent = "users";
  }

  public showPersonal() {
    this.showContent = "personal";
  }

  public showFiles() {
    this.showContent = "files";
  }



  render() {
    return (
      <div class="wrapper-chat">
        <div class="header-chat">
          Чат с банком
          <a href="#" onClick={() => this.close.emit()}>
            <i class="fas fa-times-circle"></i>
          </a>
        </div>

        <div class="content-chat">{this.ShowContent(this.showContent)}</div>

      </div>
    );
  }
  public ShowContent = (personal) => {
    switch (personal) {
      case "personal":
        return <chat-personal ></chat-personal>;
      case "users":
        return <chat-users-wrapper messages={messages} mainUser={mainUser} ></chat-users-wrapper>;
      case "files":
        return <chat-files-wrapper></chat-files-wrapper>;

      default:
        "files";
    }
  };
}
