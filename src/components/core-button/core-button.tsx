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
  @Element() el!: HTMLElement;

  /**
   * The type of element.
   */
  @Prop({ mutable: true }) elementType = "button";

  /**
   * The button variation.
   */
  @Prop() variation?: "basic" | "primary" | "secondary" | "dark" | "light" =
    "basic";

  /**
   * If `true`, the user cannot interact with the button.
   */
  @Prop({ reflectToAttr: true }) disabled = false;

  /**
   * Set to "full" for a full-width button without border-radius or
   *  borders or to "block"` for a 100% width "block style" button.
   */
  @Prop() width?: "full" | "block" | undefined;

  /**
   * Set to the value of border-radius applied. Default is 4px.
   */
  @Prop() radius?: "0" | "2px" | "4px" | "8px" | "16px" | "32px" | "circle" =
    "4px";

  /**
   * This attribute instructs browsers to download a URL instead of navigating to
   * it, so the user will be prompted to save it as a local file. If the attribute
   * has a value, it is used as the pre-filled file name in the Save prompt
   * (the user can still change the file name if they want).
   */
  @Prop() download: string | undefined;

  /**
   * Contains a URL or a URL fragment that the hyperlink points to.
   * If this property is set, an anchor tag will be rendered instead of a button.
   */
  @Prop() href: string | undefined;

  /**
   * Specifies the relationship of the target object to the link object.
   * The value is a space-separated list of [link types](https://developer.mozilla.org/en-US/docs/Web/HTML/Link_types).
   */
  @Prop() rel: string | undefined;

  /**
   * The pre-defined button size.
   * Use: `"small"`, `"default"`, or `"large"`.
   * Default size is `"default"`.
   */
  @Prop() size?: "small" | "default" | "large" = "default";

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
   * The status classing of the button.
   * Use: `"success"`, `"danger"`, `"warning"`, or `"alt"`.
   */
  @Prop() status: "success" | "danger" | "warning" | "alt";

  /**
   * Specifies CSS display property of the custom element. [display property](https://developer.mozilla.org/en-US/docs/Web/CSS/display)
   */
  @Prop() display?: "block" | "inline" | "inline-flex" | "none" | "flex" =
    "flex";

  /**
   * Specifies the loading animation location if applied.
   * Use: `"left"`, `"right"`, or `"only"`.
   */
  @Prop({ reflectToAttr: true }) loading?: "left" | "right" | "only";

  private get hasIconOnly() {
    return !!this.el.querySelector('core-icon[slot="button-icon"]');
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
          <div class="button-inner">
            <slot name="button-icon"></slot>
            <slot name="button-left"></slot>
            <slot></slot>
            <slot name="button-right"></slot>
            <div class="button-loading"></div>
          </div>
        </TagType>
      </Host>
    );
  }
}
