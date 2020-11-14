import { Component, ComponentInterface, Host, Prop, h } from '@stencil/core';

@Component({
  tag: 'core-avatar',
  styleUrl: 'core-avatar.less',
  shadow: true,
})
export class Avatar implements ComponentInterface {
  /**
   * Size of the element.
   */
  @Prop() size?: 'small' | 'large' = 'large';

  /**
   * Variation styling of the element.
   */
  @Prop({ reflect: true }) variation?: 'circle' | 'square' = 'circle';

  render() {
    return (
      <Host class={{ 'core-avatar': true }}>
        <slot></slot>
      </Host>
    );
  }
}
