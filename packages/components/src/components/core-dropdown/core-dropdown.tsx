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
  @Prop({ mutable: true, reflectToAttr: true }) active = false;

  /**
   * The dropdown alignment
   * Use: `"left"`, `"center"`, or `"right"`.
   */
  @Prop({ reflectToAttr: true }) alignment?: "left" | "center" | "right" =
    "left";

  /**
   * The dropdown will show up when hovering the dropdown-trigger
   */
  @Prop() hoverable = false;

  /**
   * The dropdown will not wrap it's child element content.
   */
  @Prop() nowrap = false;

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
          dropdown: true,
          active: this.active,
          hoverable: this.hoverable,
          nowrap: this.nowrap,
        }}
      >
        <div onClick={this.handleClick} class="trigger">
          <slot name="trigger" aria-haspopup="true" />
        </div>

        <div
          class={{
            "menu-outter": true,
          }}
        >
          <div class="menu" role="menu">
            <div class="menu-arrow"></div>
            <slot />
          </div>
        </div>
      </div>
    );
  }
}
