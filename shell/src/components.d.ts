/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */


import { HTMLStencilElement, JSXBase } from '@stencil/core/internal';


export namespace Components {
  interface HelloWorldDiv {
    'first': string;
    'last': string;
    'middle': string;
  }
}

declare global {


  interface HTMLHelloWorldDivElement extends Components.HelloWorldDiv, HTMLStencilElement {}
  var HTMLHelloWorldDivElement: {
    prototype: HTMLHelloWorldDivElement;
    new (): HTMLHelloWorldDivElement;
  };
  interface HTMLElementTagNameMap {
    'hello-world-div': HTMLHelloWorldDivElement;
  }
}

declare namespace LocalJSX {
  interface HelloWorldDiv {
    'first'?: string;
    'last'?: string;
    'middle'?: string;
  }

  interface IntrinsicElements {
    'hello-world-div': HelloWorldDiv;
  }
}

export { LocalJSX as JSX };


declare module "@stencil/core" {
  export namespace JSX {
    interface IntrinsicElements {
      'hello-world-div': LocalJSX.HelloWorldDiv & JSXBase.HTMLAttributes<HTMLHelloWorldDivElement>;
    }
  }
}


