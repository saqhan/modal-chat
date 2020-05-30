import { Component, ComponentInterface, h } from '@stencil/core';

@Component({
  tag: 'chat-files-wrapper',
  styleUrl: 'chat-files-wrapper.css',
  shadow: false,
})
export class ChatFilesWrapper implements ComponentInterface {

  render() {
    return (
      <div>
        <chat-form-search-files></chat-form-search-files>
        <chat-files ></chat-files>
      </div>
    );
  }

}
