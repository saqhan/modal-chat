/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */
import { HTMLStencilElement, JSXBase } from "@stencil/core/internal";
export namespace Components {
    interface ChatAddQuestion {
    }
    interface ChatApp {
    }
    interface ChatFiles {
    }
    interface ChatFilesWrapper {
    }
    interface ChatFormSearch {
    }
    interface ChatFormSearchFiles {
    }
    interface ChatMainUser {
        "mainUser": any;
    }
    interface ChatMainUserCard {
        "main": any;
    }
    interface ChatPersonal {
    }
    interface ChatUser {
        "messages": any;
    }
    interface ChatUserCard {
        "user": any;
    }
    interface ChatUsers {
        "mainUser": any;
        "messages": any;
    }
    interface ChatUsersWrapper {
        "mainUser": any;
        "messages": any;
    }
    interface ChatWrapper {
        "mainUser": any;
        "messages": any;
        "showContent": string;
    }
}
declare global {
    interface HTMLChatAddQuestionElement extends Components.ChatAddQuestion, HTMLStencilElement {
    }
    var HTMLChatAddQuestionElement: {
        prototype: HTMLChatAddQuestionElement;
        new (): HTMLChatAddQuestionElement;
    };
    interface HTMLChatAppElement extends Components.ChatApp, HTMLStencilElement {
    }
    var HTMLChatAppElement: {
        prototype: HTMLChatAppElement;
        new (): HTMLChatAppElement;
    };
    interface HTMLChatFilesElement extends Components.ChatFiles, HTMLStencilElement {
    }
    var HTMLChatFilesElement: {
        prototype: HTMLChatFilesElement;
        new (): HTMLChatFilesElement;
    };
    interface HTMLChatFilesWrapperElement extends Components.ChatFilesWrapper, HTMLStencilElement {
    }
    var HTMLChatFilesWrapperElement: {
        prototype: HTMLChatFilesWrapperElement;
        new (): HTMLChatFilesWrapperElement;
    };
    interface HTMLChatFormSearchElement extends Components.ChatFormSearch, HTMLStencilElement {
    }
    var HTMLChatFormSearchElement: {
        prototype: HTMLChatFormSearchElement;
        new (): HTMLChatFormSearchElement;
    };
    interface HTMLChatFormSearchFilesElement extends Components.ChatFormSearchFiles, HTMLStencilElement {
    }
    var HTMLChatFormSearchFilesElement: {
        prototype: HTMLChatFormSearchFilesElement;
        new (): HTMLChatFormSearchFilesElement;
    };
    interface HTMLChatMainUserElement extends Components.ChatMainUser, HTMLStencilElement {
    }
    var HTMLChatMainUserElement: {
        prototype: HTMLChatMainUserElement;
        new (): HTMLChatMainUserElement;
    };
    interface HTMLChatMainUserCardElement extends Components.ChatMainUserCard, HTMLStencilElement {
    }
    var HTMLChatMainUserCardElement: {
        prototype: HTMLChatMainUserCardElement;
        new (): HTMLChatMainUserCardElement;
    };
    interface HTMLChatPersonalElement extends Components.ChatPersonal, HTMLStencilElement {
    }
    var HTMLChatPersonalElement: {
        prototype: HTMLChatPersonalElement;
        new (): HTMLChatPersonalElement;
    };
    interface HTMLChatUserElement extends Components.ChatUser, HTMLStencilElement {
    }
    var HTMLChatUserElement: {
        prototype: HTMLChatUserElement;
        new (): HTMLChatUserElement;
    };
    interface HTMLChatUserCardElement extends Components.ChatUserCard, HTMLStencilElement {
    }
    var HTMLChatUserCardElement: {
        prototype: HTMLChatUserCardElement;
        new (): HTMLChatUserCardElement;
    };
    interface HTMLChatUsersElement extends Components.ChatUsers, HTMLStencilElement {
    }
    var HTMLChatUsersElement: {
        prototype: HTMLChatUsersElement;
        new (): HTMLChatUsersElement;
    };
    interface HTMLChatUsersWrapperElement extends Components.ChatUsersWrapper, HTMLStencilElement {
    }
    var HTMLChatUsersWrapperElement: {
        prototype: HTMLChatUsersWrapperElement;
        new (): HTMLChatUsersWrapperElement;
    };
    interface HTMLChatWrapperElement extends Components.ChatWrapper, HTMLStencilElement {
    }
    var HTMLChatWrapperElement: {
        prototype: HTMLChatWrapperElement;
        new (): HTMLChatWrapperElement;
    };
    interface HTMLElementTagNameMap {
        "chat-add-question": HTMLChatAddQuestionElement;
        "chat-app": HTMLChatAppElement;
        "chat-files": HTMLChatFilesElement;
        "chat-files-wrapper": HTMLChatFilesWrapperElement;
        "chat-form-search": HTMLChatFormSearchElement;
        "chat-form-search-files": HTMLChatFormSearchFilesElement;
        "chat-main-user": HTMLChatMainUserElement;
        "chat-main-user-card": HTMLChatMainUserCardElement;
        "chat-personal": HTMLChatPersonalElement;
        "chat-user": HTMLChatUserElement;
        "chat-user-card": HTMLChatUserCardElement;
        "chat-users": HTMLChatUsersElement;
        "chat-users-wrapper": HTMLChatUsersWrapperElement;
        "chat-wrapper": HTMLChatWrapperElement;
    }
}
declare namespace LocalJSX {
    interface ChatAddQuestion {
    }
    interface ChatApp {
        "onClose"?: (event: CustomEvent<any>) => void;
        "onSelectFiles"?: (event: CustomEvent<any>) => void;
        "onSelectPersonal"?: (event: CustomEvent<any>) => void;
        "onSelectUsers"?: (event: CustomEvent<any>) => void;
    }
    interface ChatFiles {
    }
    interface ChatFilesWrapper {
    }
    interface ChatFormSearch {
        "onSelectFiles"?: (event: CustomEvent<any>) => void;
    }
    interface ChatFormSearchFiles {
        "onSelectUsers"?: (event: CustomEvent<any>) => void;
    }
    interface ChatMainUser {
        "mainUser"?: any;
    }
    interface ChatMainUserCard {
        "main"?: any;
        "onSelectPersonal"?: (event: CustomEvent<any>) => void;
    }
    interface ChatPersonal {
        "onSelectUsers"?: (event: CustomEvent<any>) => void;
    }
    interface ChatUser {
        "messages"?: any;
    }
    interface ChatUserCard {
        "onSelectPersonal"?: (event: CustomEvent<any>) => void;
        "user"?: any;
    }
    interface ChatUsers {
        "mainUser"?: any;
        "messages"?: any;
    }
    interface ChatUsersWrapper {
        "mainUser"?: any;
        "messages"?: any;
    }
    interface ChatWrapper {
        "mainUser"?: any;
        "messages"?: any;
        "onClose"?: (event: CustomEvent<any>) => void;
        "onSelectFiles"?: (event: CustomEvent<any>) => void;
        "onSelectPersonal"?: (event: CustomEvent<any>) => void;
        "onSelectUsers"?: (event: CustomEvent<any>) => void;
        "showContent"?: string;
    }
    interface IntrinsicElements {
        "chat-add-question": ChatAddQuestion;
        "chat-app": ChatApp;
        "chat-files": ChatFiles;
        "chat-files-wrapper": ChatFilesWrapper;
        "chat-form-search": ChatFormSearch;
        "chat-form-search-files": ChatFormSearchFiles;
        "chat-main-user": ChatMainUser;
        "chat-main-user-card": ChatMainUserCard;
        "chat-personal": ChatPersonal;
        "chat-user": ChatUser;
        "chat-user-card": ChatUserCard;
        "chat-users": ChatUsers;
        "chat-users-wrapper": ChatUsersWrapper;
        "chat-wrapper": ChatWrapper;
    }
}
export { LocalJSX as JSX };
declare module "@stencil/core" {
    export namespace JSX {
        interface IntrinsicElements {
            "chat-add-question": LocalJSX.ChatAddQuestion & JSXBase.HTMLAttributes<HTMLChatAddQuestionElement>;
            "chat-app": LocalJSX.ChatApp & JSXBase.HTMLAttributes<HTMLChatAppElement>;
            "chat-files": LocalJSX.ChatFiles & JSXBase.HTMLAttributes<HTMLChatFilesElement>;
            "chat-files-wrapper": LocalJSX.ChatFilesWrapper & JSXBase.HTMLAttributes<HTMLChatFilesWrapperElement>;
            "chat-form-search": LocalJSX.ChatFormSearch & JSXBase.HTMLAttributes<HTMLChatFormSearchElement>;
            "chat-form-search-files": LocalJSX.ChatFormSearchFiles & JSXBase.HTMLAttributes<HTMLChatFormSearchFilesElement>;
            "chat-main-user": LocalJSX.ChatMainUser & JSXBase.HTMLAttributes<HTMLChatMainUserElement>;
            "chat-main-user-card": LocalJSX.ChatMainUserCard & JSXBase.HTMLAttributes<HTMLChatMainUserCardElement>;
            "chat-personal": LocalJSX.ChatPersonal & JSXBase.HTMLAttributes<HTMLChatPersonalElement>;
            "chat-user": LocalJSX.ChatUser & JSXBase.HTMLAttributes<HTMLChatUserElement>;
            "chat-user-card": LocalJSX.ChatUserCard & JSXBase.HTMLAttributes<HTMLChatUserCardElement>;
            "chat-users": LocalJSX.ChatUsers & JSXBase.HTMLAttributes<HTMLChatUsersElement>;
            "chat-users-wrapper": LocalJSX.ChatUsersWrapper & JSXBase.HTMLAttributes<HTMLChatUsersWrapperElement>;
            "chat-wrapper": LocalJSX.ChatWrapper & JSXBase.HTMLAttributes<HTMLChatWrapperElement>;
        }
    }
}
