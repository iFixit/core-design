import {
  Component,
  ComponentInterface,
  Element,
  Host,
  Prop,
  h,
} from "@stencil/core";

@Component({
  tag: "core-breadcrumb-group",
  styleUrl: "core-breadcrumb-group.less",
  shadow: true,
})
export class Breadcrumb implements ComponentInterface {
  @Element() el!: HTMLCoreBreadcrumbGroupElement;

  /**
   * The element divider.
   */
  @Prop({ reflect: true }) divider?: "chevron" | "slash" | "triangle" = "slash";

  /**
   * Activates core-dropdown element overflow.
   */
  @Prop() overflow = false;

  render() {
    return (
      <Host class={{ "core-breadcrumb-group": true }}>
        {this.overflow ? (
          <core-dropdown>
            <div slot="trigger">
              <svg
                width="32"
                height="18"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect width="32" height="18" rx="4" fill="#F7F9FA" />
                <path
                  d="M11.414 7.586a2 2 0 1 1-2.828 2.828 2 2 0 0 1 2.828-2.828zm12 0a2 2 0 1 1-2.828 2.828 2 2 0 0 1 2.828-2.828zm-6 0a2 2 0 1 1-2.828 2.828 2 2 0 0 1 2.828-2.828z"
                  fill="currentColor"
                />
              </svg>
            </div>
            <core-dropdown-item href="#">Option 1</core-dropdown-item>
            <core-dropdown-item href="#">Option 2</core-dropdown-item>
            <core-dropdown-item href="#">Option 3</core-dropdown-item>
          </core-dropdown>
        ) : (
          <a href="#" class="home">
            Home
          </a>
        )}
        <slot></slot>
      </Host>
    );
  }
}
