import {
  Component,
  Prop,
  Host,
  h,
  JSX,
  ComponentInterface,
} from "@stencil/core";

@Component({
  tag: "core-dropdown-item",
  styleUrl: "core-dropdown-item.less",
  shadow: true,
})
export class DropdownItem implements ComponentInterface {
  /**
   * The type of element.
   */
  // eslint-disable-next-line @stencil/strict-mutable
  @Prop({ mutable: true }) elementType = "div";

  /**
   * Contains a URL or a URL fragment that the hyperlink points to.
   * If this property is set, an anchor tag will be rendered instead of a div.
   */
  @Prop() href: string | undefined;

  /**
   * Specifies where to display the linked URL.
   * Only applies when an `href` is provided.
   * Use: `"_blank"`, `"_self"`, `"_parent"`, `"_top"`.
   */
  @Prop() target: string | undefined;

  render(): JSX.Element {
    const { href, target } = this;
    const TagType = href === undefined ? "div" : ("a" as any);
    const attrs = TagType === "div" || {
      href,
      target,
    };

    return (
      <Host
        class={{
          "core-dropdown-item": true,
        }}
      >
        <TagType class="native-element" {...attrs}>
          <slot name="icon"></slot>
          <slot></slot>
        </TagType>
      </Host>
    );
  }
}
