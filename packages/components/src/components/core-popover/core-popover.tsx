import { Component, Prop, h, JSX, ComponentInterface } from "@stencil/core";

@Component({
  tag: "core-popover",
  styleUrl: "core-popover.less",
  shadow: true,
})
export class Popover implements ComponentInterface {
  /**
   * The popover visibility
   */
  @Prop({ mutable: true, reflectToAttr: true }) active = false;

  /**
   * The popover will show up when hovering the popover-trigger
   */
  @Prop() hoverable = false;

  /**
   * The popover variation.
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
          "core-popover": true,
          active: this.active,
          hoverable: this.hoverable,
        }}
      >
        <div onClick={this.handleClick} class="trigger">
          <slot name="trigger" aria-haspopup="true" />
        </div>

        <div class="popover-outter">
          <div class="popover">
            <div class="arrow"></div>
            <div class="title">
              <slot name="title"></slot>
            </div>
            <slot />
          </div>
        </div>
      </div>
    );
  }
}
