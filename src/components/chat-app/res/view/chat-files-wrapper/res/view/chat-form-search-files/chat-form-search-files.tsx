import {Component, ComponentInterface, EventEmitter, h, Event} from '@stencil/core';

@Component({
  tag: 'chat-form-search-files',
  styleUrl: 'chat-form-search-files.css',
  shadow: false,
})
export class ChatFormSearchFiles implements ComponentInterface {

  @Event() files: EventEmitter;

  render() {
    return (
      <div class="header-wrapper">
        <div class=" chat-files">
          <div class="btn-back"  >
          <span><i class="fas fa-chevron-left"></i></span>
      </div>
          <div class="block-input">
            <input
              type="text"
              class="input-search"
              placeholder="Поиск файлов"
            />
          </div>
          <div class="block-file">
            <i class="fas fa-filter"></i>
          </div>
        </div>
      </div>
    );
  }

}
