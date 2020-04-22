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
export class Button implements ComponentInterface {
  @Element() el!: HTMLElement;

  /**
   * The display determines where and how the label behaves inside an item.
   */
  @Prop() display?: "inline" | "block" = "block";

  /**
   * The id of a labelable form-related element.
   */
  @Prop() forId?: string | null;

  render() {
    const { display, forId } = this;
    return (
      <Host
        class={{
          "core-label": true,
          [display]: true,
          [forId]: forId !== undefined,
        }}
      >
        <label class="native-element">
          <slot></slot>
        </label>
      </Host>
    );
  }
}
