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
   * Applies the provided URL to the helpIcon href.
   */
  @Prop() helpurl?: string | null;

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
          <slot name="label-right">
            {this.helpurl ? (
              <a class="help-url" href={this.helpurl}>
                <core-icon
                  slot="label-right"
                  icon="help-solid"
                  color="gray-3"
                ></core-icon>
              </a>
            ) : undefined}
          </slot>
        </label>
      </Host>
    );
  }
}
