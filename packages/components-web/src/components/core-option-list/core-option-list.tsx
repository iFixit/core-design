import { Component, Prop, h, JSX, ComponentInterface } from "@stencil/core";

@Component({
  tag: "core-option-list",
  styleUrl: "core-option-list.less",
  shadow: true,
})
export class OptionList implements ComponentInterface {
  /**
   * The option-list visibility
   */
  @Prop({ mutable: true, reflect: true }) active = false;

  /**
   * The element alignment
   */
  @Prop({ reflect: true }) alignment?: "left" | "center" | "right" = "left";

  /**
   * The option-lists direction to expand.
   */
  @Prop({ reflect: true }) direction?: "up" | "down" = "down";

  /**
   * The option-list will show up when hovering the option-list-trigger
   */
  @Prop({ reflect: true }) hoverable = false;

  /**
   * The option-list will wrap if applied.
   */
  @Prop() wrap = false;

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
          "core-option-list": true,
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
