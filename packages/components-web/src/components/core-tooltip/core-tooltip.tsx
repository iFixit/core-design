import { Component, Prop, h, JSX, ComponentInterface } from "@stencil/core";

@Component({
  tag: "core-tooltip",
  styleUrl: "core-tooltip.less",
  shadow: true,
})
export class Tooltip implements ComponentInterface {
  /**
   * The tooltip visibility
   */
  @Prop({ mutable: true, reflect: true }) active = false;

  /**
   * The tooltip color
   */
  @Prop({ reflect: true }) color?: "dark" | "light" = "dark";

  /**
   * The tooltip will show up when hovering the tooltip-trigger
   */
  @Prop() hoverable = true;

  /**
   * The tooltip variation.
   */
  @Prop({ reflect: true }) variation?: "top" | "bottom" = "top";

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
        }}
      >
        <div onClick={this.handleClick} class="trigger">
          <slot name="trigger" aria-haspopup="true" />
        </div>

        <div class="tooltip-outer">
          <div class="tooltip">
            <div class="arrow"></div>
            <slot />
          </div>
        </div>
      </div>
    );
  }
}
