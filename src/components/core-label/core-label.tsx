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
   * Displays the question mark help anchor icon on the right side of the
   * label container.
   */
  @Prop() helpIcon = false;

  /**
   * Applies the provided URL to the helpIcon href.
   */
  @Prop() helpUrl?: string | null;

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
          <slot name="label-left"></slot>
          <slot></slot>
          <slot name="label-right">
            {this.helpIcon ? (
              <a href={this.helpUrl || ""}>
                <core-icon slot="label-right" icon="help"></core-icon>
              </a>
            ) : undefined}
          </slot>
        </label>
      </Host>
    );
  }
}
