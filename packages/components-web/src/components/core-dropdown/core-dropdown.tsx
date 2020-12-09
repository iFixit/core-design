import { Component, Prop, h, JSX, ComponentInterface } from "@stencil/core";

@Component({
  tag: "core-dropdown",
  styleUrl: "core-dropdown.less",
  shadow: true,
})
export class Dropdown implements ComponentInterface {
  /**
   * The dropdown visibility
   */
  @Prop({ mutable: true, reflect: true }) active = false;

  /**
   * The element alignment
   */
  @Prop({ reflect: true }) alignment?: "left" | "center" | "right" = "left";

  /**
   * The dropdown direction to expand.
   */
  @Prop({ reflect: true }) direction?: "up" | "down" = "down";

  /**
   * The dropdown will show up when hovering the dropdown-trigger
   */
  @Prop({ reflect: true }) hoverable = false;

  /**
   * Center the dropdown arrow on the trigger element, overwriting the `alignment` prop inheritance. Use when trigger elements are less than 30px wide, such as icons.
   */
  @Prop() triggerCentered = false;

  /**
   * The dropdown will wrap if applied.
   */
  @Prop() wrap = false;

  /**
   * Handle Trigger click action
   */
  private handleClick = (): void => {
    if (!this.hoverable) {
      this.active = !this.active;

      if (this.active) {
        window.addEventListener('click', this.handleOutsideClick);
      } else {
        window.removeEventListener('click', this.handleOutsideClick);
      }
    }
  };

  private handleOutsideClick = (event: Event): void => {
    if (!(event.target as HTMLElement).closest("core-dropdown")) {
      this.active = false;
    }
  }

  render(): JSX.Element {
    return (
      <div
        class={{
          "core-dropdown": true,
          active: this.active,
          hoverable: this.hoverable,
          wrap: this.wrap,
        }}
      >
        <div onClick={this.handleClick} class="trigger">
          <slot name="trigger" aria-haspopup="true" />
        </div>

        <div class={{ "menu-outer": true }}>
          <div class="menu" role="menu">
            <div class="arrow"></div>
            <slot />
          </div>
        </div>
      </div>
    );
  }
}
