import {
  Component,
  ComponentInterface,
  Element,
  Host,
  Prop,
  h,
} from "@stencil/core";

/**
 * @slot - Content is placed between the named slots if provided without a slot.
 * @slot `button-icon` - Should be used on an icon in a button that has no text.
 * @slot `button-left` - Content is placed to the left of the button text.
 * @slot `button-right` - Content is placed to the right of the button text.
 */

@Component({
  tag: "core-button",
  styleUrl: "core-button.less",
  shadow: true,
})
export class Button implements ComponentInterface {
  @Element() el!: HTMLCoreButtonElement;

  /**
   * If `true`, the user cannot interact with the button.
   */
  @Prop() disabled = false;

  /**
   * Specifies [CSS display property](https://developer.mozilla.org/en-US/docs/Web/CSS/display) of the custom element.
   */
  @Prop() display?: "block" | "flex" | "inline" | "inlineFlex" | "none" =
    "flex";

  /**
   * This attribute instructs browsers to download a URL instead of navigating to
   * it, so the user will be prompted to save it as a local file. If the attribute
   * has a value, it is used as the pre-filled file name in the Save prompt
   * (the user can still change the file name if they want).
   */
  @Prop() download: string | undefined;

  /**
   * The type of element.
   */
  // eslint-disable-next-line @stencil/strict-mutable
  @Prop({ mutable: true }) elementType = "button";

  /**
   * Contains a URL or a URL fragment that the hyperlink points to.
   * If this property is set, an anchor tag will be rendered instead of a button.
   */
  @Prop() href: string | undefined;

  /**
   * Specifies the loading animation location if applied.
   */
  @Prop() loading?: "left" | "right" | "only";

  /**
   * Set the value of the element border-radius. Default is 4(px).
   */
  @Prop() radius?: "none" | "md" | "lg" | "pill" = "md";

  /**
   * Specifies the relationship of the target object to the link object.
   * The value is a space-separated list of [link types](https://developer.mozilla.org/en-US/docs/Web/HTML/Link_types).
   */
  @Prop() rel: string | undefined;

  /**
   * The pre-defined button size.
   */
  @Prop({ reflect: true }) size?: "small" | "default" | "large" = "default";

  /**
   * The status classing of the button.
   */
  @Prop() status: "success" | "danger" | "warning";

  /**
   * Specifies where to display the linked URL.
   * Only applies when an `href` is provided.
   */
  @Prop() target: string | undefined;

  /**
   * The type of the button.
   */
  @Prop() type: "submit" | "reset" | "button" = "button";

  /**
   * The button variation.
   */
  @Prop({ reflect: true }) variation?:
    | "basic"
    | "primary"
    | "secondary"
    | "dark"
    | "light"
    | "borderless" = "basic";

  /**
   * Set to "full" for a 100% full-width button without border-radius/borders or to "block"`.
   */
  @Prop({ reflect: true }) width?: "full" | "block" | undefined;

  private get hasIconOnly() {
    // eslint-disable-next-line @stencil/strict-boolean-conditions
    return !!this.el.querySelector('core-icon[slot="icon"]');
  }

  render() {
    const { disabled, hasIconOnly, href, rel, target, type } = this;
    const TagType = href === undefined ? "button" : ("a" as any);
    const attrs =
      TagType === "button"
        ? { type }
        : {
            download: this.download,
            href,
            target,
            rel,
          };

    return (
      <Host
        aria-disabled={disabled ? "true" : null}
        class={{ "icon-only": hasIconOnly }}
      >
        <TagType class="native-element" disabled={disabled} {...attrs}>
          <slot name="icon" />
          <slot name="button-dropdown-left" />
          <slot name="button-left" />
          <div class="text-wrap">
            <slot />
          </div>
          <slot name="button-right" />
          <slot name="button-dropdown-right" />
          <div class="button-loading" />
        </TagType>
      </Host>
    );
  }
}
