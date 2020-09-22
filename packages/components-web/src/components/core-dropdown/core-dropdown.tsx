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
  @Prop() alignment?: "left" | "center" | "right" = "left";

  /**
   * The dropdown will show up when hovering the dropdown-trigger
   */
  @Prop({ reflect: true }) hoverable = false;

  /**
   * The dropdown will wrap if applied.
   */
  @Prop({ reflect: true }) wrap = false;

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