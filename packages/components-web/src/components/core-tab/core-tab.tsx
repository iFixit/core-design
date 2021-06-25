import { Component, ComponentInterface, Host, Prop, h } from "@stencil/core";

@Component({
  tag: "core-tab",
  styleUrl: "core-tab.css",
  shadow: false,
})
export class Tab implements ComponentInterface {
  /**
   * If `true`, the tab element is set to active.
   */
  @Prop() active = false;

  /**
   * If `true`, the user cannot interact with the tab.
   */
  @Prop({ reflect: true }) disabled = false;

  render() {
    const { disabled } = this;
    return (
      <Host role="tabpanel" aria-hidden={disabled ? "true" : null}>
        <li class="native-element">
          <slot />
          <div class="badge-outer">
            <slot name="badge" />
          </div>
        </li>
      </Host>
    );
  }
}
