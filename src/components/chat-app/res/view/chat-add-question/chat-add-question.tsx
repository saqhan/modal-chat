import { Component, ComponentInterface, h } from '@stencil/core';

@Component({
  tag: 'chat-add-question',
  styleUrl: 'chat-add-question.css',
  shadow: false,
})
export class ChatAddQuestion implements ComponentInterface {

  render() {
    return (
      <div class="col-12">
        <div class="btn-new-ask">
          <button class="btn-add-question">Задать новый вопрос</button>
        </div>
      </div>
    );
  }

}
