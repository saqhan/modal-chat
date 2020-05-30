import { Component, ComponentInterface, h } from "@stencil/core";

@Component({
  tag: "chat-form-search",
  styleUrl: "chat-form-search.css",
  shadow: false,
})

export class ChatFormSearch implements ComponentInterface {
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
          <div class="block-file">
            <i class="far fa-file-alt"></i>
          </div>
        </div>
      </div>
    );
  }
}
