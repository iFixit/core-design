/* eslint-disable @stencil/strict-boolean-conditions */
import {
  Component,
  ComponentInterface,
  Element,
  Host,
  Prop,
  h,
} from "@stencil/core";

@Component({
  tag: "core-label",
  styleUrl: "core-label.less",
  shadow: true,
})
export class Label implements ComponentInterface {
  @Element() el!: HTMLCoreLabelElement;

  /**
   * Optional color of the label.
   * Use any `@color` in [core-primitives](https://unpkg.com/@core-ds/primitives/core-primitives.less) without `@color-`.
   * (e.g. `color="red"`, `color="gray-2"`, etc).
   */
  @Prop() color?:
    | "blue"
    | "green"
    | "yellow"
    | "red"
    | "white"
    | "black"
    | "blue-light-4"
    | "blue-light-3"
    | "blue-light-2"
    | "blue-light-1"
    | "blue-dark-1"
    | "blue-dark-2"
    | "blue-dark-3"
    | "blue-dark-4"
    | "green-light-4"
    | "green-light-3"
    | "green-light-2"
    | "green-light-1"
    | "green-dark-1"
    | "green-dark-2"
    | "green-dark-3"
    | "green-dark-4"
    | "yellow-light-4"
    | "yellow-light-3"
    | "yellow-light-2"
    | "yellow-light-1"
    | "yellow-dark-1"
    | "yellow-dark-2"
    | "yellow-dark-3"
    | "yellow-dark-4"
    | "red-light-4"
    | "red-light-3"
    | "red-light-2"
    | "red-light-1"
    | "red-dark-1"
    | "red-dark-2"
    | "red-dark-3"
    | "red-dark-4"
    | "gray-1"
    | "gray-2"
    | "gray-3"
    | "gray-4"
    | "gray-5"
    | "gray-6"
    | "gray-7"
    | "gray-8"
    | string;

  /**
   * If `true`, the user cannot interact with the nested element (typically core-input).
   */
  @Prop({ reflectToAttr: true }) disabled = false;

  /**
   * The display determines where and how the label behaves inside an item.
   */
  @Prop() display?: "inline" | "block" = "block";

  /**
   * Applies the provided URL to the helpIcon href.
   */
  @Prop() helpurl?: string | null;

  render() {
    const { display } = this;
    return (
      <Host
        class={{
          "core-label": true,
          [display]: true,
        }}
      >
        <label class="native-element">
          <div class="label-inner">
            <slot name="label-left"></slot>
            <slot></slot>
            <slot name="label-right">
              {this.helpurl ? (
                <a class="help-url" href={this.helpurl}>
                  <core-icon
                    slot="label-right"
                    icon="help-solid"
                    color="gray-3"
                  ></core-icon>
                </a>
              ) : (
                undefined
              )}
            </slot>
          </div>
          <slot name="label-input"></slot>
        </label>
      </Host>
    );
  }
}
