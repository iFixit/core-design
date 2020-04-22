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
   * The position determines where and how the label behaves inside an item.
   */
  @Prop() position?: "inline" | "block" = "block";

  /**
   * The id of a labelable form-related element.
   */
  @Prop() forId?: string | null;

  render() {
    const { position, forId } = this;
    return (
      <Host
        class={{
          "core-label": true,
          [position]: true,
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
