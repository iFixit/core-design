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
              ) : undefined}
            </slot>
          </div>
          <slot name="label-input"></slot>
        </label>
      </Host>
    );
  }
}
