import { Component, Prop, h, JSX, ComponentInterface } from "@stencil/core";

@Component({
  tag: "core-popover",
  styleUrl: "core-popover.css",
  shadow: true,
})
export class Popover implements ComponentInterface {
  /**
   * The popover visibility
   */
  @Prop({ mutable: true, reflect: true }) active = false;

  /**
   * The popover will show up when hovering the popover-trigger
   */
  @Prop() hoverable = false;

  /**
   * The popover variation.
   */
  @Prop({ reflect: true }) variation?: "top" | "bottom" = "top";

  /**
   * Handle Trigger click action
   */
  private handleClick = (): void => {
    if (!this.hoverable) {
      this.active = !this.active;

      if (this.active) {
        window.addEventListener("click", this.handleOutsideClick);
      } else {
        window.removeEventListener("click", this.handleOutsideClick);
      }
    }
  };

  private handleOutsideClick = (event: Event): void => {
    if (!(event.target as HTMLElement).closest("core-popover")) {
      this.active = false;
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

        <div class="popover-outer">
          <div class="popover">
            <div class="arrow" />
            <div class="title">
              <slot name="title" />
            </div>
            <slot />
          </div>
        </div>
      </div>
    );
  }
}
