import { Component, Prop, h, JSX, ComponentInterface } from "@stencil/core";

@Component({
  tag: "core-tooltip",
  styleUrl: "core-tooltip.less",
  shadow: true,
})
export class tooltip implements ComponentInterface {
  /**
   * The tooltip visibility
   */
  @Prop({ mutable: true, reflectToAttr: true }) active = false;

  /**
   * The tooltip color
   * Use: "dark"`or `"light"`.
   */
  @Prop() color?: "dark" | "light" = "dark";

  /**
   * The tooltip will show up when hovering the tooltip-trigger
   */
  @Prop() hoverable = true;

  /**
   * The tooltip variation.
   */
  @Prop({ reflectToAttr: true }) variation?: "top" | "bottom" = "top";

  /**
   * Handle Trigger click action
   */
  private handleClick = (): void => {
    if (!this.hoverable) {
      this.active = !this.active;
    }
  };

  render(): JSX.Element {
    return (
      <div
        class={{
          "core-tooltip": true,
          active: this.active,
          hoverable: this.hoverable,
        }}
      >
        <div onClick={this.handleClick} class="trigger">
          <slot name="trigger" aria-haspopup="true" />
        </div>

        <div class="tooltip-outter">
          <div class="tooltip">
            <div class="arrow"></div>
            <slot />
          </div>
        </div>
      </div>
    );
  }
}
