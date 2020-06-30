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
  @Prop({ reflectToAttr: true }) disabled = false;

  /**
   * Specifies CSS display property of the custom element. [display property](https://developer.mozilla.org/en-US/docs/Web/CSS/display)
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
   * Use: `"left"`, `"right"`, or `"only"`.
   */
  @Prop({ reflectToAttr: true }) loading?: "left" | "right" | "only";

  /**
   * Set to the value of border-radius applied. Default is 4(px).
   */
  @Prop() radius?: "0" | "4" | "circle" = "4";

  /**
   * Specifies the relationship of the target object to the link object.
   * The value is a space-separated list of [link types](https://developer.mozilla.org/en-US/docs/Web/HTML/Link_types).
   */
  @Prop() rel: string | undefined;

  /**
   * The pre-defined button size.
   * Use: `"small"`, `"default"`, or `"large"`.
   */
  @Prop() size?: "small" | "default" | "large" = "default";

  /**
   * The status classing of the button.
   * Use: `"success"`, `"danger"`, or `"warning"`.
   */
  @Prop() status: "success" | "danger" | "warning";

  /**
   * Specifies where to display the linked URL.
   * Only applies when an `href` is provided.
   * Use: `"_blank"`, `"_self"`, `"_parent"`, `"_top"`.
   */
  @Prop() target: string | undefined;

  /**
   * The type of the button.
   */
  @Prop() type: "submit" | "reset" | "button" = "button";

  /**
   * The button variation.
   */
  @Prop() variation?:
    | "basic"
    | "primary"
    | "secondary"
    | "dark"
    | "light"
    | "borderless" = "basic";

  /**
   * Set to "full" for a 100% full-width button without border-radius/borders or to "block"`.
   */
  @Prop() width?: "full" | "block" | undefined;

  private get hasIconOnly() {
    // eslint-disable-next-line @stencil/strict-boolean-conditions
    return !!this.el.querySelector('core-icon[slot="icon-only"]');
  }

  render() {
    const {
      disabled,
      hasIconOnly,
      href,
      loading,
      rel,
      target,
      type,
      size,
      status,
      variation,
      width,
    } = this;
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
        class={{
          "core-button": true,
          "icon-only": hasIconOnly,
          [`${variation}`]: variation !== undefined,
          [`${width}`]: width !== undefined,
          [`${size}`]: size !== undefined,
          [`${status}`]: status !== undefined,
          [`${disabled}`]: disabled,
        }}
      >
        <TagType
          {...attrs}
          class="native-element"
          disabled={disabled}
          loading={loading}
        >
          <slot name="icon-only"></slot>
          <slot name="dropdown-left"></slot>
          <slot name="button-left"></slot>
          <div class="text-wrap">
            <slot></slot>
          </div>
          <slot name="button-right"></slot>
          <slot name="dropdown-right"></slot>
          <div class="button-loading"></div>
        </TagType>
      </Host>
    );
  }
}
