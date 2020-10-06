import {
  Component,
  ComponentInterface,
  Element,
  Host,
  Prop,
  h,
} from "@stencil/core";

@Component({
  tag: "core-breadcrumb",
  styleUrl: "core-breadcrumb.less",
  shadow: true,
})
export class Breadcrumb implements ComponentInterface {
  @Element() el!: HTMLCoreBreadcrumbElement;

  /**
   * If `true`, the core-breadcrumb element is set to active.
   */
  @Prop() active = false;

  /**
   * Contains a URL or a URL fragment that the hyperlink points to.
   * If this property is set, the nested anchor tag will receive the URL.
   */
  @Prop() href: string | undefined;

  render() {
    const { href } = this;
    const TagType = href === undefined ? "div" : ("a" as any);
    const attrs =
      TagType === "div"
        ? { undefined }
        : {
            href,
          };

    return (
      <Host class={{ "core-breadcrumb": true }}>
        <TagType class="location" {...attrs}>
          <slot></slot>
        </TagType>
      </Host>
    );
  }
}
