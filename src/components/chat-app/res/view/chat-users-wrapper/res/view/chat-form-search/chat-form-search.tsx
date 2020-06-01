import {
  Component,
  ComponentInterface,
  h,
  Event,
  EventEmitter,
} from "@stencil/core";

@Component({
  tag: "chat-form-search",
  styleUrl: "chat-form-search.css",
  shadow: false,
})
export class ChatFormSearch implements ComponentInterface {
  @Event() selectFiles: EventEmitter;
  render() {
    return (
      <div class="header-wrapper">
        <div class=" chat-files">
          <div class="block-input">
            <input
              type="text"
              class="input-search"
              placeholder="Поиск чатов и сообщений"
            />
          </div>
          <div class="block-file" onClick={() => this.selectFiles.emit()} >
            <i class="far fa-file-alt"></i>
          </div>
        </div>
      </div>
    );
  }
}
